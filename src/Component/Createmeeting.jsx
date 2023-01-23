import React, { useState } from "react";
import MyChat from "./MyChat";
import ChatBot from "react-simple-chatbot";

function Createmeeting() {
  const [isMeeting, setIsMeeting] = useState(false);

  const handleMeeting = () => {
    setIsMeeting(true);
  };

  return (
    <>
      {isMeeting ? (
        <MyChat />
      ) : (
        <>
          <div className="lgn container">
            <div className="d-flex">
              <img
                className="mt-3 ms-3 "
                src="./logo_ONE Solution 2.png"
                alt="error"
              />
              <div className="mx-auto mt-3">
                <i class="bi bi-search "></i>
                <i class="bi bi-person-fill ps-2"></i>
              </div>
            </div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
              <div class="container-fluid mt-5">
                <a class="navbar-brand navtab" href="#">
                  Processes
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo02"
                  aria-controls="navbarTogglerDemo02"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a
                        class="nav-link active navtab1"
                        aria-current="page"
                        href="#"
                      >
                        My Activities
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link navtab1" href="#">
                        Notification
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="d-flex">
                  {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button> */}
                </div>
              </div>
            </nav>
            <div className="ms-3">
              <h4 className="mt-5 mtab" onClick={handleMeeting}>
                Create Meeting
              </h4>
              {/* <h4 className="mt-1 mtab1">Financial Transaction</h4>
        <h4 className="mt-1 mtab2">CRM Entry</h4> */}
            </div>

            <div className=" meeting-icon">
             <div className="mic-icon">
             <i class="bi bi-mic-fill "></i>
             </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between p-2">
              <i class="bi bi-house-door-fill"></i>
              <i class="bi bi-chat-dots-fill"></i>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Createmeeting;
