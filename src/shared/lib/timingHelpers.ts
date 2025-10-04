import { useCallback, useRef } from "react";

export const useDebounce = () => {
  //timeout ID to keep track of the delay
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const debounce = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <T extends (...args: any[]) => void>(callback: T, delay: number) =>
      (...args: Parameters<T>) => {
        // Clear the previous timeout
        if (timeoutId.current !== null) {
          clearTimeout(timeoutId.current);
        }

        // Set a new timeout
        timeoutId.current = setTimeout(() => {
          callback(...args);
        }, delay);
      },
    []
  );

  return debounce;
};

export const useThrottle = () => {
  //현재 함수 실행 후 timeout을 기다리는 상태인지 나타내는 boolean
  const isWaiting = useRef(false);

  const throttle = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <T extends (...args: any[]) => void>(callback: T, delay: number) =>
      (...arg: Parameters<T>) => {
        //대기 상태라면 아무것도 하지 않고, 대기상태가 아니라면 아래 코드 실행
        if (!isWaiting.current) {
          //callback 함수 실행
          callback(...arg);
          //대기상태로 변경
          isWaiting.current = true;
          //delay 이후 대기상태 해제
          setTimeout(() => {
            isWaiting.current = false;
          }, delay);
        }
      },
    []
  );

  return throttle;
};
