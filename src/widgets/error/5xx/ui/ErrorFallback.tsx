import React, { useCallback } from "react";
import type { FallbackProps } from "react-error-boundary";

const ErrorFallback: React.ComponentType<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  const renderErrors = useCallback((error?: object): React.ReactNode => {
    if (!error) {
      return <></>;
    }
    if (typeof error === "object") {
      return Object.entries(error).map(([key, value]) => {
        if (typeof value === "object") {
          if (Array.isArray(value)) {
            return <>{JSON.stringify(value)}</>;
          }
          return renderErrors(value);
        }
        return (
          <p>
            {key} : {value}
          </p>
        );
      });
    }
  }, []);

  return (
    <div>
      {error?.message ? (
        <>
          <span>message: {error?.message}...</span>
          <br />
        </>
      ) : null}
      {renderErrors(error)}
      <br />
      {resetErrorBoundary ? (
        <button type="button" onClick={resetErrorBoundary} color="red">
          Try again
        </button>
      ) : null}
    </div>
  );
};

export default ErrorFallback;
