import { React } from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import FabAddNew from '../../../components/ui/FabAddNew';

describe('Test in <FabAddNew/> component', () => {
    test('should show text from props', () => {
        const iconText = <i className="fas fa-plus"></i>;
        const handleOpenModal = () => {
            return 'Hola mundo';
        };
        const className = 'btn-primary fab-add';
        const wrapper = shallow(
            <FabAddNew
                className={className}
                text={iconText}
                handleClick={handleOpenModal}
            />
        );

        expect( wrapper ).toMatchSnapshot();
    });
    
})
