import React from "react";
import Stars from "../components/Stars";

const DashboardData = ({ avatar, task, progbar, stars, status }) => {
  return (
    <div className="dash-data">
      <div className="avatar">
        <img src={avatar.kurt} alt="" />
      </div>
      <div className="task-name">
        <p>{task}</p>
      </div>
      <div className="task-status">
        <p>{status}</p>
      </div>

      <Stars stars={stars} />

      <div className="progress">
        <span className="prog-bar">{progbar}</span>
      </div>
      <div className="edit">
        <i class="fas fa-times"></i>
        <i class="fas fa-pen-square"></i>
      </div>
    </div>
  );
};

export default DashboardData;
