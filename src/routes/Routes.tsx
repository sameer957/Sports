import { lazy } from "react";
import { PATHS } from "./Paths";

const LandingPage = lazy(() => import("../pages/LandingPage"));
const Home = lazy(() => import("../pages/Home"));
const Category = lazy(() => import("../pages/Category"));
const TrendingNews = lazy(() => import("../pages/TrendingNews"));
const RecentNews = lazy(() => import("../pages/RecentNews"));
const ClubsRanking = lazy(() => import("../pages/ClubsRanking"));
const SportsArticle = lazy(() => import("../pages/SportsArticle"));






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