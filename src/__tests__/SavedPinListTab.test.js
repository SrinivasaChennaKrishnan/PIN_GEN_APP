import React from 'react';
import { shallow } from 'enzyme';
import { SavedPinListTab } from '../Components/SavedPinListTab';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new EnzymeAdapter() });

let PropVal = {
    userObject: [], generatedPin: []
};

describe('Test Saved Pin List Tab', () => {

    let wrapper;
    wrapper = shallow(<SavedPinListTab {...PropVal} />)

    test('Check whether the saved pin wrapper match with snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Check the saved pin wrapper length', () => {
        expect(wrapper.length).not.toBe(null);
    })
})