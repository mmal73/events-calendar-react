import React from 'react';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import AppRouter from '../../routers/AppRouter';
import { startChecking } from '../../actions/auth';
import { types } from '../../types/types';

jest.mock('sweetalert2', () => ({
    fire: jest.fn()
}));

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );
describe('Tests in AppRouter', () => {
    
    test('correct authentication checking', async() => {
        const initState = {
            auth: {
                checking: true
            }
        };

        const store = mockStore( initState );
        await store.dispatch( startChecking() );
        expect( store.getActions()[0] ).toEqual({ type: types.authFinishCheking });

        const wrapper = mount(
            <Provider store={ store }>
                <AppRouter/>
            </Provider>
        );
        expect( wrapper ).toMatchSnapshot();
    }); 
    
    test('should show login screen', async() => {
        const initState = {
            auth: {
                checking: false,
                _id: null
            }
        };

        const store = mockStore( initState );
        await store.dispatch( startChecking() );
        expect( store.getActions()[0] ).toEqual({ type: types.authFinishCheking });

        const wrapper = mount(
            <Provider store={ store }>
                <AppRouter/>
            </Provider>
        );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( '.login-container' ).exists() ).toBe( true );
    });
    test('should show calendar screen', async() => {
        const initState = {
            auth:{
                checking: false,
                _id: '123',
                name: 'userTest'
            },
            calendar:{
                events: []
            },
            ui:{
                modalOpen: false
            }
        };
        
        const store = mockStore( initState );
        await store.dispatch( startChecking() );
        expect( store.getActions()[0] ).toEqual({ type: types.authFinishCheking });

        const wrapper = mount(
            <Provider store={ store }>
                <AppRouter/>
            </Provider>
        );
        expect( wrapper.find( '.btn-primary' ).exists() ).toBe( true );
    });
})
