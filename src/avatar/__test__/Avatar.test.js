import React from 'react';
import {shallow} from 'enzyme';
import Avatar from '../index';

describe('Avatar', () => {
  it('default shape is circle', () => {
    const wrapper = shallow(<Avatar />);
    expect(wrapper.find('.Yep-avatar').hasClass('Yep-avatar-circle')).toBe(true);
  });

  it('only the first character displayed, when user provides a string as component child.', () => {
    const wrapper = shallow(<Avatar>onlyFirstCharacter</Avatar>);
    expect(wrapper.find('.Yep-avatar').text()).toBe('o');
  });

  it('component children will render an image, when user provides src prop.', () => {
    const props = {
      src: '//misc.360buyimg.com/mtd/pc/common/img/no_login.jpg',
    };
    const wrapper = shallow(<Avatar {...props} />);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('img').prop('src')).toEqual(props.src);
  });

  it('users can choose the size with large or small.', () => {
    const props = {
      size: 'large',
    };
    const wrapper = shallow(<Avatar {...props} />);
    expect(wrapper.find('.Yep-avatar').hasClass('Yep-avatar-large')).toBe(true);
  });

  it('customize size.', () => {
    const props = {
      size: 100,
    };
    const wrapper = shallow(<Avatar {...props} />);
    expect(wrapper.find('.Yep-avatar').prop('style')).toHaveProperty('width', props.size);
  });

  it('customize style', () => {
    const props = {
      style: {
        backgroundColor: '#000',
      },
    };
    const wrapper = shallow(<Avatar {...props} />);
    expect(wrapper.find('.Yep-avatar').prop('style')).toHaveProperty('backgroundColor', '#000');
  });
});
