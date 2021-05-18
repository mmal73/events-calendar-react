import { Provider } from "react-redux";
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import Swal from 'sweetalert2';
import LoginScreen from '../../../components/auth/LoginScreen';
import { authLoginStart, startRegister } from '../../../actions/auth';

jest.mock( 'sweetalert2', () => ({
    fire: jest.fn()
}));

jest.mock( '../../../actions/auth', () => ({
    authLoginStart: jest.fn(),
    startRegister: jest.fn(),
}));

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );
const initState = {

}
const store = mockStore( initState );
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={ store }>
        <LoginScreen/>
    </Provider>
);

describe('Tests in Login Screen', () => {
    test('should display correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    test('should call login dispatch', () => {
        wrapper.find('input[name="lEmail"]').simulate('change', {
            target:{
                name: 'lEmail',
                value: 'my-email@mail.com'
            }
        });
        wrapper.find('input[name="lPassword"]').simulate('change', {
            target:{
                name: 'lPassword',
                value: '12345678'
            }
        });

        wrapper.find('form').at(0).prop('onSubmit')({
            preventDefault(){}
        });

        expect( authLoginStart ).toHaveBeenCalled();

    });

    test('should fail with diferent passwords', () => {
        wrapper.find('input[name="rPassword1"]').simulate('change', {
            target:{
                name: 'rPassword1',
                value: '12345678'
            }
        });
        wrapper.find('input[name="rPassword2"]').simulate('change', {
            target:{
                name: 'rPassword2',
                value: '87654321'
            }
        });

        wrapper.find('form').at(1).prop('onSubmit')({
            preventDefault(){}
        });

        expect( startRegister ).not.toHaveBeenCalled();
        expect( Swal.fire ).toHaveBeenCalledWith({"icon": "error", "text": "Las contranseñas no son iguales", "title": "Error"});

    });

    test('register working correctly', () => {
        wrapper.find('input[name="rPassword1"]').simulate('change', {
            target:{
                name: 'rPassword1',
                value: '12345678'
            }
        });
        wrapper.find('input[name="rPassword2"]').simulate('change', {
            target:{
                name: 'rPassword2',
                value: '12345678'
            }
        });

        wrapper.find('form').at(1).prop('onSubmit')({
            preventDefault(){}
        });
        
        expect( startRegister ).toHaveBeenCalled();
        expect( Swal.fire ).not.toHaveBeenCalled();

    });
})
