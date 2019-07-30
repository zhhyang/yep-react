import React from 'react';
import {shallow, mount} from 'enzyme';
import noop from '../../_utils/noop';
import PasswordInput from '../index';

const eventMock = jest.fn();

describe('NumberKeyboard', () => {
  beforeEach(() => {
    eventMock.mockReset();
  });

  it('render customize class name when className prop is provided by user', () => {
    const props = {
      className: 'customizeClassName',
    };
    const wrapper = shallow(<PasswordInput {...props} />);
    expect(wrapper.find('.Yep-password-input').hasClass('customizeClassName')).toBe(true);
  });

  it("when user touch the password input block, component will call 'onFocus' callback", () => {
    const props = {
      value: '',
      onFocus: eventMock,
    };
    const wrapper = mount(<PasswordInput {...props} />);

    wrapper.find('.Yep-password-input-ul').simulate('click');
    expect(eventMock.mock.calls.length).toBe(1);
  });

  it('render customize message that user provided', () => {
    const message = <div className="password-input-meassage">message</div>;
    const wrapper = shallow(<PasswordInput message={message} />);
    expect(wrapper.find('.password-input-meassage').text()).toBe('message');
  });
});
