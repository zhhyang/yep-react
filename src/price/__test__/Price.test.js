import React from 'react';
import {shallow} from 'enzyme';
import Price from '../index';

const onChangeMock = jest.fn();

describe('Price', () => {
  beforeEach(() => {
    onChangeMock.mockReset();
  });

  it('render customize class name when className prop is provided by user', () => {
    const props = {
      className: 'customizeClassName',
    };
    const wrapper = shallow(<Price {...props} />);
    expect(wrapper.find('.Yep-price').hasClass('customizeClassName')).toBe(true);
  });

  it('customize currency symbol', () => {
    const props = {
      value: '￡618.00',
    };
    const wrapper = shallow(<Price {...props} />);
    expect(wrapper.find('.Yep-price-sym').text()).toEqual('￡');
  });

  it('customize currency symbol or decimal  position', () => {
    const props = {
      symPos: 'sup',
      decPos: 'sup',
      value: '￡618.00',
    };
    const wrapper = shallow(<Price {...props} />);
    expect(
      wrapper
        .find('.Yep-price')
        .find('.Yep-price-sym')
        .hasClass('sym-sup')
    ).toBe(true);
    expect(
      wrapper
        .find('.Yep-price')
        .find('.dec-txt')
        .hasClass('dec-sup')
    ).toBe(true);
  });

  it('turn the price into an integer', () => {
    const props = {
      decLength: 0,
    };
    const wrapper = shallow(<Price {...props} />);
    expect(wrapper.find('.Yep-price-txt').find('.dec-txt').length).toEqual(0);
  });

  it('mark the price', () => {
    const props = {
      status: 'del',
    };
    const wrapper = shallow(<Price {...props} />);
    expect(wrapper.find('.Yep-price').hasClass('del')).toBe(true);
  });

  it('one decimal', () => {
    const props = {
      decLength: 1,
      value: '￡618',
    };
    const wrapper = shallow(<Price {...props} />);
    expect(
      wrapper
        .find('.Yep-price')
        .find('.dec-txt')
        .text()
        .replace(/\./, '').length
    ).toEqual(1);
  });

  it('render customize symbol or decimal class name when className prop is provided by user', () => {
    const props = {
      symClassName: 'yec-sym',
      intClassName: 'yec-int',
      decClassName: 'yec-dec',
      value: '￡618',
    };
    const wrapper = shallow(<Price {...props} />);
    expect(
      wrapper
        .find('.Yep-price')
        .find('.Yep-price-sym')
        .hasClass('yec-sym')
    ).toBe(true);
    expect(
      wrapper
        .find('.Yep-price')
        .find('.int-txt')
        .hasClass('yec-int')
    ).toBe(true);
    expect(
      wrapper
        .find('.Yep-price')
        .find('.dec-txt')
        .hasClass('yec-dec')
    ).toBe(true);
  });
});
