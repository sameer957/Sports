// import { lazy } from "react";
// import { PATHS } from "./Paths";

// const LandingPage = lazy(() => import("../pages/LandingPage"));
// const Home = lazy(() => import("../pages/Home"));
// const Category = lazy(() => import("../pages/Category"));
// const TrendingNews = lazy(() => import("../pages/TrendingNews"));
// const RecentNews = lazy(() => import("../pages/RecentNews"));
// const ClubsRanking = lazy(() => import("../pages/ClubsRanking"));
// const SportsArticle = lazy(() => import("../pages/SportsArticle"));






// export const routes = [
//   {
//     path: PATHS.LANDING_PAGE,
//     element: <LandingPage />,
//   },
//   {
//     path: PATHS.HOME,
//     element: <Home />
//   }, 
//   {
//     path: PATHS.CATEGORY,
//     element: <Category />
//   }, 
//   {
//     path: PATHS.TRENDING,
//     element: <TrendingNews />
//   },
//   {
//     path:PATHS.RECENT,
//     element:<RecentNews/>
//   },
//   {
//     path:PATHS.CLUBS,
//     element:<ClubsRanking/>
//   },
//   {
//     path:PATHS.ARTICLES,
//     element:<SportsArticle/>
//   }
// ];

// Routes.js
import { PATHS } from "./Paths";

import LandingPage from "../pages/LandingPage";
import Home from "../pages/Home";
import Category from "../pages/Category";
import TrendingNews from "../pages/TrendingNews";
import RecentNews from "../pages/RecentNews";
import ClubsRanking from "../pages/ClubsRanking";
import SportsArticle from "../pages/SportsArticle";
// import LoadingSpinner from "../components/ui/LoadingSpinner";
// import { useEffect, useState } from "react";

// function withDelay(Component:any) {
//   return function WrappedComponent() {
//     const [loading, setLoading] = useState<boolean>(true);

//     useEffect(() => {
//       const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
//       return () => clearTimeout(timer);
//     }, []);

//     if (loading) return <LoadingSpinner />;
//     return <Component />;
//   };
// }

export const routes = [
  {
    path: PATHS.LANDING_PAGE,
    element: <LandingPage />,
  },
  {
    path: PATHS.HOME,
    element: <Home />
  }, 
  {
    path: PATHS.CATEGORY,
    element: <Category />
  }, 
  {
    path: PATHS.TRENDING,
    element: <TrendingNews />
  },
  {
    path:PATHS.RECENT,
    element:<RecentNews/>
  },
  {
    path:PATHS.CLUBS,
    element:<ClubsRanking/>
  },
  {
    path:PATHS.ARTICLES,
    element:<SportsArticle/>
  }
];