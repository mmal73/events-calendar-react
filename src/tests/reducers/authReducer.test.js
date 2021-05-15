import { authReducer} from '../../reducers/authReducer';
import { types } from '../../types/types';

const initState = {
    checking: true,
    _id: '',
    name: ''
};

const testUser = {
    _id: '123',
    name: 'newUser'
}

describe('Tests in authReducer', () => {

    test('should return default state', () => {
        const state = authReducer( initState, {});
        expect( state ).toEqual( initState );
    });

    test('should return correct state after finish checking authentication', () => {
        const state = authReducer( initState, { type: types.authFinishCheking });
        
        expect( state ).toEqual({
            ...initState,
            checking: false,
        });
    });

    test('should return correct login state', () => {
        const state = authReducer( initState, {
            type: types.authLogin,
            payload: testUser
        });
        
        expect( state ).toEqual({
            checking: false,
            ...testUser
        });
    });

    test('should return correct state after logout', () => {
        const state = authReducer( initState, { type: types.authLogout });
        expect( state ).toEqual({ checking: false });
    });

})
