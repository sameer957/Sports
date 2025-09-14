// import { Suspense } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { routes } from "./Routes";
// import LoadingSpinner from "../components/ui/LoadingSpinner";

// const router = createBrowserRouter(
//   routes.map((route) => ({
//     ...route,
//     element:
//      <Suspense fallback={<LoadingSpinner />}
//      >{route.element}</Suspense>,
//   }))
// );

// export const AppRoutes = () => {
//   return <RouterProvider router={router} />;
// };



// AppRoutes.js
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./Routes";

const router = createBrowserRouter(routes);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
