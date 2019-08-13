import React from 'react';
import {shallow} from 'enzyme';
import WhiteSpace from '../index';

const onChangeMock = jest.fn();

describe('Collapse', () => {
  beforeEach(() => {
    onChangeMock.mockReset();
  });

  it('render customize class name when className prop is provided by user', () => {
    const props = {
      className: 'customizeClassName',
    };
    const wrapper = shallow(<WhiteSpace {...props} />);
    expect(wrapper.find('.Yep-whitespace').hasClass('customizeClassName')).toBe(true);
  });

  it('when user click button, component will call onChange callback with new status', () => {
    const props = {
      size: 'sm',
    };
    const wrapper = shallow(<WhiteSpace {...props} />);
    expect(wrapper.find('.Yep-whitespace').hasClass('Yep-whitespace-sm')).toBe(true);
  });
});
