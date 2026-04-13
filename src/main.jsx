import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Homepage from "./home/Homepage";
import TimeLine from "./timeline/TimeLine";
import Status from "./status/Status";
import Mainlayout from "./layout/Mainlayout";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children: [
      { index: true, Component: Homepage },
      { path: "/timeline", Component: TimeLine },
      { path: "/status", Component: Status },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
