import { Link, useNavigate } from "react-router";
import "../styles/navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate('/login', { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-sm p-2">
      <Link className="navbar-brand text-warning" to="/dashboard">
        <img src="/src/assets/img/granja.png" width="35px" /> 
        <span>Mi Granja App</span>
      </Link>

      <div style={{ position: 'absolute', float: 'right', right: '20px', zIndex: '10000' }}>
        <ul className="navbar-nav ml-auto">
          <button onClick={onLogout} className="nav-item btn text-light">
            <i className="fas fa-solid fa-arrow-right-from-bracket me-2"></i>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
