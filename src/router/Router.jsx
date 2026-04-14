import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Homepage from "../home/Homepage";
import TimeLine from "../timeline/TimeLine";
import Status from "../status/Status";
import FreindDatails from "../ui/FreindDatails";
import Nofound from "../components/notFound/Nofound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children: [
      { index: true, Component: Homepage },
      { path: "/timeline", Component: TimeLine },
      { path: "/status", Component: Status },
      { path: "/:id", Component: FreindDatails },
    ],
    errorElement: Nofound,
  },
]);
