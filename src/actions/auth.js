import { fetchWithoutToken } from "../helpers/myFetch";
import { types } from "../types/types";

export const authLoginStart = ( email, password ) => {
    return async( dispatch ) => {
        const resp = await fetchWithoutToken('auth/login', { email, password }, 'POST');
        const data = await resp.json();
        if( data.status ){
            
            const { token, _id, name } = data;
            localStorage.setItem( 'token', token );
            localStorage.setItem( 'token-init-date', new Date().getTime() );

            dispatch( login({ _id, name }) )
        }

    }
}

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});