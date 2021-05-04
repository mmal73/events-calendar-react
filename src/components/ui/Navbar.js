import React from 'react';

export default function Navbar() {
    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <div className="container">
                <span className="navbar-brand">
                    Auth user
                </span>
                <button className="btn btn-danger">
                    <i className="fas fa-sign-out-alt"></i>
                    <span>
                        Salir
                    </span>
                </button>
            </div>
        </div>
    )
}
