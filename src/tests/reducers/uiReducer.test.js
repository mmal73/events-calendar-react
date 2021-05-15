import { uiReducer} from '../../reducers/uiReducer';
import { types } from '../../types/types';
import { uiOpenModal, uiCloseModal } from '../../actions/ui';

const initState = {
    modalOpen: false
};

describe('Tests in uiReducer', () => {

    test('should return default state', () => {
        const state = uiReducer( initState, {});
        expect( state ).toEqual( initState );
    });

    test('should open and close modal correctly', () => {
        const stateToOpen = uiReducer( initState, uiOpenModal() );
        expect( stateToOpen ).toEqual({ modalOpen: true });
        
        const stateToClose = uiReducer( stateToOpen, uiCloseModal() );
        expect( stateToClose ).toEqual({ modalOpen: false });
    });

})
