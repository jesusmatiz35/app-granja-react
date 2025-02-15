import { useNavigate } from "react-router";

export const LoginPage = () => {

  const navigate = useNavigate();

  const onLogin = () => {

    localStorage.setItem("authToken", true);

    setTimeout(() => navigate('/dashboard', { replace: true }), 250);
  }
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button onClick={ onLogin } className="btn btn-primary">Login</button>
    </div>
  )
}
