import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Homepage from "./home/Homepage";
import TimeLine from "./timeline/TimeLine";
import Status from "./status/Status";
import Mainlayout from "./layout/Mainlayout";
import Nofound from "./components/notFound/Nofound";
import FreindDatails from "./ui/FreindDatails";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children: [
      { index: true, Component: Homepage },
      { path: "/timeline", Component: TimeLine },
      { path: "/status", Component: Status },
      { path: "/:id", Component: FreindDatails },
    ],
    errorElement: <Nofound></Nofound>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
