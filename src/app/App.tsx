import ThemeProvider from "./provider/ThemeProvider";
import { appRouter } from "./appRouter";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import GlobalStyle from "./styles/GlobalStyle";
import appMockWorker from "./appMockWorker";

// api mock 데이터 등록
appMockWorker();

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <GlobalStyle />
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
