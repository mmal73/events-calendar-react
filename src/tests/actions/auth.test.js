import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import Swal from 'sweetalert2';

import { authLoginStart, startRegister, startChecking, startLogout } from '../../actions/auth';
import { types } from '../../types/types';
import * as myFetchModule from '../../helpers/myFetch';

jest.mock('sweetalert2', () => ({
    fire: jest.fn()
}));

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const initState = {};
let store = mockStore( initState );

Storage.prototype.setItem = jest.fn();

describe('Tests in auth actions', () => {

    beforeEach(() => {
        store = mockStore( initState );
        jest.clearAllMocks();
    });

    test('correct startLogin', async() => {
        
        await store.dispatch( authLoginStart( 'test@test.com', '12345678' ) );

        const actions = store.getActions();
        
        expect( actions[0] ).toEqual({
            type: types.authLogin,
            payload: {
                _id: expect.any( String ),
                name: expect.any( String ),
            }
        });

        expect( localStorage.setItem ).toHaveBeenCalledWith('token', expect.any( String ));
        expect( localStorage.setItem ).toHaveBeenCalledWith('token-init-date', expect.any( Number ));


        //const token = localStorage.setItem.mock.calls[0][1];
    });

    test('incorrect startLogin', async() => {
        
        await store.dispatch( authLoginStart( 'test@test.com', '87654321' ) );

        const actions = store.getActions();
        expect( actions ).toEqual([]);

        expect( Swal.fire ).toHaveBeenCalled();
    });
    
    test('correct startRegister', async() => {

        myFetchModule.fetchWithoutToken = jest.fn( () => ({
            json(){
                return {
                    status: true,
                    _id: '123',
                    token: 'asdasd',
                    name: 'newUser',
                }
            }
        }));

        await store.dispatch( startRegister( 'newUser', 'test2@test.com', '12345678' ) );
        const actions = store.getActions();
        
        expect( actions[0] ).toEqual({
            type: types.authLogin,
            payload: {
                _id: '123',
                name: 'newUser'
            }
        });

        expect( localStorage.setItem ).toHaveBeenCalledWith('token', 'asdasd');
        expect( localStorage.setItem ).toHaveBeenCalledWith('token-init-date', expect.any( Number ));
    });

    test('incorrect startRegister', async() => {

        myFetchModule.fetchWithoutToken = jest.fn( () => ({
            json(){
                return {
                    status: false,
                    message: 'Error in Register',
                }
            }
        }));

        await store.dispatch( startRegister( 'newUser', 'test2@test.com', '12345678' ) );
        const actions = store.getActions();
        
        expect( actions ).toEqual([]);
        expect( Swal.fire ).toHaveBeenCalled();
    });

    test('correct start checking', async() => {

        myFetchModule.fetchWithToken = jest.fn( () => ({
            json(){
                return {
                    status: true,
                    _id: '123',
                    token: 'asdasd',
                    name: 'newUser',
                }
            }
        }));

        await store.dispatch( startChecking() );
        const actions = store.getActions();
        
        expect( actions[0] ).toEqual({
            type: types.authLogin,
            payload: {
                _id: '123',
                name: 'newUser'
            }
        });
        expect( localStorage.setItem ).toHaveBeenCalledWith('token', 'asdasd');

    });
    
    test('correct startLogout', async() => {
        
        await store.dispatch( startLogout() );

        const actions = store.getActions();
        
        expect( actions[0] ).toEqual({
            type: types.eventClear
        });
        expect( actions[1] ).toEqual({
            type: types.authLogout
        });
    });
})
