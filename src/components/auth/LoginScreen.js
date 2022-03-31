import React from "react";
import "./login.css";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { authLoginStart } from "../../actions/auth";
import { startRegister } from "../../actions/auth";

export default function LoginScreen() {
  const dispatch = useDispatch();

  const [formLoginValues, handleLoginInputChange] = useForm({
    lEmail: "admin@calendarapp.com",
    lPassword: "password123",
  });
  const { lEmail, lPassword } = formLoginValues;

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    rName: "",
    rEmail: "",
    rPassword1: "",
    rPassword2: "",
  });
  const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(authLoginStart(lEmail, lPassword));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (rPassword1 !== rPassword2) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "Las contranseñas no son iguales",
      });
    }
    dispatch(startRegister(rName, rEmail, rPassword1));
  };

  return (
    <div className="login-container">
      <div className="container">
        <div className="row forms-container">
          <div className="col-md-6 login-form-1 mt-2 p-4">
            <h3 className="text-white text-center">Ingreso</h3>
            <form className="form-container" onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control input-form"
                  placeholder="Correo"
                  name="lEmail"
                  value={lEmail}
                  onChange={handleLoginInputChange}
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control input-form"
                  placeholder="Contraseña"
                  name="lPassword"
                  value={lPassword}
                  onChange={handleLoginInputChange}
                  autoComplete="off"
                />
              </div>
              <div className="form-group d-flex justify-content-center">
                <input
                  type="submit"
                  className="btn-submit"
                  value="Login"
                  autoComplete="off"
                />
              </div>
            </form>
          </div>
          <div className="col-md-6 login-form-2 mt-2 p-4">
            <h3 className="text-white text-center">Registro</h3>
            <form onSubmit={handleRegisterSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control input-form"
                  placeholder="Nombre"
                  name="rName"
                  value={rName}
                  onChange={handleRegisterInputChange}
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control input-form"
                  placeholder="Correo"
                  name="rEmail"
                  value={rEmail}
                  onChange={handleRegisterInputChange}
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control input-form"
                  placeholder="Contraseña"
                  name="rPassword1"
                  value={rPassword1}
                  onChange={handleRegisterInputChange}
                  autoComplete="off"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control input-form"
                  placeholder="Repita la contraseña"
                  name="rPassword2"
                  value={rPassword2}
                  onChange={handleRegisterInputChange}
                  autoComplete="off"
                />
              </div>
              <div className="form-group d-flex justify-content-center">
                <input
                  type="submit"
                  className="btn-submit"
                  value="Crear cuenta"
                  autoComplete="off"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
