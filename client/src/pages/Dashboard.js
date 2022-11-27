import React from "react";
import tickets from "../DummyData";
import DashboardData from "../components/DashboardData";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="table">
        {tickets.map((ticket) => (
          <DashboardData
            avatar={ticket.avatar}
            task={ticket.task}
            progbar={ticket.progbar}
            stars={ticket.stars}
            status={ticket.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
