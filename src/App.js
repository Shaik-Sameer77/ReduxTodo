import {
    createBrowserRouter,
    Outlet,
  } from "react-router-dom";
import Favorites from "./components/Favorites";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ErrorPage from "./ErrorPage"


const AppLayout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };
  
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "Favorites",
          element: <Favorites />,
        },
      ],
    },
  ]);


  export default router