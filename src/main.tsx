import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider as ReduxProvider } from "react-redux";
import { Toaster } from "./components/ui/sonner.tsx";
import { RouterProvider } from "react-router";
import { router } from "./routes/index.tsx";
import { store } from "./redux/store.ts";
import { ThemeProvider } from "./providers/theme.provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <Toaster richColors />
      </ThemeProvider>
    </ReduxProvider>
  </StrictMode>,
);
