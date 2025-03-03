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
            <header><img src="/src/assets/img/granja.png" width="35px" style={ { verticalAlign: 'middle' } } /> <span className="text-warning" style={ { verticalAlign: 'middle' } }>Crear cuenta</span></header>
            <form autoComplete="off">
              <div className="row">
                <header><small>Datos de la granja</small></header>
                <div className="col-sm-12 col-md-6">
                  <FormInput placeholder="Nombre de la granja" errorMessage={ { required: "Campo obligatorio", invalid: "El campo es invalido" } } onValueChange={onInputChange} type="text" name="farm_name" />
                </div>
                <div className="col-sm-12 col-md-6">
                  <FormInput placeholder="Dirección" errorMessage={ { required: "Campo obligatorio", invalid: "El campo es invalido" } } onValueChange={onInputChange} type="text" name="address" />
                </div>
                <div className="col-sm-12 col-md-6">
                  <FormInput placeholder="Telefono" errorMessage={ { required: "Campo obligatorio", invalid: "El campo es invalido" } } onValueChange={onInputChange} type="text" name="phone" />
                </div>
                <div className="col-sm-12 col-md-6">
                  <FormInput placeholder="País" errorMessage={ { required: "Campo obligatorio", invalid: "El campo es invalido" } } onValueChange={onInputChange} type="text" name="country" />
                </div>
                <header className="mt-4"><small>Datos del propietario</small></header>
                <div className="col-sm-12 col-md-6">
                  <FormInput placeholder="Nombre(s)" errorMessage={ { required: "Campo obligatorio", invalid: "El campo es invalido" } } onValueChange={onInputChange} type="text" name="firstname" />
                </div>
                <div className="col-sm-12 col-md-6">
                  <FormInput placeholder="Apellido(s)" errorMessage={ { required: "Campo obligatorio", invalid: "El campo es invalido" } } onValueChange={onInputChange} type="text" name="lastname" />
                </div>
                <div className="col-sm-12 col-md-6">
                  <FormInput placeholder="Correo electronico" errorMessage={ { required: "Campo obligatorio", invalid: "El correo electronico es invalido" } } onValueChange={onInputChange} type="email" name="email_propietario" />
                </div>
                <div className="col-sm-12 col-md-6">
                  <FormInput placeholder="Contraseña" min={6} errorMessage={ { required: "Campo obligatorio", invalid: "La contraseña es invalida" } } onValueChange={onInputChange} type="password" name="password" />
                </div>
                <div className="col-sm-12 col-md-6">
                  <FormInput placeholder="Confirmar contraseña" errorMessage={ { required: "Campo obligatorio", invalid: "La confirmación de la contraseña es invalida" } } onValueChange={onInputChange} type="password" name="repassword" />              
                  { password !== repassword && repassword.length >= password.length && <small className='text-danger' style={ { fontSize: '0.9rem', position: 'absolute', display: 'block', marginTop: '-3px', marginLeft: '10px' } }>Las contraseñas no son iguales</small> }
                </div>
              </div>
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
