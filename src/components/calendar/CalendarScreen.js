import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es-mx';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { messages } from '../../helpers/calendarMessages';
import CalendarEvent from './CalendarEvent';
import './CalendarScreen.css';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
moment.locale('es');
const localizer = momentLocalizer(moment)
const events = [{
    title: "Primer Evento",
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'Notas primer evento',
    user: {
        _id: 1,
        name: 'Luis'
    }
}];

export default function CalendarScreen() {

    const [currentView, setCurrentView] = useState(localStorage.getItem('currentView') || 'week');

    const onDoubleClick = (e) => {
        console.log(e)
    }
    const onSelect = (e) => {
        console.log(e)
        
    }
    const onViewEvent = (e) => {
        setCurrentView(e);
        localStorage.setItem('currentView', e);
    }
    const eventStyle = ( event,start,end,isSelected ) => {
        return {
            className: 'event-calendar'
        }
    };
    const components = {
        event: CalendarEvent, // used by each view (Month, Day, Week)
    }
    return (
        <div className="main-calendar">
            <BigCalendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyle}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                onView={onViewEvent}
                view={currentView}
                components={components}
            />
        </div>
    )
}
