import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import BodyComponent from "./components/BodyComponent/BodyComponent";
import {CARD_IMG_URL,restoData } from ".././constant";


const AppLayout = () => {
  return (
    <>
      <HeaderComponent/>
      <BodyComponent/>

    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);