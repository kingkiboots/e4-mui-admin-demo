// dialogService.ts
import { createRoot, type Root } from "react-dom/client";
import { Dialog } from "../ui/DialogUI";
import { useState, type Dispatch, type SetStateAction } from "react";
import { ThemeProvider } from "@mui/material/styles";
import themeConfig from "@/app/theme/themeConfig";

type DialogInstance = {
  root: Root;
  container: HTMLDivElement;
  resolve: () => void; // ✅ resolve를 인스턴스에 포함
};

// 활성 다이얼로그 관리
const activeDialogs: DialogInstance[] = [];

// Context Provider들을 여기에 추가
const withProviders = (children: React.ReactNode) => {
  return <ThemeProvider theme={themeConfig}>{children}</ThemeProvider>;
};

export const showAlert = (
  options: { title: string; description: string } | string
) => {
  const title = typeof options === "object" ? options.title : "알림";
  const description =
    typeof options === "object" ? options.description : options;

  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);

  // ✅ Promise를 먼저 생성하고 resolve를 인스턴스에 저장
  return new Promise<void>((resolve) => {
    const instance: DialogInstance = { root, container, resolve };
    activeDialogs.push(instance);

    // ✅ cleanup에서 instance.resolve() 직접 호출
    const cleanup = () => {
      const index = activeDialogs.indexOf(instance);
      if (index > -1) {
        activeDialogs.splice(index, 1);
      }

      try {
        root.unmount();
        if (container.parentNode) {
          container.parentNode.removeChild(container);
        }
      } catch (error) {
        console.error("Dialog cleanup failed:", error);
      } finally {
        instance.resolve(); // ✅ 이 인스턴스의 resolve 호출
      }
    };

    const DialogWrapper = () => {
      const [open, setOpen] = useState(true);

      const handleSetOpen: Dispatch<SetStateAction<boolean>> = (value) => {
        // ✅ 함수형 업데이트 지원
        const newValue = typeof value === "function" ? value(open) : value;
        setOpen(newValue);

        if (!newValue) {
          setTimeout(cleanup, 300);
        }
      };

      return (
        <Dialog
          type="alert"
          title={title}
          description={description}
          open={open}
          setOpen={handleSetOpen}
        />
      );
    };

    root.render(withProviders(<DialogWrapper />));
  });
};

// 모든 다이얼로그 닫기 (긴급 상황용)
export const closeAllDialogs = () => {
  // ✅ 배열 복사본을 만들어서 순회 (splice 문제 방지)
  const dialogs = [...activeDialogs];
  activeDialogs.length = 0;

  dialogs.forEach(({ root, container, resolve }) => {
    try {
      root.unmount();
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
      resolve(); // ✅ 각 Promise 완료
    } catch (error) {
      console.error("Dialog cleanup failed:", error);
      resolve(); // ✅ 에러나도 Promise는 완료시킴
    }
  });
};

// Hook 형태로도 제공
export const useDialog = () => {
  return {
    alert: showAlert,
  };
};
