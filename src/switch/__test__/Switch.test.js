import React from 'react';
import {mount, render} from 'enzyme';
import Switch from '../index';

const mockFn = jest.fn();

describe('Switch', () => {
  beforeEach(() => {
    mockFn.mockReset();
  });

  it('default case', () => {
    const wrapper = render(<Switch />);
    expect(wrapper.find('.Yep-switch-circle').length).toBe(1);
    expect(wrapper.find('.Yep-switch-inner').length).toBe(1);
    expect(wrapper.find('.Yep-switch-checkbox').length).toBe(1);
    expect(wrapper.find('.Yep-switch-checkbox').val()).toBe('off');
    expect(wrapper.hasClass('Yep-switch')).toBe(true);
  });

  it('render customize class name when className prop is provided by user', () => {
    const props = {
      className: 'customizeClassName',
    };
    const wrapper = render(<Switch {...props} />);
    expect(wrapper.hasClass('customizeClassName')).toBe(true);
  });

  it('component will be checked when currentStatus prop is true', () => {
    const props = {
      currentStatus: true,
    };
    const wrapper = render(<Switch {...props} />);
    expect(wrapper.find('.Yep-switch-circle-checked').length).toBe(1);
    expect(wrapper.find('.Yep-switch-inner-checked').length).toBe(1);
    expect(wrapper.find('.Yep-switch-checkbox').val()).toBe('on');
  });

  it('component dont perform onClick callback when disabled prop is true', () => {
    const props = {
      disabled: true,
    };
    const wrapper = mount(<Switch {...props} />);
    expect(wrapper.find('.Yep-switch-inner-disabled').length).toBe(1);
    wrapper.find('.Yep-switch-checkbox').simulate('click');
    expect(mockFn.mock.calls.length).toBe(0);
  });

  it('onClick', () => {
    const props = {
      onClick: mockFn,
    };
    const wrapper = mount(<Switch {...props} />);
    wrapper.find('.Yep-switch-checkbox').simulate('click');
    expect(mockFn.mock.calls.length).toBe(1);
    wrapper.setProps({currentStatus: true});
    expect(wrapper.find('.Yep-switch-circle-checked').length).toBe(1);
    expect(wrapper.find('.Yep-switch-inner-checked').length).toBe(1);
  });

  it('onChange', () => {
    const props = {
      handleSwitch: mockFn,
    };
    const wrapper = mount(<Switch {...props} />);
    wrapper.find('.Yep-switch-checkbox').simulate('change');
    expect(mockFn.mock.calls.length).toBe(1);
    wrapper.setProps({currentStatus: true});
    expect(wrapper.find('.Yep-switch-circle-checked').length).toBe(1);
    expect(wrapper.find('.Yep-switch-inner-checked').length).toBe(1);
  });
});
