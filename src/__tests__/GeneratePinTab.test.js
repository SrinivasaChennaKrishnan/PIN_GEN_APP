import React from 'react';
import { shallow, mount } from 'enzyme';
import { GeneratePinTab } from '../Components/GeneratePinTab';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new EnzymeAdapter() });
let PropVal = {
    userObject: [], generatedPin: []
};
describe('Generate Tab Test Cases', () => {
    let wrapper;
    wrapper = shallow(<GeneratePinTab {...PropVal} />)
    test('Testing Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('Testing Length', () => {
        expect(wrapper.length).not.toBe(null);
    })    
    test('Testing Generate Button Text', () => {
        expect(wrapper.find('#generate').text()).toEqual('GENERATE');
    })
    test('Testing Save Button Text', () => {
        expect(wrapper.find('#save').text()).toEqual('SAVE');
    })
    test('Testing Divs Length', () => {
        expect(wrapper.find('div').length).toEqual(1);
    })
    test('Testing Buttons Length', () => {
        expect(wrapper.find('button').length).toEqual(2);
    })
})
