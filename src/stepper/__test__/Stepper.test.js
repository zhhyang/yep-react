import React from 'react';
import {shallow} from 'enzyme';
import Stepper from '../index';

const onChangeMock = jest.fn();

describe('Stepper', () => {
  beforeEach(() => {
    onChangeMock.mockReset();
  });

  it('render customize class name when className prop is provided by user', () => {
    const props = {
      className: 'customizeClassName',
    };
    const wrapper = shallow(<Stepper {...props} />);
    expect(wrapper.find('.Yep-stepper').hasClass('customizeClassName')).toBe(true);
  });

  it('input value in the component is provided by props value', () => {
    const props = {
      value: 5,
    };
    const wrapper = shallow(<Stepper {...props} />);
    expect(wrapper.find('.Yep-stepper-input-value').prop('value')).toBe(5);
  });

  it('when user click button, component will call onChange callback with new value', () => {
    const props = {
      onChange: onChangeMock,
    };
    const wrapper = shallow(<Stepper {...props} />);
    wrapper.find('.Yep-stepper-add').simulate('click');
    expect(onChangeMock.mock.calls.length).toBe(1);
    expect(onChangeMock.mock.calls[0][0]).toBe(2);
  });

  it('customize step', () => {
    const props = {
      step: 3,
      onChange: onChangeMock,
    };
    const wrapper = shallow(<Stepper {...props} />);
    wrapper.find('.Yep-stepper-add').simulate('click');
    expect(onChangeMock.mock.calls.length).toBe(1);
    expect(onChangeMock.mock.calls[0][0]).toBe(4);
  });

  it('render customize button that user provided', () => {
    const props = {
      buttonAdd: <div>add</div>,
      buttonReduce: <div>reduce</div>,
    };
    const wrapper = shallow(<Stepper {...props} />);
    expect(wrapper.find('.Yep-stepper-add').text()).toBe('add');
    expect(wrapper.find('.Yep-stepper-reduce').text()).toBe('reduce');
  });
});
