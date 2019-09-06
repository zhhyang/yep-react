import React from 'react';
import {mount} from 'enzyme';
import DatePicker from '../index';

const mockFn = jest.fn();

describe('DatePicker', () => {
  beforeEach(() => {
    mockFn.mockReset();
  });

  it('show date picker', () => {
    const props = {
      show: true,
    };
    const wrapper = mount(<DatePicker {...props} />);
    expect(wrapper.find('.Yep-picker')).toHaveLength(1);
    expect(wrapper.find('.Yep-picker').get(0).props.style).toHaveProperty('flexDirection', 'row');
    expect(wrapper.find('.Yep-picker-col').length).toBe(5);

    expect(
      wrapper
        .find('.Yep-picker-col')
        .first()
        .find('.Yep-picker-col-item')
        .first()
        .text()
    ).toBe('2000年');
  });

  it('date mode', () => {
    const props = {
      mode: 'date',
      show: true,
    };
    const wrapper = mount(<DatePicker {...props} />);
    expect(wrapper.find('.Yep-picker-col').length).toBe(3);
    wrapper.setProps({mode: 'year'});
    expect(wrapper.find('.Yep-picker-col').length).toBe(1);
  });

  it('onOk', () => {
    const props = {
      show: true,
      onOk: mockFn,
    };
    const wrapper = mount(<DatePicker {...props} />);
    const ok = wrapper.find('.Yep-popup-picker-header-right');
    ok.simulate('click');
    expect(mockFn.mock.calls.length).toBe(1);
  });

  it('onCancel', () => {
    const props = {
      show: true,
      onCancel: mockFn,
    };
    const wrapper = mount(<DatePicker {...props} />);
    const cancel = wrapper.find('.Yep-popup-picker-header-left');
    cancel.simulate('click');
    expect(mockFn.mock.calls.length).toBe(1);
  });

  it('customize minDate and maxDate', () => {
    const props = {
      minDate: new Date('1990-1-1'),
      maxDate: new Date('1999-1-1'),
      show: true,
    };
    const wrapper = mount(<DatePicker {...props} />);
    expect(
      wrapper
        .find('.Yep-picker-col')
        .first()
        .find('.Yep-picker-col-item')
        .first()
        .text()
    ).toBe('1990年');
    expect(
      wrapper
        .find('.Yep-picker-col')
        .first()
        .find('.Yep-picker-col-item')
        .last()
        .text()
    ).toBe('1999年');
  });
});
