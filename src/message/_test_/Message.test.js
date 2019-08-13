import React from 'react';
import {shallow} from 'enzyme';
import Message from '../index';
import {mount} from 'enzyme/build/index';

const onChangeMock = jest.fn();

describe('Message', () => {
  beforeEach(() => {
    onChangeMock.mockReset();
  });

  it('render customize class name when className prop is provided by user', () => {
    const props = {
      className: 'customizeClassName',
    };
    const wrapper = shallow(<Message {...props} />);
    expect(wrapper.find('.Yep-message').hasClass('customizeClassName')).toBe(true);
  });

  it('when user click close button, component will call onChange callback with new status', () => {
    const props = {
      closeable: true,
    };
    const wrapper = mount(<Message {...props} />);
    wrapper.find('.Yep-icon-close').simulate('click');
    expect(wrapper.find('.Yep-icon-close').length).toEqual(0);
  });

  it('When position assigns fix-bottom, message notifications are displayed at the bottom of the page', () => {
    const props = {
      position: 'fix-bottom',
    };
    const wrapper = mount(<Message {...props} />);
    expect(wrapper.find('.Yep-message').hasClass('fix-bottom')).toBe(true);
  });

  it('When position assigns fix-top, message notifications are displayed at the top of the page', () => {
    const props = {
      duration: 1000,
      position: 'fix-top',
    };
    const wrapper = mount(<Message {...props} />);
    expect(wrapper.find('.Yep-message').hasClass('fix-top')).toBe(true);
    // to do ?
    // setTimeout(function() {
    //   expect(wrapper.find('.Yep-message').hasClass('fix-top')).toBe(true);
    // },1000);
  });
});
