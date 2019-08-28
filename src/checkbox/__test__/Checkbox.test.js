import React from 'react';
import {mount, render} from 'enzyme';
import Checkbox from '../index';

const mockFn = jest.fn();

describe('Checkbox', () => {
  beforeEach(() => {
    mockFn.mockReset();
  });

  it('default case', () => {
    const wrapper = render(<Checkbox />);
    expect(wrapper.find('.Yep-checkbox-input').length).toBe(1);
    expect(wrapper.find('.Yep-checkbox-inner').length).toBe(1);
    expect(wrapper.find('.Yep-checkbox-label').length).toBe(1);
    expect(wrapper.find('.Yep-checkbox-label').html()).toBe('');
  });

  it('render customize class name when className prop is provided by user', () => {
    const props = {
      className: 'customizeClassName',
    };
    const wrapper = render(<Checkbox {...props} />);
    expect(wrapper.hasClass('customizeClassName')).toBe(true);
  });

  it('defaultChecked', () => {
    const props = {
      defaultChecked: true,
    };
    const wrapper = render(<Checkbox {...props} />);
    expect(wrapper.find('.Yep-checkbox-checked').length).toBe(1);
  });

  it('disabled', () => {
    const props = {
      disabled: true,
    };
    const wrapper = render(<Checkbox {...props} />);
    expect(wrapper.find('.Yep-checkbox-disabled').length).toBe(1);
  });

  it('component children will be used for label display', () => {
    const wrapper = render(<Checkbox>CHILDREN</Checkbox>);
    expect(wrapper.find('.Yep-checkbox-label').html()).toBe('CHILDREN');
  });

  it('event handler', () => {
    const props = {
      onBlur: mockFn,
      onClick: mockFn,
      onFocus: mockFn,
    };
    const wrapper = mount(<Checkbox {...props} />);
    wrapper.find('.Yep-checkbox-input').simulate('blur');
    wrapper.find('.Yep-checkbox-input').simulate('focus');
    wrapper.find('.Yep-checkbox-input').simulate('click');
    expect(mockFn.mock.calls.length).toBe(3);
  });
});
