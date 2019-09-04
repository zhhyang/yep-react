import React from 'react';
import {shallow, render, mount} from 'enzyme';
import InputItem from '../index';
import {Icon} from '../../icon';

describe('SearchBar', () => {
  it('render customize class name when className prop is provided by user', () => {
    const props = {
      className: 'customizeClassName',
    };
    const wrapper = shallow(<InputItem {...props} />);
    expect(wrapper.find('.Yep-input-item').hasClass('customizeClassName')).toBe(true);
  });

  it('input value in the component is provided by props value', () => {
    const props = {
      value: '张三',
    };
    const wrapper = render(<InputItem {...props} />);
    expect(wrapper.find('.Yep-input-control input').prop('value')).toBe('张三');
  });

  it('clear btn', () => {
    const props = {
      value: '张三',
      clear: true,
    };
    const wrapper = mount(<InputItem {...props} />);
    expect(wrapper.find('.Yep-input-control input').prop('value')).toBe('张三');
    expect(wrapper.find('.Yep-input-clear').length).toBe(1);
    wrapper.find('.Yep-input-clear').simulate('click');
    expect(wrapper.find('.Yep-input-control input').prop('value')).toBe('');
  });

  it('with extra icon', () => {
    const props = {
      extra: "<Icon type={'tip'} />",
    };
    const wrapper = mount(<InputItem {...props} />);
    expect(wrapper.find('.Yep-input-extra').length).toBe(1);
  });

  it('disabled input', () => {
    const props = {
      disabled: true,
    };
    const wrapper = mount(<InputItem {...props} />);
    expect(wrapper.find('.Yep-input-disabled').length).toBe(1);
  });
});
