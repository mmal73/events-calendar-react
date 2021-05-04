import moment from 'moment';
import { types } from '../types/types';

const initialState = {
    events:[{
            title: "Primer Evento",
            start: moment().toDate(),
            end: moment().add(2, 'hours').toDate(),
            bgcolor: '#fafafa',
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
        default:
            return state;
    }
}