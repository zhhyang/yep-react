import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Tabs from '../index';

const onClickMock = jest.fn();

describe('Tabs', () => {
  beforeEach(() => {
    onClickMock.mockReset();
  });

  it('render customize class name when className prop is provided by user', () => {
    const props = {
      className: 'customizeClassName',
    };
    const wrapper = shallow(<Tabs {...props} />);
    expect(wrapper.find('.Yep-tabs').hasClass('customizeClassName')).toBe(true);
  });

  it('Tabs position', () => {
    const props = {
      tabBarPosition: 'bottom',
    };
    const wrapper = shallow(<Tabs {...props} />);
    expect(wrapper.find('.Yep-tabs-bottom').length).toEqual(1);
    wrapper.setProps({tabBarPosition: 'left'});
    expect(wrapper.find('.Yep-tabs-left').length).toEqual(1);
  });

  it('Tabs animation', () => {
    const props = {
      animated: true,
    };
    const wrapper = shallow(<Tabs {...props} />);
    expect(wrapper.find('.Yep-tabs-content-wrap-animated').length).toEqual(1);
    wrapper.setProps({animated: false});
    expect(wrapper.find('.Yep-tabs-content-wrap-animated').length).toEqual(0);
  });
});
