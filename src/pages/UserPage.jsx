import React from "react";
import "../styles/user.css";

function UserPage() {
  return (
    <div className="user-container">
      <div className="user-box">
        <h2 className="user-heading">User Profile</h2>
        <div className="user-details">
          <div className="user-info">
            <h4>Username: JohnDoe</h4>
            <p>Email: johndoe@example.com</p>
          </div>
          <div className="user-actions">
            <button className="user-btn">Edit Profile</button>
            <button className="user-btn">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
