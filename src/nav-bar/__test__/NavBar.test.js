import React from 'react';
import {mount, render} from 'enzyme';
import NavBar from '../index';

const onClickMock = jest.fn();

describe('NavBar', () => {
  beforeEach(() => {
    onClickMock.mockReset();
  });

  it('render customize class name when className prop is provided by user', () => {
    const props = {
      className: 'customizeClassName',
    };
    const wrapper = render(<NavBar {...props} />);
    expect(wrapper.hasClass('customizeClassName')).toBe(true);
  });

  it('show close button, when close prop is true', () => {
    const props = {
      close: true,
    };
    const wrapper = render(<NavBar {...props} />);
    expect(wrapper.find('.Yep-nav-bar-left-close').length).toBe(1);
  });

  it('customize close content', () => {
    const props = {
      close: true,
      closeContent: 'CLOSE',
    };
    const wrapper = render(<NavBar {...props} />);
    expect(wrapper.find('.Yep-nav-bar-left-close').html()).toBe('CLOSE');
  });

  it('component will call onCloseClick when use click close button', () => {
    const props = {
      close: true,
      onCloseClick: onClickMock,
    };
    const wrapper = mount(<NavBar {...props} />);
    wrapper.find('.Yep-nav-bar-left-close').simulate('click');
    expect(onClickMock.mock.calls.length).toBe(1);
  });

  it('customize content', () => {
    const props = {
      leftContent: 'LEFT',
      rightContent: 'RIGHT',
    };
    const wrapper = render(<NavBar {...props} />);
    expect(wrapper.find('.Yep-nav-bar-left-content').html()).toBe('LEFT');
    expect(wrapper.find('.Yep-nav-bar-right-content').html()).toBe('RIGHT');
  });
});
