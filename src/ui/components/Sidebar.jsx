import { useEffect, useState } from "react";
import { Navigate, NavLink, Route, Routes } from "react-router";
import "../styles/sidebar.css";
import {
  DashboardPage,
  ShedPage,
  UserPage,
  HarvestPage,
  CostPage,
  SettingPage,
  ReportPage,
  DocPage,
} from "../../admin/pages";
import { menuItems } from "../../admin/helpers/menu";

const menu = menuItems;

export const Sidebar = () => {
  const [screen, setScreen] = useState(window.screen.width);

  useEffect(() => {
    const onScreenResize = () => {
      const width = window.screen.width;

      if (width <= 500) {
        setScreen(width);
        setTimeout(() => toggleSidebar(), 50);
      }
    };

    window.addEventListener("resize", onScreenResize);

    return () => {
      window.removeEventListener("resize", onScreenResize);
    };
  }, [screen]);

  const toggleSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("collapsed");
  };

  return (
    <>
      <div className="d-flex">
        <nav className="sidebar d-flex flex-column flex-shrink-0 position-fixed">
          <button
            id="toggle-btn"
            className="toggle-btn"
            onClick={toggleSidebar}>
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="p-4"></div>

          <div className="nav flex-column">
            {menu.map((item) => (
              <NavLink
                key={item.id}
                className={({ isActive }) =>
                  `sidebar-link text-decoration-none p-3 ${
                    isActive ? "active" : ""
                  }`
                }
                to={item.path}>
                <i className={`fas ${item.icon} me-3`}></i>
                <span className="hide-on-collapse">{item.name}</span>
              </NavLink>
            ))}
          </div>
          <div className="profile-section p-4">
            <div className="d-flex align-items-center">
              <NavLink className="ms-3 profile-info" to="/docs">
                <i className={`fas fa-file-pdf me-3`}></i>
                <span className="hide-on-collapse">Documentación</span>
              </NavLink>
            </div>
          </div>
        </nav>

        {/* Rutas de la administración */}
        <main className="main-content">
          <div className="container-fluid">
            <Routes>
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="users" element={<UserPage />} />
              <Route path="sheds" element={<ShedPage />} />
              <Route path="harvest" element={<HarvestPage />} />
              <Route path="costs" element={<CostPage />} />
              <Route path="settings" element={<SettingPage />} />
              <Route path="reports" element={<ReportPage />} />
              <Route path="docs" element={<DocPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </>
  );
};
