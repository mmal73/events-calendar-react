import { types } from "../types/types"
import {showErrors} from './auth';
import { fetchWithToken } from "../helpers/myFetch";
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
export const eventUpdated = (event) => ({
    type: types.eventUpdated,
    payload: event
})
export const eventDeleted = () => ({
    type: types.eventDeleted
})
export const calendarDateSelected = (event) => ({
    type: types.calendarDateSelected,
    payload: event
})