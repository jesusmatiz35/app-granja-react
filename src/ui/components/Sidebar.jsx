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
import { ShedDetails } from "../../admin/pages/shed/components/ShedDetails";

const menu = menuItems;

export const Sidebar = () => {
  const [screen, setScreen] = useState(window.innerWidth);

  useEffect(() => {
    const onScreenResize = () => {
      const width = window.innerWidth;
      setScreen(width);

      if (width > 768) {
        const sidebar = document.querySelector(".sidebar");
        sidebar.classList.remove("collapsed");
      } else {
        const sidebar = document.querySelector(".sidebar");
        sidebar.classList.add("collapsed");
      }
    };

    window.addEventListener("resize", onScreenResize);

    // Initial check
    onScreenResize();

    return () => {
      window.removeEventListener("resize", onScreenResize);
    };
  }, [screen]);

  const toggleSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("collapsed");
  };

  const handleNavLinkClick = () => {
    if (screen <= 768) {
      toggleSidebar();
    }
  };

  return (
    <>
      <div className="d-flex" style={{ zIndex: "10000" }}>     
        <nav className="sidebar d-flex flex-column flex-shrink-0 position-fixed mt-5">
          <button
            id="toggle-btn"
            className="toggle-btn"
            onClick={toggleSidebar}>
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="p-1"></div>

          <div className="nav flex-column">
            {menu.map((item) => (
              <NavLink
                key={item.id}
                className={({ isActive }) =>
                  `sidebar-link text-decoration-none p-3 ${
                    isActive ? "active" : ""
                  }`
                }
                to={item.path}
                onClick={handleNavLinkClick}>
                <i className={`fas ${item.icon} me-3`}></i>{" "}
                <span className="pl-3">{item.name}</span>
              </NavLink>
            ))}
          </div>
          <div className="profile-section p-4 mt-0">
            <div className="d-flex align-items-center">
              <NavLink className="ms-3 profile-info" to="/docs" onClick={handleNavLinkClick}>
                <i className={`fas fa-file-pdf me-3`}></i>{" "}
                <span className="pl-3">Documentación</span>
              </NavLink>
            </div>
          </div>
        </nav>

        {/* Rutas de la administración */}
        <main className="main-content mt-5">
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
              <Route path="sheds/detail/:id" element={<ShedDetails /> } />
            </Routes>
          </div>
        </main>
      </div>
    </>
  );
};
