import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AppLayout } from "./components/Layout/AppLayout";

import React from "react";

import "./App.css";

import { Home } from "./pages/Home";
import { Country } from "./pages/Country";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
