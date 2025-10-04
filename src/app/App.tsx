import ThemeProvider from "./provider/ThemeProvider";
import { appRouter } from "./appRouter";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import GlobalStyle from "./styles/GlobalStyle";

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
