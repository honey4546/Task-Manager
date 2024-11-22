import React, { useContext } from "react";
import "./DashNav.styles.css";
import userImg from "../../../assets/images/userimg.jpeg";
import { DashContext } from "..";
import { FetchedContext } from "../../../App";
import { useAuth0 } from "@auth0/auth0-react";
const DashNav = () => {

  const {isDash, setIsDash} = useContext(DashContext);
  const {openUserAccount, setOpenUserAccount} = useContext(FetchedContext);
  const { user, isAuthenticated } = useAuth0();

  const dashClick = ()=>{
    setIsDash(true)
  }
  const taskClick = ()=>{
    setIsDash(false)
  }
  return (
    <div className="dash-nav">
      <div className="dash-logo">
        <span>Task</span>Manager
      </div>
      {/* Dash/Tasks Toggler */}
      <div className="dash-tasks-togg">
        <div className={`dash-tog-btn dash-btn ${isDash?"active-toggle" : ""}`} onClick={dashClick}>
          Dashboard
        </div>
        <div className={`dash-tog-btn tasks-btn ${isDash? "": "active-toggle"}`} onClick={taskClick} >
          Tasks
        </div>
      </div>

      <div className="user-account-name">
        {/* For Responsiveness */}
        <div className="user-img-state" onClick={()=>{
          setOpenUserAccount(!openUserAccount);
        }}>
          <img className="user-img-img" src={userImg} alt="" />
        </div>
        {/* For Regular Use */}
        <div className="user-img">
        <img className="user-img" src={userImg} alt="" />
        </div>
        {
          isAuthenticated &&
        <span className="user-name">Hi,{user.name}</span>
        }
      </div>
    </div>
  );
};

export default DashNav;
