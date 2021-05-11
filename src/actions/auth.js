import { fetchWithoutToken, fetchWithToken } from "../helpers/myFetch";
import { types } from "../types/types";
import Swal from "sweetalert2";
import { eventClear } from "./events";

const saveToken = ( token ) => {
    localStorage.setItem( 'token', token );
    localStorage.setItem( 'token-init-date', new Date().getTime() );
}

const showErrors = (message, errors) => {
    if( !message ){
        message = '';
        for (const field in errors) {
            if (errors.hasOwnProperty(field)) {
                const _error = errors[field].msg;
                message += _error;
                message += `<br>`;
            }
        }
    }
    return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        html: message
    });
}

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});

const checkingFinish = () => ({
    type: types.authFinishCheking
});

const authLoginStart = ( email, password ) => {
    return async( dispatch ) => {
        const resp = await fetchWithoutToken('auth/login', { email, password }, 'POST');
        const data = await resp.json();
        if( data.status ){
            const { token, _id, name } = data;
            saveToken(token);
            dispatch( login({ _id, name }) )
        }else{
            showErrors( data.message, data.errors );
        }

    }
}

const startRegister = ( name, email, password ) => {
    return async( dispatch ) => {
        const resp = await fetchWithoutToken('auth/register', { name, email, password }, 'POST');
        const data = await resp.json();
        if( data.status ){
            const { token, _id } = data;
            saveToken(token);
            dispatch( login({ _id, name }) )
        }else{
            showErrors( data.message, data.errors );
        }
    };
}

const startChecking = () => {
    return async( dispatch ) => {
        const resp = await fetchWithToken('auth/renew-token');
        const data = await resp.json();
        if( data.status ){
            const { token, _id, name } = data;
            saveToken(token);
            dispatch( login({ _id, name }) )
        }else{
            dispatch( checkingFinish() );
        }
    }
}

const logout = () => ({
    type: types.authLogout
})
const startLogout = () => {
    return ( dispatch ) => {
        localStorage.removeItem('token');
        localStorage.removeItem('token-init-date');
        dispatch( eventClear() );
        dispatch( logout() );
    }
}

export{
    authLoginStart,
    startRegister,
    startChecking,
    startLogout,
    showErrors
}
