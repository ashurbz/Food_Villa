import React, { useState } from "react";

const Auth = (props) => {


 
  const [authentication, setAuthentication] = useState("true");

  // function authenticate(){
  //   return true;
  // }

  return (
    <div className="flex pt-12">
      {authentication == "true" ? (
        <button
          onClick={() => {
            setAuthentication("false");
          }}
        >
          Login
        </button>
      ) : (
        <button
          onClick={() => {
            setAuthentication("true");
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Auth;
