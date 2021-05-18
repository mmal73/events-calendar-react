import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { act } from '@testing-library/react'
import CalendarScreen from '../../../components/calendar/CalendarScreen';
import { messages } from '../../../helpers/calendarMessages';
import { types } from '../../../types/types';
import { eventSetActive } from '../../../actions/events';

jest.mock('../../../actions/events', () => ({
    eventSetActive: jest.fn(),
    eventStartLoaded: jest.fn(),
}));

Storage.prototype.setItem = jest.fn();

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );
const initialState = {
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
const store = mockStore( initialState );
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <CalendarScreen
        />
    </Provider>
);

describe('Tests in CalendarScreen', () => {
    test('should display correctly', () => {
        expect( wrapper.find('.main-calendar').exists() ).toBe( true ); // calendar component
        expect( wrapper.find('.navbar-dark').exists() ).toBe( true ); // navbar component
        expect( wrapper.find('.fab-add').exists() ).toBe( true ); // button to open modal
    });

    test('interactions', () => {
        const calendar = wrapper.find( 'Calendar' );
        const cMessages = calendar.prop('messages');
        expect( cMessages ).toEqual( messages );

        calendar.prop('onDoubleClickEvent')();
        expect( store.dispatch ).toHaveBeenCalledWith({ type: types.uiOpenModal });
        
        const e = { start: new Date() }
        calendar.prop('onSelectEvent')(e);
        expect( eventSetActive ).toHaveBeenCalledWith(e);

        calendar.prop('onView')('week');
        expect( localStorage.setItem ).toHaveBeenCalledWith('currentView', 'week');
    });
})
