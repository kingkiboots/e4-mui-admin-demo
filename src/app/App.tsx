import ThemeProvider from "./provider/ThemeProvider";
import { appRouter } from "./appRouter";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "@tanstack/react-query";
import appMockWorker from "./appMockWorker";
import queryClient from "@/shared/config/queryClientConfig";

// api mock 데이터 등록
appMockWorker();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <RouterProvider router={appRouter} />
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
