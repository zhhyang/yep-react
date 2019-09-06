import React from 'react';
import {shallow} from 'enzyme';
import ToTop from '../index';

const onClickMock = jest.fn();

describe('ToTop', () => {
  beforeEach(() => {
    onClickMock.mockReset();
  });

  it('default case', () => {
    const wrapper = shallow(<ToTop />);
    expect(wrapper.find('.Yep-to-top-content').length).toBe(1);
    expect(wrapper.find('.Yep-to-top-icon').length).toBe(1);
  });

  it('customize className', () => {
    const props = {
      className: 'customizeClassName',
    };
    const wrapper = shallow(<ToTop {...props} />);
    expect(wrapper.find('.Yep-to-top').hasClass('customizeClassName')).toBe(true);
  });

  it('customize content', () => {
    const wrapper = shallow(<ToTop>CHILDREN</ToTop>);
    expect(wrapper.find('.Yep-to-top').text()).toBe('CHILDREN');
  });
});
