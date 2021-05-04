import React from 'react';
import './FabAddNew.css';

export default function FabAddNew({ className, handleClick, text}) {
    return (
        <button
            className={`btn ${className}`}
            onClick={handleClick}
        >
            {text}
        </button>
    )
}
