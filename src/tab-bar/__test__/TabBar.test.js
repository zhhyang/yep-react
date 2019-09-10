import React from 'react';
import {shallow} from 'enzyme';
import TabBar from '../index';
import Tab from '../Tab';

const onClickMock = jest.fn();

describe('TabBar', () => {
  it('render customize class name when className prop is provided by user', () => {
    const props = {
      className: 'customizeClassName',
    };
    const wrapper = shallow(<TabBar {...props} />);
    expect(wrapper.find('.Yep-tab-bar').hasClass('customizeClassName')).toBe(true);
  });

  it('toggle tab bar with hidden prop', () => {
    const props = {
      hidden: true,
    };
    const wrapper = shallow(<TabBar {...props} />);
    expect(wrapper.find('.Yep-tab-bar-hidden').length).toBe(1);
    wrapper.setProps({hidden: false});
    expect(wrapper.find('.Yep-tab-bar-hidden').length).toBe(0);
  });

  it('tab bar background color is provided by barTintColor prop', () => {
    const props = {
      barTintColor: 'red',
    };
    const wrapper = shallow(<TabBar {...props} />);
    expect(wrapper.find('.Yep-tab-bar').get(0).props.style).toHaveProperty('backgroundColor', 'red');
  });
});

describe('Tab', () => {
  beforeEach(() => {
    onClickMock.mockReset();
  });

  it('tab default case and setProps', () => {
    const props = {
      className: 'customizeClassName',
      title: 'title',
    };

    const wrapper = shallow(<Tab {...props} />);

    expect(wrapper.find('.Yep-tab-bar-tab').hasClass('customizeClassName')).toBe(true);

    expect(wrapper.find('.Yep-tab-bar-tab-icon').length).toBe(1);
    expect(wrapper.find('.Yep-tab-bar-tab-title').length).toBe(1);

    expect(wrapper.find('.Yep-tab-bar-tab-badge').length).toBe(0);
    expect(wrapper.find('.tab-dot').length).toBe(0);

    expect(wrapper.find('.Yep-tab-bar-tab-title').text()).toBe('title');

    expect(wrapper.find('.Yep-tab-bar-tab-icon').get(0).props.style).toHaveProperty('color', '#6C707D');
    expect(wrapper.find('.Yep-tab-bar-tab-title').get(0).props.style).toHaveProperty('color', '#6C707D');

    wrapper.setProps({dot: true, selected: true, onClick: onClickMock});

    expect(wrapper.find('.Yep-tab-bar-tab-badge').length).toBe(1);
    expect(wrapper.find('.tab-dot').length).toBe(1);

    expect(wrapper.find('.Yep-tab-bar-tab-icon').get(0).props.style).toHaveProperty('color', '#ec3838');
    expect(wrapper.find('.Yep-tab-bar-tab-title').get(0).props.style).toHaveProperty('color', '#ec3838');

    wrapper.find('.Yep-tab-bar-tab').simulate('click');
    expect(onClickMock.mock.calls.length).toBe(1);
  });
});
