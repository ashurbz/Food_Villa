import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import BodyComponent from "./components/BodyComponent/BodyComponent";
import About from "./components/About";
import ErrorComponent from "./components/ErrorComponent";
import Footer from "./components/Footer"; 
import Profile from "./components/Profile";
import RestaList from "./components/RestaList";
import Contact from "./components/Contact";
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
      element:<About/>,
      children:[{
        path:'profile',
        element:<Profile/>
      }]
    },
    {
      path:'/resto/:id',
      element:<RestaList/>
    },
    {
      path:'contact',
      element: <Contact/>
    }
    
  ]
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes}/>)
