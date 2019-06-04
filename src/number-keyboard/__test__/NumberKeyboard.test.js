import React from 'react';
import {shallow, mount} from 'enzyme';
import NumberKeyboard from '../index';

const eventMock = jest.fn();

describe('NumberKeyboard', () => {
  beforeEach(() => {
    eventMock.mockReset();
  });

  it('render customize class name when className prop is provided by user', () => {
    const props = {
      className: 'customizeClassName',
    };
    const wrapper = shallow(<NumberKeyboard {...props} />);
    expect(wrapper.find('.Yep-number-keyboard-wrapper').hasClass('customizeClassName')).toBe(true);
  });

  it('when user touch number block, component will call input callback with corresponding value', () => {
    const props = {
      input: eventMock,
    };
    const wrapper = shallow(<NumberKeyboard {...props} />);
    for (let item in wrapper.find('.Yep-number-keyboard-item:not(.keyboard-delete)')) {
      item.simulate('click');
      expect(eventMock.mock.calls.length).toBe(1);
      expect(eventMock.mock.calls[0][0]).to.equal(item.value);
    }
  });

  it('when user touch delete block, component will call delete callback ', () => {
    const props = {
      delete: eventMock,
    };

    const wrapper = mount(<NumberKeyboard {...props} />);
    wrapper.find('.Yep-number-keyboard-item.keyboard-delete').simulate('click');
    expect(eventMock.mock.calls.length).toBe(1);
  });

  it('when user touch confirm block, component will call confirm callback ', () => {
    const props = {
      theme: 'custom',
      confirm: eventMock,
    };

    const wrapper = mount(<NumberKeyboard {...props} />);
    wrapper.find('.Yep-number-keyboard-item.keyboard-confirm').simulate('click');
    expect(eventMock.mock.calls.length).toBe(1);
  });

  // ----------------
  // it('render customize header that user provided', () => {
  //   const header = () => (<div className='number-keyboard-header'>header</div>)
  //   const wrapper = shallow(<NumberKeyboard header={header}/>);
  //   expect(wrapper.find('.number-keyboard-header').text()).toBe('header');
  // });
});
