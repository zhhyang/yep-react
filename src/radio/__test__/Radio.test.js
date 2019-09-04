import React from 'react';
import {mount, shallow} from 'enzyme';
import Radio from '../index';

const onChangeMock = jest.fn();

describe('Radio', () => {
  beforeEach(() => {
    onChangeMock.mockReset();
  });

  it('default case', () => {
    const props = {
      options: ['A', 'B'],
    };
    const wrapper = mount(<Radio {...props} />);
    expect(wrapper.find('.Yep-radio-wrapper').hasClass('Yep-radio-vertical')).toBe(true);
    expect(wrapper.find('.Yep-radio-wrapper .Yep-radio-label').length).toBe(2);
    expect(wrapper.find('.Yep-radio-wrapper .Yep-radio').length).toBe(2);

    expect(
      wrapper
        .find('.Yep-radio-wrapper .Yep-radio-label')
        .first()
        .text()
    ).toBe('A');
    expect(
      wrapper
        .find('.Yep-radio-wrapper .Yep-radio-label')
        .last()
        .text()
    ).toBe('B');

    expect(
      wrapper
        .find('.Yep-radio-wrapper .Yep-radio')
        .first()
        .hasClass('Yep-radio-checked')
    ).toBe(true);
  });

  it('render customize class name when className prop is provided by user', () => {
    const props = {
      className: 'customizeClassName',
      options: ['A', 'B'],
    };
    const wrapper = shallow(<Radio {...props} />);
    expect(wrapper.find('.Yep-radio-wrapper').hasClass('customizeClassName')).toBe(true);
  });

  it('horizontal', () => {
    const props = {
      horizontal: true,
      options: ['A', 'B'],
    };
    const wrapper = shallow(<Radio {...props} />);
    expect(wrapper.find('.Yep-radio-wrapper').hasClass('Yep-radio-horizontal')).toBe(true);
  });

  it('disabled', () => {
    const props = {
      options: [{label: 'A', value: 1}, {disabled: true, label: 'B', value: 2}],
    };
    const wrapper = mount(<Radio {...props} />);
    expect(
      wrapper
        .find('.Yep-radio-wrapper .Yep-radio')
        .last()
        .hasClass('Yep-radio-disabled')
    ).toBe(true);
  });

  it('onChange', () => {
    const props = {
      options: ['A', 'B'],
      onChange: onChangeMock,
    };
    const wrapper = mount(<Radio {...props} />);
    wrapper
      .find('.Yep-radio-wrapper .Yep-radio-input')
      .last()
      .simulate('change');
    expect(onChangeMock.mock.calls.length).toBe(1);
  });
});
