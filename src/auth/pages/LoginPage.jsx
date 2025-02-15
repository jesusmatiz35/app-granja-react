import { useNavigate } from "react-router";

import "../styles/login.css";
import { useForm } from "../../admin/hooks";
import { onShowHide } from "../helpers/onShowHide";
import { useEffect, useState } from "react";
import { isValidEmail, validSizeText } from "../helpers";

onShowHide();

export const LoginPage = () => {
  const { formState, onInputChange, email, password } = useForm({
    email: "",
    password: "",
  });

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPwdValid, setIsPwdValid] = useState(false);

  useEffect(() => {
    setIsEmailValid(isValidEmail(email));
  }, [email]);

  useEffect(() => {    
    setIsPwdValid(validSizeText(password, 3));
  }, [password]);

  const navigate = useNavigate();

  const onLogin = () => {
    console.log(formState);

    localStorage.setItem("authToken", true);

    //setTimeout(() => navigate("/dashboard", { replace: true }), 250);
  };

  return (
    <>
      <section className="container-form forms">
        <div className="form login">
          <div className="form-content">
            <header>Mi Granja App</header>
            <form action="#">
              <div className="field input-field">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={onInputChange}
                  placeholder="Email"
                  className="input"
                />
              </div>
              <div className="field input-field">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={onInputChange}
                  className="password"
                />
                <i
                  onClick={onShowHide}
                  className="fa fa-eye-slash eye-icon"></i>
              </div>
              <div className="form-link">
                <a href="#" className="forgot-pass">
                  ¿Ha olvidado su contraseña?
                </a>
              </div>
              <div className="field button-field">
                <button type="button" className="btn btn-primary" onClick={onLogin} disabled={ (!isEmailValid || !isPwdValid) }>
                  Ingresar
                </button>
              </div>
            </form>
          </div>
          <div className="line"></div>
          <div className="media-options">
            <div className="form-link">
              <span>
                ¿No tienes una cuenta?
                <a href="#" className="link signup-link">
                  Registrarse
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
