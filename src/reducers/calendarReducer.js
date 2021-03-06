import { types } from '../types/types';

const initialState = {
    events:[],
    eventActive: null,
    calendarDateSelected: null
};

export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.eventSetActive:
            return {
                ...state,
                calendarDateSelected: null,
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
        case types.eventUpdated:
            return {
                ...state,
                events: state.events.map( e => (
                    e.id === action.payload.id ? action.payload : e
                ))
            }
        case types.eventDeleted:
            return {
                ...state,
                events: state.events.filter( e => (
                    e.id !== state.eventActive.id
                )),
                eventActive: null
            }
        case types.eventLoaded:
            return {
                ...state,
                events: [ ...action.payload ]
            }
        case types.calendarDateSelected:
            return {
                ...state,
                calendarDateSelected: action.payload
            }
        case types.eventClear:
            return {
                ...state,
                ...initialState
            };
        default:
            return state;
    }
}