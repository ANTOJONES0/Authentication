import { useState } from "react";
import Sidebar from "../components/Sidebar";
import D_homes from "../components/D_home";
import D_caterings from "../components/D_caterings";
import D_events from "../components/D_events";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("home");
  const [isCollapsed, setIsCollapsed] = useState(false); // Share with Sidebar

  const renderContent = () => {
    switch (activePage) {
      case "home":
        return <D_homes />;
      case "caterings":
        return <D_caterings />;
      case "events":
        return <D_events />;
      default:
        return <D_homes />;
    }
  };

  return (
    <div className="d-flex">
      <Sidebar setActivePage={setActivePage} setIsCollapsed={setIsCollapsed} />
      <div
        className="flex-grow-1 p-4"
        style={{
          backgroundColor: "#f8f9fa",
          minHeight: "100vh",
          marginLeft: isCollapsed ? "80px" : "250px", // Adjust content shift
          transition: "margin-left 0.3s ease"
        }}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
