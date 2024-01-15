import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import SearchComponent from "./components/SearchComponent";
import RestaurantCard from "./components/RestaurantCard";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import AboutClass from "./components/AboutClass";
import Formbody from "./components/Formbody";

import Loading from "./components/Loading";

import UserContext from "./utils/UserContext";

import useFetch from "./utils/useFetch";
// import Grocery from "./components/Grocery";

const stylecard = {
  backgroundColor: "white",
  color: "black",
};

const Grocery = lazy(() => import("./components/Grocery"));
const Abouty = lazy(() => import("./components/AboutClass"));

const AppLayout = () => {
  const [username, setUserName] = useState("");
  useEffect(() => {
    const data = {
      name: "Yusuf Khan",
    };

    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ user: username, setUserName, username }}>
      <div className="App md:container md:mx-auto px-4">
        <Header />

        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurants/:resName",
        element: <RestaurantMenu />,
      },
      {
        path: "/abouty",
        element: (
          <Suspense fallback={<Loading />}>
            <Abouty />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/form",
        element: <Formbody />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Loading />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
