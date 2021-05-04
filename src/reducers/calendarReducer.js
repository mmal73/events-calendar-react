import moment from 'moment';
import { types } from '../types/types';

const initialState = {
    events:[{
            id: new Date().getTime(),
            title: "Primer Evento",
            start: moment().toDate(),
            end: moment().add(2, 'hours').toDate(),
            notes: 'Notas primer evento',
            user: {
                _id: 1,
                name: 'Luis'
            }
        }
    ],
    eventActive: null
};

export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.eventSetActive:
            return {
                ...state,
                eventActive: action.payload
            }
        case types.eventClearActive:
            return {
                ...state,
                eventActive: null
            }
        case types.eventAddNew:
            return {
                ...state,
                events: [
                    ...state.events,
                    action.payload
                ]
            }
        default:
            return state;
    }
}