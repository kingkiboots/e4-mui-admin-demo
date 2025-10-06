import { lazy, memo, Suspense, type ComponentProps } from "react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";

const MIcon = lazy(() =>
  import("./MIconUI").then((module) => ({ default: module.MIcon }))
);

// // LINK - https://mui.com/material-ui/material-icons

const IconFallback = ({ error }: FallbackProps) => {
  console.error("[Icon] error occured :", error);
  return <></>;
};

export const Icon = memo<ComponentProps<typeof MIcon>>((props) => {
  return (
    <Suspense>
      <ErrorBoundary FallbackComponent={IconFallback}>
        <MIcon {...props} />
      </ErrorBoundary>
    </Suspense>
  );
});

Icon.displayName = "Icon";
