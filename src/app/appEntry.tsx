import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Suspense } from "react";

const rootElement = document.getElementById("wrap") as HTMLElement;
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    rootElement,
    <Suspense fallback={<></>}>
      <App />
    </Suspense>
  );
} else {
  ReactDOM.createRoot(rootElement).render(
    <Suspense fallback={<></>}>
      <App />
    </Suspense>
  );
}
