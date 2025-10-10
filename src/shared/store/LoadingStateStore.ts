import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { UseLoadingStore } from "./types";

// TODO: 로딩바, 화면의 종류가 여러개일 시 state의 타입을 isLoading뿐 아니라 컴포넌트도 관리해야할 듯
//NOTE - 너무 깜빡이는 것 같아서 디바운스 처리 추가.
const LOADING_STATE_DEBOUNCE_MS = 200;
let timeoutId: NodeJS.Timeout;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const debounce = (func: (...args: any[]) => void, delay: number) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

// TODO: 로딩바, 화면의 종류가 여러개일 시 state의 타입을 isLoading뿐 아니라 컴포넌트도 관리해야할 듯
const useLoadingStore = create<UseLoadingStore>()(
  devtools(
    (set, get) => ({
      isLoading: false,
      isContinuousLoading: false,
      actions: {
        showLoading: () => {
          if (get().isContinuousLoading) {
            return;
          }
          // 기존의 hideLoading 데보운체를 취소합니다
          clearTimeout(timeoutId);
          set({ isLoading: true }, false, { type: "showLoading" });
        },
        hideLoading: debounce(() => {
          if (get().isContinuousLoading) {
            return;
          }

          set({ isLoading: false }, false, "hideLoading");
        }, LOADING_STATE_DEBOUNCE_MS),
        showCountinuousLoading: () => {
          if (get().isContinuousLoading && get().actions) {
            return;
          }

          set(
            { isLoading: true, isContinuousLoading: true },
            false,
            "showCountinuousLoading"
          );
        },
        hideCountinuousLoading: () => {
          if (!(get().isContinuousLoading || get().actions)) {
            return;
          }
          set(
            { isLoading: false, isContinuousLoading: false },
            false,
            "hideCountinuousLoading"
          );
        },
      },
    }),
    {
      name: "Loading State Store",
      anonymousActionType: "loading state changed",
      enabled: process.env.NODE_ENV === "development",
    }
  )
);

export const useLoadingActions = () =>
  useLoadingStore((store) => store.actions);
export const useLoadingIsLoading = () =>
  useLoadingStore((store) => store.isLoading);
export const useLoadingIsContinuousLoading = () =>
  useLoadingStore((store) => store.isContinuousLoading);
export const getLoadingState = () => useLoadingStore.getState();
