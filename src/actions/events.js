import { types } from "../types/types"

export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
})
export const eventClearActive = (event) => ({
    type: types.eventSetActive
})
export const eventAddNew = (event) => ({
    type: types.eventAddNew,
    payload: event
})
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