import React from "react";
import { useState, useEffect } from "react";
import Login from "./Login";

export default function() {
  const [redirect, setRedirect] = useState(false);
  const [show, setShow] = useState(false);
  const [isShow, setIsShow] = useState(true);

  const handleAdd = () => {
    setShow(true);
    setIsShow(false);
  };

  // // useEffect(() => {
  //    setTimeout(() => {
  //   if(   setRedirect(true) ){
  //   }
  //   }, 5000);
  // // }, []);
  if (show) {
    setTimeout(() => {
      if (setRedirect(true)) {
      }
    }, 3000);
  }

  return (
    <div className="container">
      {isShow ? (
        <div className="splash">
          <button className="showhidenbtn " onClick={handleAdd}>
            {/* <img className="icnchat" src="./ICN.png" alt="" /> */}
            <i className="bi bi-chat-left-dots-fill icnbtn pd-"></i>
            {/* <img className="mblicon" src="ICN2.svg" alt="error" /> */}
          </button>
        </div>
      ) : (
        <div>
          {redirect ? (
            <Login />
          ) : (
            <div>
              <div className="OS">
                <img src="OS.png" alt="One-Solution" className="img-fluid chat-logo" />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
