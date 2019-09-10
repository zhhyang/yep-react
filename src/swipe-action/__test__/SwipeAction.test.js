import React from 'react';
import {shallow} from 'enzyme';
import SwipeAction from '../index';

const onClickMock = jest.fn();
const onSwipeMock = jest.fn();

describe('SwipeAction', () => {
  beforeEach(() => {
    onClickMock.mockReset();
    onSwipeMock.mockReset();
  });

  it('render customize class name when className prop is provided by user', () => {
    const props = {
      className: 'customizeClassName',
    };
    const wrapper = shallow(<SwipeAction {...props} />);
    expect(wrapper.find('.Yep-swipe').hasClass('customizeClassName')).toBe(true);
  });

  it('no actions render when disabled', () => {
    const props = {
      disabled: true,
    };
    const wrapper = shallow(<SwipeAction {...props}>DISABLED</SwipeAction>);
    expect(wrapper.find('.Yep-swipe-actions').length).toBe(0);
    expect(wrapper.find('.Yep-swipe-content').text()).toBe('DISABLED');
  });

  it('render buttons and handle click event', () => {
    const props = {
      left: [
        {
          text: 'LEFT',
          onClick: onClickMock,
          style: {color: 'red'},
        },
      ],
      right: [
        {
          text: 'RIGHT',
          onClick: onClickMock,
          style: {color: 'blue'},
        },
      ],
    };
    const wrapper = shallow(<SwipeAction {...props} />);
    expect(wrapper.find('.Yep-swipe-actions-left').length).toBe(1);
    expect(wrapper.find('.Yep-swipe-actions-left .Yep-swipe-btn-text').text()).toBe('LEFT');
    expect(wrapper.find('.Yep-swipe-actions-left .Yep-swipe-btn').get(0).props.style).toHaveProperty('color', 'red');

    expect(wrapper.find('.Yep-swipe-actions-right').length).toBe(1);
    expect(wrapper.find('.Yep-swipe-actions-right .Yep-swipe-btn-text').text()).toBe('RIGHT');
    expect(wrapper.find('.Yep-swipe-actions-right .Yep-swipe-btn').get(0).props.style).toHaveProperty('color', 'blue');

    wrapper.find('.Yep-swipe-actions-left .Yep-swipe-btn').simulate('click');
    wrapper.find('.Yep-swipe-actions-right .Yep-swipe-btn').simulate('click');
    expect(onClickMock.mock.calls.length).toBe(2);
  });
});
