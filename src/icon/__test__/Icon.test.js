import React from 'react';
import {shallow} from 'enzyme';
import Icon from '../index';

const onChangeMock = jest.fn();

describe('Icon', () => {
  beforeEach(() => {
    onChangeMock.mockReset();
  });

  it('default case', () => {
    const wrapper = shallow(<Icon />);
    expect(wrapper.find('.Yep-icon').hasClass('Yep-icon-md')).toBe(true);
  });

  it('icon type', () => {
    const props = {
      type: 'close',
    };
    const wrapper = shallow(<Icon {...props} />);
    expect(wrapper.find('.Yep-icon').hasClass('Yep-icon-close')).toBe(true);
  });

  it('icon size', () => {
    const props = {
      size: 'lg',
    };
    const wrapper = shallow(<Icon {...props} />);
    expect(wrapper.find('.Yep-icon').hasClass('Yep-icon-lg')).toBe(true);
  });

  it('icon color', () => {
    const props = {
      color: 'red',
    };
    const wrapper = shallow(<Icon {...props} />);
    expect(wrapper.find('.Yep-icon').get(0).props.color).toBe('red');
  });

  it('render customize class name when className prop is provided by user', () => {
    const props = {
      className: 'customizeClassName',
    };
    const wrapper = shallow(<Icon {...props} />);
    expect(wrapper.find('.Yep-icon').hasClass('customizeClassName')).toBe(true);
  });
});
