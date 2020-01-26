import React from 'react';
import { shallow } from 'enzyme';
import { NavigationPanel } from '../Components/NavigationPanel';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new EnzymeAdapter() });
describe('Test Navigation Panel', () => {
    let wrapper;
    wrapper = shallow(<NavigationPanel />)
    test('Test Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('Test Length', () => {
        expect(wrapper.length).not.toBe(null);
    })
    test('Testing Save Button Text', () => {
        expect(wrapper.find('#generateTab').text()).toEqual('Generate');
    })
    test('Testing Save Button Text', () => {
        expect(wrapper.find('#savedTab').text()).toEqual('Saved');
    })
})