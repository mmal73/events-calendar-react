import React from 'react';
import './login.css';

export default function LoginScreen() {
    return (
        <div className="login-container">
            <div className="container">
                <div className="row forms-container">
                    <div className="col-md-6 login-form-1 mt-2 p-4">
                        <h3 className="text-white text-center">Ingreso</h3>
                        <form className="form-container">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control input-form"
                                    placeholder="Correo"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control input-form"
                                    placeholder="Contraseña"
                                />
                            </div>
                            <div className="form-group d-flex justify-content-center">
                                <input
                                    type="submit"
                                    className="btn-submit"
                                    value="Login"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 login-form-2 mt-2 p-4">
                        <h3 className="text-white text-center">Registro</h3>
                        <form>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control input-form"
                                    placeholder="Nombre"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control input-form"
                                    placeholder="Correo"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control input-form"
                                    placeholder="Contraseña"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control input-form"
                                    placeholder="Repita la contraseña"
                                />
                            </div>
                            <div className="form-group d-flex justify-content-center">
                                <input
                                    type="submit"
                                    className="btn-submit"
                                    value="Crear cuenta" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}