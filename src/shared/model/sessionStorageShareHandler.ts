import {
  SESSION_STORAGE_SHARE_REMOVAL_KEY,
  SESSION_STORAGE_SHARE_SHARE_KEY,
  SESSION_STORAGE_SHARE_TRANSFER_KEY,
} from "../const";
import { getBrowserStorageController } from "../lib/browserStorageHelpers";
import type { SessionStorageShareData } from "../type";

/**
 * 현재 탭의 세션스토리지 정보를 다른 탭들에게 공유하는 함수
 * @param targetKey 공유해줄 세션스토리지 키
 * @param shouldShareCallback 데이터를 공유할지 결정하는 콜백함수 (선택사항)
 */
export const handleSharingRequest = <T>(
  targetKey: string,
  shouldShareCallback?: (key: string, value: T | null) => boolean
) => {
  const localStorageController = getBrowserStorageController("local");
  const sessionStorageController = getBrowserStorageController("session");
  const targetValue = sessionStorageController.getItem<T>(targetKey);

  if (!targetValue) {
    return;
  }

  // 콜백이 제공되었고 false를 반환하면 공유하지 않음
  if (shouldShareCallback && !shouldShareCallback(targetKey, targetValue)) {
    console.debug(
      `[sessionStorageShareHandlers] Sharing skipped for key: ${targetKey} due to callback`
    );
    return;
  }

  try {
    const dataToSet = {
      targetKey,
      value: targetValue,
    } as SessionStorageShareData;

    localStorageController.setItem(
      SESSION_STORAGE_SHARE_TRANSFER_KEY,
      JSON.stringify(dataToSet)
    );
    localStorageController.removeItem(SESSION_STORAGE_SHARE_TRANSFER_KEY);
  } catch (error) {
    console.error("[sessionStorageShareHandlers, handleSharingRequest]", error);
  }
};

/**
 * 다른 탭에서 온 데이터 삭제 요청을 처리하는 함수
 * @param targetKey 삭제할 세션스토리지 키
 * @param shouldRemoveCallback 데이터를 삭제할지 결정하는 콜백함수 (선택사항)
 */
export const handleRemovalRequest = (
  targetKey: string,
  shouldRemoveCallback?: (key: string) => boolean
) => {
  const sessionStorageController = getBrowserStorageController("session");
  const dataToRemove = sessionStorageController.getItem(targetKey);

  // 콜백이 제공되었고 false를 반환하면 삭제하지 않음
  if (shouldRemoveCallback && !shouldRemoveCallback(targetKey)) {
    console.debug(
      `[sessionStorageShareHandlers] Removal skipped for key: ${targetKey} due to callback`
    );
    return;
  }

  if (dataToRemove) {
    sessionStorageController.removeItem(targetKey);
  }
};

/**
 * 다른 탭으로부터 공유받은 데이터 자신의 세션스토리지에도 동일하게 저장하는 함수
 * @param newValue 저장할 세션스토리지의 키와 데이터로 이루어진 구조체
 * @param shouldReceiveCallback 데이터를 받을지 결정하는 콜백함수 (선택사항)
 */
export const handleDataReceive = (
  newValue: string,
  shouldReceiveCallback?: (key: string, value: string) => boolean
) => {
  const sessionStorageController = getBrowserStorageController("session");

  try {
    const dataToPaste = JSON.parse(newValue) as SessionStorageShareData;

    if (!dataToPaste.targetKey) {
      throw new Error("Missing targetKey in shared data");
    }

    // 콜백이 제공되었고 false를 반환하면 데이터를 받지 않음
    if (
      shouldReceiveCallback &&
      !shouldReceiveCallback(dataToPaste.targetKey, dataToPaste.value)
    ) {
      console.debug(
        `[sessionStorageShareHandlers] Receiving skipped for key: ${dataToPaste.targetKey} due to callback`
      );
      return;
    }

    sessionStorageController.setItem(dataToPaste.targetKey, dataToPaste.value);
  } catch (error) {
    console.error("[sessionStorageShareHandlers, handleDataReceive]", error);
  }
};

/**
 * 다른 탭에게 데이터 공유 요청을 보내는 함수
 * @param targetKey
 * @param shouldRequestCallback 데이터 공유 요청을 보낼지 결정하는 콜백함수 (선택사항)
 */
export const requestDataSharing = (
  targetKey: string,
  shouldRequestCallback?: (key: string) => boolean
) => {
  // 콜백이 제공되었고 false를 반환하면 요청하지 않음
  if (shouldRequestCallback && !shouldRequestCallback(targetKey)) {
    console.debug(
      `[sessionStorageShareHandlers] Request skipped for key: ${targetKey} due to callback`
    );
    return;
  }

  const localStorageController = getBrowserStorageController("local");
  localStorageController.setItem(SESSION_STORAGE_SHARE_SHARE_KEY, targetKey);
  localStorageController.removeItem(SESSION_STORAGE_SHARE_SHARE_KEY);
};

/**
 * 다른 탭들에게 데이터 삭제 요청을 보내는 함수
 * @param targetKey
 * @param shouldRequestRemovalCallback 데이터 삭제 요청을 보낼지 결정하는 콜백함수 (선택사항)
 */
export const requestDataRemoval = (
  targetKey: string,
  shouldRequestRemovalCallback?: (key: string) => boolean
) => {
  // 콜백이 제공되었고 false를 반환하면 요청하지 않음
  if (
    shouldRequestRemovalCallback &&
    !shouldRequestRemovalCallback(targetKey)
  ) {
    console.debug(
      `[sessionStorageShareHandlers] Removal request skipped for key: ${targetKey} due to callback`
    );
    return;
  }

  const localStorageController = getBrowserStorageController("local");
  localStorageController.setItem(SESSION_STORAGE_SHARE_REMOVAL_KEY, targetKey);
  localStorageController.removeItem(SESSION_STORAGE_SHARE_REMOVAL_KEY);
};
