import React, { useContext } from "react";
import "./UserAccount.styles.css";
import userImg from "../../../assets/images/userimg.jpeg";
// import { Link } from "react-router-dom";
import { FetchedContext } from "../../../App";
import { useAuth0 } from "@auth0/auth0-react";

const UserAccount = () => {
  const { tasks } = useContext(FetchedContext);
  const { logout } = useAuth0();

  return (
    <div className="user-account-container">
      <div className="user-image">
        <img src={userImg} alt="" />
      </div>
      <div className="user-profile-name">Hi,have a good dayyy!!</div>
      <div className="notification-container">
        <div className="notification-heading">Notifications</div>
        <div className="notification-box">
          {tasks
            .filter((task) => task.alert === true)
            .map((task, index) => {
              return (
                <div className="notifications" key={index}>
                  <h5>{task.title}</h5>
                  <p>
                    {task.date}, {task.time}
                  </p>
                </div>
              );
            })}
        </div>
      </div>

      <button style={{ 
        backgroundColor: 'red',
        borderRadius:'10px',
        marginTop: '40px',
        width: '100%',
        color: 'white',
        padding: '10px',
        border: 'none',
        cursor: 'pointer'}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
    </div>
  );
};

export default UserAccount;
