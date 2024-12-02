import React from "react";
import ReactDOM from "react-dom/client";
const root = document.getElementById("root");
import Body from "./src/components/Body";
import Header from "./src/components/Header";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import RestaruantMenu from "./src/components/RestaruantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaruants/:resId",
        element: <RestaruantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const app = ReactDOM.createRoot(root);

app.render(<RouterProvider router={appRouter} />);
