import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';

import './CalendarModal.css';
import { uiCloseModal } from '../../actions/ui';

// Modal
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowSum1 =  now.clone().add(1, 'hours');

export default function CalendarModal() {
    const { modalOpen } = useSelector(state => state.ui);
    
    const dispatch = useDispatch();

    // Form 
    const [formValues, setFormValues] = useState({
        title: '',
        notes: 'Notes',
        startDate: now.toDate(),
        endDate: nowSum1.toDate(),
    });
    const { title, notes, startDate, endDate } = formValues;
    
    // title form 
    const titleInvalid = (title.trim().length < 2);
    const [titleValid, setTitleValid] = useState(false);


    const handleInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    // Datepicker
    const handleStartDate = (e) => {
        setFormValues({
            ...formValues,
            startDate: e
        });
    }
    const handleEndDate = (e) => {
        setFormValues({
            ...formValues,
            endDate: e
        });
    }
    const closeModal = (e) => {
        dispatch( uiCloseModal() );
    }
    const errorSwal = (error) => {
        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error
        });
    }
    useEffect(() => {
        titleInvalid ? setTitleValid(false) : setTitleValid(true);
    }, [title, titleInvalid]);

    const eventSubmit = (e) => {
        e.preventDefault();
        
        const momentStartDate = moment(startDate);
        const momentEndDate = moment(endDate);
        if( momentStartDate.isSameOrAfter(momentEndDate) ){
            return errorSwal('La fecha fin debe ser mayor a la inicial');
        }
        if( titleInvalid ){
            return errorSwal('El titulo es obligatorio');
        }

        closeModal();
    }

    return (
        <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}
        >
            <h1>Nuevo Evento</h1>
            <form
                className="container"
                onSubmit={eventSubmit}
            >
                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker
                        className="form-control"
                        onChange={handleStartDate}
                        value={startDate}
                        format="y-MM-dd HH:mm:ss a"
                    />
                </div>
                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker
                        className="form-control"
                        onChange={handleEndDate}
                        value={endDate}
                        format="y-MM-dd HH:mm:ss a"
                        minDate={startDate}
                    />
                </div>
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input
                        type="text"
                        className={`form-control ${ titleValid ? 'is-valid' : 'is-invalid' }`}
                        placeholder="Título del evento"
                        name="title"
                        value={title}
                        onChange={handleInputChange}
                        autoComplete="off"
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>
                <div className="form-group">
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={notes}
                        onChange={handleInputChange}
                    >
                    </textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>
                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>
            </form>
        </Modal>
    )
}
