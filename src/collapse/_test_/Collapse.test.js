import React from 'react';
import {shallow} from 'enzyme';
import Collapse from '../index';

const onChangeMock = jest.fn();

describe('Collapse', () => {
  beforeEach(() => {
    onChangeMock.mockReset();
  });

  it('render customize class name when className prop is provided by user', () => {
    const props = {
      className: 'customizeClassName',
    };
    const wrapper = shallow(<Collapse {...props} />);
    expect(wrapper.find('.Yep-collapse').hasClass('customizeClassName')).toBe(true);
  });

  it('when user click button, component will call onChange callback with new status', () => {
    const props = {
      isOpen: false,
      onToggle: onChangeMock,
    };
    const wrapper = shallow(<Collapse {...props} />);
    wrapper.find('.Yep-collapse-title').simulate('click');
    expect(onChangeMock.mock.calls.length).toBe(1);
    expect(onChangeMock.mock.calls[0][0]).toBe(true);
  });
});
