import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Favoritos } from "./pages/favoritos";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/favoritos",
    element: <Favoritos />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
