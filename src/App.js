import React ,{lazy, Suspense}from "react";
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
import Shimmer from "./components/Shimmer";

const Instamart = lazy(()=>{
 return import('./components/HeaderComponent/Instamart')
})

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
      path:'/contact',
      element: <Contact/>
    },
    {
      path:'/instamart',
      element: <Suspense fallback={<Shimmer/>}>
        <Instamart/>
      </Suspense> 
    }
    
  ]
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes}/>)
