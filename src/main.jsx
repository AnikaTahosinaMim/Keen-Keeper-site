import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./router/Router";
import ProviderTime from "./context/TimeContext";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProviderTime>
      <RouterProvider router={router} />,
      <ToastContainer></ToastContainer>
    </ProviderTime>
  </StrictMode>,
);
