import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import BodyComponent from "./components/BodyComponent/BodyComponent";
import About from "./components/About";
import ErrorComponent from "./components/ErrorComponent";
import Footer from "./components/Footer"; 

import RestaList from "./components/RestaList";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";



const AppLayout = () => {
  return (
    <>
      <HeaderComponent/>
       <Outlet/>
      <Footer/>

    </>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    errorElement: <ErrorComponent/>,
    children:[
      {
      path: '/',
      element: <BodyComponent/>,
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/resto/:id',
      element:<RestaList/>
    }
  ]
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes}/>)
