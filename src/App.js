import React ,{lazy, Suspense, useState}from "react";
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
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import CartItems from "./components/CartItems";
import store from "./utils/store";

const Instamart = lazy(()=>{
 return import('./components/HeaderComponent/Instamart')
})

const AppLayout = () => {
  const [userInfo , setUserInfo] = useState({
      name:'Ashish',
      email :'rbzashu@gmail.com'
    
  })
  return (
    <Provider store={store}>
    <UserContext.Provider value={{
      userInfo:userInfo,
      setUserInfo:setUserInfo
    }
      
    }>
      <HeaderComponent/>
       <Outlet/>
      <Footer/>
      </UserContext.Provider>

    </Provider>
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
      element: <BodyComponent userInfo={{
        name:'Ashish',
        email :'rbzashu@gmmail.com'
      }}/>,
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
    },
    {
      path:'/cart',
      element: <CartItems/>
    }
    
  ]
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes}/>)
