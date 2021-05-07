import React from 'react';
import './login.css';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { authLoginStart } from '../../actions/auth';

export default function LoginScreen() {
    
    const dispatch = useDispatch();

    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lEmail: 'luisito@mail.com',
        lPassword: '12345678'
    });
    const { lEmail, lPassword } = formLoginValues;

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        dispatch( authLoginStart( lEmail, lPassword ) );
    }

    return (
        <div className="login-container">
            <div className="container">
                <div className="row forms-container">
                    <div className="col-md-6 login-form-1 mt-2 p-4">
                        <h3 className="text-white text-center">Ingreso</h3>
                        <form
                            className="form-container"
                            onSubmit={handleLoginSubmit}
                        >
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control input-form"
                                    placeholder="Correo"
                                    name="lEmail"
                                    value={lEmail}
                                    onChange={handleLoginInputChange}
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