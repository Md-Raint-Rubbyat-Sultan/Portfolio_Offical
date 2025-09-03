import { Toaster } from "@/components/ui/sonner";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import { ThemeProvider } from "./providers/theme-provider.tsx";
import { router } from "./router/index.ts";
import MouseCursor from "./components/ui/mouseCursor.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <Toaster richColors />
      <MouseCursor />
    </ThemeProvider>
  </StrictMode>
);
