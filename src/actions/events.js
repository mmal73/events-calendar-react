import { types } from "../types/types"
import {showErrors} from './auth';
import { fetchWithToken } from "../helpers/myFetch";
import { prepareEvents } from "../helpers/prepareEvents";
export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
})
export const eventClearActive = (event) => ({
    type: types.eventSetActive
})
const eventAddNew = (event) => ({
    type: types.eventAddNew,
    payload: event
})
export const eventStartAddNew = ( event ) => {
    return async( dispatch, getState ) => {
        const resp = await fetchWithToken('events', event, 'POST');
        const data = await resp.json();
        const { _id, name } = getState().auth;
        if( data.status ){
            event.id = data.event.id;
            event.user = {
                _id,
                name
            }
            dispatch( eventAddNew( event ) );
        }else{
            showErrors( data.message, data.errors );
        }
    }
}
const eventUpdated = (event) => ({
    type: types.eventUpdated,
    payload: event
});
export const startEventUpdated = ( event ) => {
    return async( dispatch ) => {
        try {
            const resp = await fetchWithToken(`events/${event.id}`, event, 'PUT');
            const data = await resp.json();
            if( data.status ){
                dispatch( eventUpdated( event ) );
            }else{
                showErrors( data.message, data.errors );
            }
        } catch ( error ) {
            console.log(error)
        }
    }
};
export const eventDeleted = () => ({
    type: types.eventDeleted
});
export const eventStartDelete = () => {
    return async( dispatch, getState ) => {
        const { id } = getState().calendar.eventActive;
        try {
            const resp = await fetchWithToken(`events/${id}`, {}, 'DELETE');
            const data = await resp.json();
            if( data.status ){
                dispatch( eventDeleted() );
            }else{
                showErrors( data.message, data.errors );
            }
        } catch ( error ) {
            console.log(error)
        }
    }
};
export const calendarDateSelected = (event) => ({
    type: types.calendarDateSelected,
    payload: event
});
const eventLoaded = ( events ) => ({
    type: types.eventLoaded,
    payload: events
})
export const eventStartLoaded = () => {
    return async( dispatch ) => {
        try {
            const resp = await fetchWithToken('events');
            const data = await resp.json();
            if( data.status ){
                const preparedEvents = prepareEvents( data.events );
                dispatch( eventLoaded( preparedEvents ) );
            }else{
                showErrors( data.message, data.errors );
            }
        } catch (error) {
            console.log(error);
        }
    }
}
