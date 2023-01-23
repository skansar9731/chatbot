import React, { useEffect, useState } from "react";
// import Chat from "./Chat"
import MyChat from "./MyChat";
import Createmeeting from "./Createmeeting";
import Splash from "./Splash";

function Login() {
  const [name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    if (name != "" && Password !== "") {
      setIsLoggedIn(true);
    }
  }

  return (
    <div>
      {isLoggedIn ? (
        // <MyChat />
        <Createmeeting />
      ) : (
        <div className="lgn container">
             <img src="OS.png" alt="One-Solution" className="img-fluid login-logo-chat" />
        <div className="py-5 iunside-login">
        <div className="mb-3 mt-5">
          <label htmlFor="" className="chat-label">Username</label>
          <input
            className="inpt"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          </div>
          <div className="mb-5">
          <label htmlFor="" className="chat-label">Password</label>
          <input
            className="inpt"
            type="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          <div className="d-flex">
                <button className="mx-auto btn-login-chat" onClick={handleLogin}>Login</button>
           </div> 
          </div>
        
          
          </div>
        
      )}
    </div>
  );
}

export default Login;
