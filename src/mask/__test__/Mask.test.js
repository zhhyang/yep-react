import React from 'react';
import {mount, shallow} from 'enzyme';
import Mask from '../index';

describe('Mask', () => {
  it('default', () => {
    const wrapper = mount(<Mask />);
    expect(document.body.className).toBe('mask-open');
  });

  it('render customize class name when className prop is provided by user', () => {
    const props = {
      className: 'customizeClassName',
    };
    const wrapper = shallow(<Mask {...props} />);
    expect(wrapper.find('.Yep-mask').hasClass('customizeClassName')).toBe(true);
  });

  it('background transparent', () => {
    const props = {
      transparent: true,
    };
    const wrapper = shallow(<Mask {...props} />);
    expect(wrapper.find('.Yep-mask_transparent').length).toBe(1);
  });
});
