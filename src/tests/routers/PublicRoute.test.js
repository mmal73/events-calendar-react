import React, { props } from 'react';
import { mount } from 'enzyme';
import PublicRoute from '../../routers/PublicRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Tests in <PublicRoute/>', () => {
    test('should redirect if the user is authenticated', () => {
        const LoginComponent = () => <div>LoginComponent</div>;
        const wrapper = mount(
            <MemoryRouter initialEntries={["/login"]}>
                <PublicRoute
                    exact
                    path='/login'
                    component={ LoginComponent }
                    isAuthenticated={ true }
                    { ...props }
                />
            </MemoryRouter>
        );
        expect( wrapper.find('h3').exists() ).toBe( false );
    });

    test('should show if the user is not authenticated', () => {
        const LoginComponent = () => <div>LoginComponent</div>;
        const wrapper = mount(
            <MemoryRouter initialEntries={["/login"]}>
                <PublicRoute
                    path='/login'
                    component={ LoginComponent }
                    isAuthenticated={ false }
                />
            </MemoryRouter>
        );
        expect( wrapper.exists( LoginComponent ) ).toBe( true );
    });
    
})
