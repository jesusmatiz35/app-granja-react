import { Link, NavLink, useNavigate } from "react-router";

export const Navbar = () => {

  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate('/login', { replace: true });
  }

  return (
    <nav className="navbar navbar-expand-sm p-2" style={ { backgroundColor: "#191B29" } } >
      <Link className="navbar-brand text-warning" to="/dashboard">
        <img src="src/assets/img/granja.png" width="35px" style={ { verticalAlign: 'middle' } } /> <span style={ { verticalAlign: 'middle' } }>Mi Granja App</span>
      </Link>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <button onClick={ onLogout } className="nav-item nav-link btn text-light"><i className="fas fa-solid fa-arrow-right-from-bracket me-2"></i>Logout</button>
        </ul>
      </div>
    </nav>
  );
};
