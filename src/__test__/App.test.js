import React from 'react';
import {shallow} from 'enzyme';
import {App} from '../components/App';


describe('Testing App Component', () => {
    let mountApp;
    beforeEach(() => {
        mountApp = shallow(<App/>);
    });

    it('should render without crashing', () => {
        expect(mountApp).toMatchSnapshot(); 
    });
    
})