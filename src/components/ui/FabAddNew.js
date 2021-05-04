import React from 'react';
import './FabAddNew.css';

export default function FabAddNew({handleOpenModal}) {
    return (
        <button
            className="btn btn-primary fab p-3"
            onClick={handleOpenModal}
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}
