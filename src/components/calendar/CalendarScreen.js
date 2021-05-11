import React, { useState, useEffect } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es-mx';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useDispatch, useSelector } from 'react-redux';

import { messages } from '../../helpers/calendarMessages';
import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';
import './CalendarScreen.css';
import { uiOpenModal } from '../../actions/ui';
import { eventSetActive, eventDeleted, eventClearActive, calendarDateSelected, eventStartLoaded } from '../../actions/events';
import FabAddNew from '../ui/FabAddNew';
import Navbar from '../ui/Navbar';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
moment.locale('es');
const localizer = momentLocalizer(moment)

export default function CalendarScreen() {
    const { events, eventActive } = useSelector(state => state.calendar)
    const { _id } = useSelector(state => state.auth)
    const dispatch = useDispatch();

    const [currentView, setCurrentView] = useState(localStorage.getItem('currentView') || 'week');

    useEffect(() => {
        dispatch( eventStartLoaded() );
    }, [dispatch]);

    const handleOpenModal = (e) => {
        dispatch( uiOpenModal() );
    }
    const handleDeleteEvent = (e) => {
        dispatch( eventDeleted() );
    }
    const handleSelectSlot = ({start}) => {
        dispatch( calendarDateSelected(start) );
        eventActive && dispatch( eventClearActive() );
    }
    const onSelect = (e) => {
        dispatch( eventSetActive(e) );
    }
    const onViewEvent = (e) => {
        setCurrentView(e);
        localStorage.setItem('currentView', e);
    }
    const eventStyle = ( event,start,end,isSelected ) => {
        return {
            className: `event-calendar ${ event.user._id === _id ? 'event-own' : 'event-not-own'}`
        }
    };
    const components = {
        event: CalendarEvent, // used by each view (Month, Day, Week)
    }
    return (
        <div className="main-calendar">
            <Navbar/>
            <BigCalendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyle}
                onDoubleClickEvent={handleOpenModal}
                onSelectEvent={onSelect}
                onView={onViewEvent}
                view={currentView}
                components={components}
                onSelectSlot={handleSelectSlot}
                selectable={true}
            />
            <FabAddNew
                className='btn-primary fab-add'
                text={<i className="fas fa-plus"></i>}
                handleClick={handleOpenModal}
            />
            {
                eventActive && 
                <FabAddNew
                    className='btn-danger fab-delete'
                    text={<i className="fas fa-trash"></i>}
                    handleClick={handleDeleteEvent}
                />
            }
            <CalendarModal
            />
        </div>
    )
}
