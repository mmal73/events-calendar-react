import { fetchWithoutToken } from "../helpers/myFetch";
import { types } from "../types/types";
import Swal from "sweetalert2";

export const authLoginStart = ( email, password ) => {
    return async( dispatch ) => {
        const resp = await fetchWithoutToken('auth/login', { email, password }, 'POST');
        const data = await resp.json();
        if( data.status ){

            const { token, _id, name } = data;
            localStorage.setItem( 'token', token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );

            dispatch( login({ _id, name }) )
        }else{
            let errors = data.message ;
            if( !errors ){
                errors = '';
                Object.entries( data.errors ).map( error => {
                    const _error = error[1]?.msg;
                    errors += _error;
                    errors += `<br>`;
                });
            }
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: errors
            });
        }

    }
}

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});