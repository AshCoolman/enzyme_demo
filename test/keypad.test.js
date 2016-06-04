import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Keypad from '../components/keypad.js';
import KeypadButton from '../components/keypad-button.js';

describe('<Keypad />', () => {

  it('should at least run this test', () => {
    expect(true).to.be.ok;
  });
  it('should render <Keypad />', () => {
    const wrapper = shallow(<Keypad />);

    expect(wrapper.find('View')).to.have.length(1);
  });

  it('should have 10 number buttons', () => {
    const wrapper = shallow(<Keypad />);

    expect(wrapper.find(KeypadButton)).to.have.length(10);
  });
});
