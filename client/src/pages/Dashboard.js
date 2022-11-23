import React from "react";
import kurt_img from "../images/square_kurt.jpg";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>

      <div className="table">
        <div className="avatar">
          <img src={kurt_img} alt="" />
        </div>
        <div className="task-name">
          <p>My first task</p>
        </div>
        <div className="task-status">
          <p>Stuck</p>
        </div>
        <div className="prog-status">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star "></span>
          <span class="fa fa-star "></span>
          <span class="fa fa-star "></span>
        </div>
        <div className="progress">
          <span className="prog-bar">f</span>
        </div>
        <div className="edit">
          <i class="fas fa-times"></i>
          <i class="fas fa-pen-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
