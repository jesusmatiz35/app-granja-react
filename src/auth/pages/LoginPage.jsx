import { Link, useNavigate } from "react-router";

import "../styles/login.css";
import { useForm } from "../../admin/hooks";
import { useEffect, useState } from "react";
import { isValidEmail, validSizeText } from "../helpers";
import { FormButton, FormInput } from "../../ui/components/forms";

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
    setIsPwdValid(validSizeText(password, 1));
  }, [password]);

  const navigate = useNavigate();

  const onLogin = () => {
    console.log(formState);

    localStorage.setItem("authToken", true);

    setTimeout(() => navigate("/dashboard", { replace: true }), 250);
  };

  return (
    <>
      <section className="container-form forms">
        <div className="form-custom login">
          <div className="form-content">
            <header>Mi Granja App</header>
            <form action="#">
              <FormInput
                placeholder="Correo electronico"
                errorMessage={{
                  required: "Campo obligatorio",
                  invalid: "El correo electronico es invalido",
                }}
                onValueChange={onInputChange}
                type="email"
                name="email"
              />
              <FormInput
                placeholder="Contraseña"
                min={1}
                errorMessage={{
                  required: "Campo obligatorio",
                }}
                onValueChange={onInputChange}
                type="password"
                name="password"
              />
              <div className="form-link">
                <a href="#" className="forgot-pass">
                  ¿Ha olvidado su contraseña?
                </a>
              </div>
              <div className="field button-field">
                <FormButton
                  label="Ingresar"
                  onButtonClick={onLogin}
                  className="btn-primary"
                  disabled={ !isEmailValid || !isPwdValid }
                />
              </div>
            </form>
          </div>
          <div className="line"></div>
          <div className="media-options">
            <div className="form-link">
              <span>
                ¿No tienes una cuenta?
                <Link className="link signup-link" to="/register">
                  Registrarse
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
