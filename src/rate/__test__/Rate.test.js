import React from 'react';
import {mount, shallow} from 'enzyme';
import Rate from '../index';

const onStarClickMock = jest.fn();

describe('Rate', () => {
  beforeEach(() => {
    onStarClickMock.mockReset();
  });

  it('render customize class name when className prop is provided by user', () => {
    const props = {
      className: 'customizeClassName',
    };
    const wrapper = shallow(<Rate {...props} />);
    expect(wrapper.hasClass('customizeClassName')).toBe(true);
  });

  it('cannot edit rate when editing prop is false', () => {
    const props = {
      editing: false,
    };
    const wrapper = shallow(<Rate {...props} />);
    expect(wrapper.hasClass('Yep-rate-non-editable')).toBe(true);
  });

  it('starCount prop minus value prop is equal to number of unrate', () => {
    const props = {
      starCount: 5,
      value: 1,
    };
    const wrapper = shallow(<Rate {...props} />);
    expect(wrapper.find('.Yep-rate-full-star').length).toBe(1);
    expect(wrapper.find('.Yep-rate-empty-star').length).toBe(4);
  });

  it('call onStarClick when use click star', () => {
    const props = {
      onStarClick: onStarClickMock,
    };
    const wrapper = mount(<Rate {...props} />);
    wrapper
      .find('.Yep-rate-empty-star')
      .last()
      .simulate('click');
    expect(onStarClickMock.mock.calls.length).toBe(1);
    expect(onStarClickMock.mock.calls[0][0]).toBe(1);
  });
});
