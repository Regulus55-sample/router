import { createBrowserRouter } from "react-router-dom";
import { Home, NotFound, Page1, Page2, Page3, Page4, Page5 } from "./pages";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/page1",
        element: <Page1 />,
      },
      {
        path: "/page2",
        element: <Page2 />,
      },
      {
        path: "/page3",
        element: <Page3 />,
      },
      {
        path: "/page4",
        element: <Page4 />,
      },
      {
        path: "/page5",
        element: <Page5 />,
      },
    ],
  },
]);

export default router;
