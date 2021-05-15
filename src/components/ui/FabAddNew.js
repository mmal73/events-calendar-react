import React from 'react';
import PropTypes from 'prop-types';
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

FabAddNew.propTypes = {
    text: PropTypes.element.isRequired,
    handleClick: PropTypes.func.isRequired,
    className: PropTypes.string,
}