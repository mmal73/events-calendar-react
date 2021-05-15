import React, { props } from 'react';
import { mount } from 'enzyme';
import PrivateRoute from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Tests in <PrivateRoute/>', () => {
    test('should show if the user is authenticated', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    exact
                    path='/'
                    component={ () => <h3>Test Component</h3>}
                    isAuthenticated={ true }
                    { ...props }
                />
            </MemoryRouter>
        );
        expect( wrapper.find('h3').exists() ).toBe( true );
    });

    test('should show if the user is not authenticated', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    exact
                    path='/'
                    component={ () => <h3>Test Component</h3>}
                    isAuthenticated={ false }
                    { ...props }
                />
            </MemoryRouter>
        );
        expect( wrapper.find('h3').exists() ).toBe( false );
    });
    
})
