import { types } from "../types/types";

const initialState = {
    checking: true,
    _id: '',
    name: ''
}

export const authReducer = ( state = initialState, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                ...action.payload,
                checking: false,
            }
        case types.authFinishCheking:
            return {
                ...state,
                checking: false,
            }
        case types.authLogout:
            return {
                checking: false,
            }
        default:
            return state;
    }
}