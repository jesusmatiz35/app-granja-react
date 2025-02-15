import { Link } from "react-router";
import "../styles/login.css";
import { isValidEmail, onShowHide, validSizeText } from "../helpers";
import { useForm } from "../../admin/hooks";
import { useEffect, useState } from "react";

onShowHide();

export const RegisterPage = () => {
  const { formState, onInputChange, email, password, repassword } = useForm({
    email: "",
    password: "",
    repassword: "",
  });

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPwdValid, setIsPwdValid] = useState(false);
  const [isRePwdValid, setIsRePwdValid] = useState(false);

  useEffect(() => {
    setIsEmailValid(isValidEmail(email));
  }, [email]);

  useEffect(() => {
    setIsPwdValid(validSizeText(password, 0));
  }, [password]);

  useEffect(() => {
    setIsRePwdValid( password === repassword && validSizeText(repassword, 0));
  }, [repassword]);

  const onRegister = () => {
    console.log(formState);
  };

  return (
    <>
      <section className="container-form forms">
        <div className="form-custom signup">
          <div className="form-content">
            <header>Registro</header>
            <form autoComplete="off">
              <div className="field input-field">
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electronico"
                  onChange={onInputChange}
                  className="input"
                />
              </div>
              <div className="field input-field">
                <input
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  onChange={onInputChange}
                  className="password"
                />
              </div>
              <div className="field input-field">
                <input
                  type="password"
                  name="repassword"
                  placeholder="Confirmar contraseña"
                  onChange={onInputChange}
                  className="password"
                />
                <i
                  onClick={onShowHide}
                  className="fa fa-eye-slash eye-icon"></i>
              </div>
              <div className="field button-field">
                <button
                  type="button"
                  disabled={ (!isEmailValid || !isPwdValid || !isRePwdValid) }
                  onClick={onRegister}
                  className="btn btn-primary">
                  Registrarse
                </button>
              </div>
            </form>
          </div>
          <div className="line"></div>
          <div className="media-options">
            <div className="form-link">
              <span>
                ¿Ya tienes una cuenta?{" "}
                <Link className="link login-link" to="/login">
                  Ingresar
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
