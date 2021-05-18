import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import moment from 'moment';
import Swal from 'sweetalert2';
import { act } from '@testing-library/react';
import CalendarModal from '../../../components/calendar/CalendarModal';
import { startEventUpdated, eventClearActive, eventStartAddNew } from '../../../actions/events';
import { uiCloseModal } from '../../../actions/ui';

jest.mock('sweetalert2', () => ({
    fire: jest.fn(),
}));
jest.mock('../../../actions/events', () => ({
    startEventUpdated: jest.fn(),
    eventStartAddNew: jest.fn(),
    eventClearActive: jest.fn(),
}));
jest.mock('../../../actions/ui', () => ({
    uiCloseModal: jest.fn(),
}));

const middlewares = [ thunk ];
const mockStore = configureStore( middlewares );

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowSum1 =  now.clone().add(1, 'hours');

const initialState = {
    auth:{
        checking: false,
        _id: '123',
        name: 'userTest'
    },
    calendar:{
        events: [],
        eventActive:{
            title: 'test',
            notes: 'test notes',
            start: now.toDate(),
            end: nowSum1.toDate(),
        }
    },
    ui:{
        modalOpen: true
    }
};
const store = mockStore( initialState );
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <CalendarModal/>
    </Provider>
);

describe('Tests in CalendarModal', () => {
    beforeEach( () => {
        jest.clearAllMocks();
    });
    test('should display modal', () => {
        expect( wrapper.find('Modal').prop('isOpen') ).toBe( true );
    });
    
    test('should call update and close modal', () => {
        wrapper.find('form').simulate('submit',{
            preventDefault(){}
        });
        expect( startEventUpdated ).toHaveBeenCalledWith( initialState.calendar.eventActive );
        expect( eventClearActive ).toHaveBeenCalled();
        expect( uiCloseModal ).toHaveBeenCalled();
    });
    
    test('tittle is required in modal', () => {
        wrapper.find('form').simulate('submit',{
            preventDefault(){}
        });
        expect( wrapper.find('input[name="title"]').hasClass('is-invalid') ).toBe( true );
    });
    
    test('should create new event correctly', () => {
        const initialState = {
            auth:{
                checking: false,
                _id: '123',
                name: 'userTest'
            },
            calendar:{
                events: [],
                eventActive: null
            },
            ui:{
                modalOpen: true
            }
        };
        const cStore = mockStore( initialState );
        cStore.dispatch = jest.fn();
        
        const cWrapper = mount(
            <Provider store={cStore}>
                <CalendarModal/>
            </Provider>
        );
        cWrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: "title",
                value: "test event"
            }
        });
        cWrapper.find('form').simulate('submit',{
            preventDefault(){}
        });
        expect( eventStartAddNew ).toHaveBeenCalledWith({
            "end": expect.any( Object ),
            "notes": "",
            "start": expect.any( Object ),
            "title": "test event"
        });
        expect( eventClearActive ).toHaveBeenCalled();
    });

    test('comprobate dates', () => {
        wrapper.find('input[name="title"]').simulate('change', {
            target: {
                name: "title",
                value: "test event"
            }
        });
        
        let today = new Date();
        today.setDate(today.getDate() - 1);
        
        act(() => {
            wrapper.find('DateTimePicker').at(1).prop('onChange')(today);
        });
        
        wrapper.find('form').simulate('submit',{
            preventDefault(){}
        });
        
        expect( Swal.fire ).toHaveBeenCalledWith({"icon": "error", "text": "La fecha fin debe ser mayor a la inicial", "title": "Oops..."});
    });
})
