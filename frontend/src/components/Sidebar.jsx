import { useState } from "react";
import style from "../styles/sidebar.module.css";

const Sidebar = ({ setActivePage, setIsCollapsed }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    const newState = !collapsed;
    setCollapsed(newState);
    setIsCollapsed(newState); // Notify parent
  };

  return (
    <div className={`${style.sidebar} ${collapsed ? style.collapsed : ""}`}>
      <div className="d-flex justify-content-between align-items-center px-3 py-2">
        {!collapsed && <h5 className="text-white mb-0">Anto Jones</h5>}
        <i className={`bi bi-list text-white fs-4 ${style.toggleBtn}`} onClick={toggleSidebar}></i>
      </div>

      <ul className="nav flex-column mt-4">
        <li className={`nav-item ${style.navItem}`} onClick={() => setActivePage("home")}>
          <i className={`bi bi-house-door-fill ${style.icon}`}></i>
          {!collapsed && <span>Home</span>}
        </li>
        <li className={`nav-item ${style.navItem}`} onClick={() => setActivePage("caterings")}>
          <i className={`bi bi-people-fill ${style.icon}`}></i>
          {!collapsed && <span>Caterings</span>}
        </li>
        <li className={`nav-item ${style.navItem}`} onClick={() => setActivePage("events")}>
          <i className={`bi bi-file-earmark-text-fill ${style.icon}`}></i>
          {!collapsed && <span>Events</span>}
        </li>
        <li className={`nav-item ${style.navItem}`} onClick={() => setActivePage("schedules")}>
          <i className={`bi bi-calendar-event-fill ${style.icon}`}></i>
          {!collapsed && <span>Schedules</span>}
        </li>

        <hr className="bg-secondary mx-3" />

        <li className={`nav-item ${style.navItem}`} onClick={() => setActivePage("notifications")}>
          <i className={`bi bi-bell-fill ${style.icon}`}></i>
          {!collapsed && <span>Notifications</span>}
        </li>
        <li className={`nav-item ${style.navItem}`} onClick={() => setActivePage("settings")}>
          <i className={`bi bi-gear-fill ${style.icon}`}></i>
          {!collapsed && <span>Settings</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
