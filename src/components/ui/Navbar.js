import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';

export default function Navbar() {

    const { name } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <div className="container">
                <span className="navbar-brand">
                    { name }
                </span>
                <button
                    className="btn btn-danger"
                    onClick={ handleLogout }
                >
                    <i className="fas fa-sign-out-alt"></i>
                    <span>
                        Salir
                    </span>
                </button>
            </div>
        </div>
    )
}
