import { Link } from "react-router";
import "../styles/login.css";
import { isValidEmail, onShowHide, validSizeText } from "../helpers";
import { useForm } from "../../admin/hooks";
import { useEffect, useState } from "react";
import { FormButton, FormInput } from "../../ui/components/forms";

onShowHide();

export const RegisterPage = () => {
  const { formState, onInputChange, email, password, repassword } = useForm({
    email: "",
    password: "",
    repassword: "",
  });

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPwdValid, setIsPwdValid] = useState(false);
  const [equalPwdRePwd, setEqualPwdRePwd] = useState(false);  

  useEffect(() => {
    setIsEmailValid(isValidEmail(email));
  }, [email]);

  useEffect(() => {
    setIsPwdValid(validSizeText(password, 1));
    setEqualPwdRePwd(password === repassword);
  }, [password]);

  useEffect(() => {
    setEqualPwdRePwd(password === repassword);
  }, [repassword]);

  const onRegister = () => {
    console.log(formState);
  };

  return (
    <>
      <section className="container-form forms">
        <div className="form-custom signup">
          <div className="form-content">
            <header><img src="src/assets/img/granja.png" width="35px" style={ { verticalAlign: 'middle' } } /> <span className="text-warning" style={ { verticalAlign: 'middle' } }>Crear cuenta</span></header>
            <form autoComplete="off">
              <FormInput placeholder="Correo electronico" errorMessage={ { required: "Campo obligatorio", invalid: "El correo electronico es invalido" } } onValueChange={onInputChange} type="email" name="email" />
              <FormInput placeholder="Contraseña" min={6} errorMessage={ { required: "Campo obligatorio", invalid: "La contraseña es invalida" } } onValueChange={onInputChange} type="password" name="password" />
              <FormInput placeholder="Confirmar contraseña" errorMessage={ { required: "Campo obligatorio", invalid: "La confirmación de la contraseña es invalida" } } onValueChange={onInputChange} type="password" name="repassword" />              
              { password !== repassword && repassword.length >= password.length && <small className='text-danger' style={ { fontSize: '0.9rem', position: 'absolute', display: 'block', marginTop: '-3px', marginLeft: '10px' } }>Las contraseñas no son iguales</small> }
              <div className="field button-field">
                <FormButton 
                  label="Registrarse" 
                  onButtonClick={onRegister} 
                  className="btn-primary" 
                  disabled={!isEmailValid || !isPwdValid || !(password === repassword && repassword.length >= password.length)} 
                  />
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
