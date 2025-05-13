import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import AllServices from "../Pages/AllServices";
import ServiceDetails from "../Pages/ServiceDetails";
import Contact from "../Pages/Contact/Contact";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import Protfolio from "../Pages/Protfolio/Protfolio";
import ProtfolioDetails from "../Pages/ProtfolioDetails/ProtfolioDetails";
import LuminaryHealth from "../Pages/ProtfolioDetails/LuminaryHealth";
import PalPlug from "../Pages/ProtfolioDetails/PalPlug";
import Liberty91 from "../Pages/ProtfolioDetails/Liberty91";
import GunBuyBack from "../Pages/ProtfolioDetails/GunBuyBack";
import LastingLove from "../Pages/ProtfolioDetails/LastingLove";
import EcomOrbit from "../Pages/ProtfolioDetails/EcomOrbit";
import Wellwink from "../Pages/ProtfolioDetails/Wellwink";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-services",
        element: <AllServices />,
      },
      {
        path: "/service-details",
        element: <ServiceDetails />,
      },
      {
        path: "/all-blog",
        element: <AllBlogs />,
      },
      {
        path: "/blog-details",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/protfolio",
        element: <Protfolio />,
      },
      {
        path: "/protfolio-details",
        element: <ProtfolioDetails />,
      },
      {
        path: "/luminary-health",
        element: <LuminaryHealth />,
      },
      {
        path: "/palPlug",
        element: <PalPlug />,
      },
      {
        path: "/liberty91",
        element: <Liberty91 />,
      },
      {
        path: "/gunBuyBack",
        element: <GunBuyBack />,
      },
      {
        path: "/ecomOrbit",
        element: <EcomOrbit />,
      },
      {
        path: "/lastingLove",
        element: <LastingLove />,
      },
      {
        path: "/wellwink",
        element: <Wellwink />,
      },
    ],
  },
]);
