import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MainLayout from "./layouts/MainLayout";
import PronouncementPage from "./pages/PronouncementPage";
import ErrorPage from "./pages/ErrorPage";
import DonePage from "./pages/DonePage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <WelcomePage /> },
      {
        path: "/pronouncement",
        element: <PronouncementPage />,
      },
      {
        path: "/done",
        element: <DonePage />,
      },
      {
        path: "/error",
        element: <ErrorPage />,
      },
    ],
  },
]);
