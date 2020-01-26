import React from 'react';
import { shallow } from 'enzyme';
import { SavedPinListTab } from '../Components/SavedPinListTab';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new EnzymeAdapter() });
let PropVal= {
    userObject: [], generatedPin: []
};
describe('Test Saved Pin List Tab', () => {
    let wrapper;
    wrapper = shallow(<SavedPinListTab {...PropVal} />)
    test('Test Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('Test Length', () => {
        expect(wrapper.length).not.toBe(null);
    })
})