import React from 'react';
import {shallow, render, mount} from 'enzyme';
import SearchBar from '../index';

const onChangeMock = jest.fn();

describe('SearchBar', () => {
  beforeEach(() => {
    onChangeMock.mockReset();
  });

  it('render customize class name when className prop is provided by user', () => {
    const props = {
      className: 'customizeClassName',
    };
    const wrapper = shallow(<SearchBar {...props} />);
    expect(wrapper.find('.Yep-search-bar-wrapper').hasClass('customizeClassName')).toBe(true);
  });

  it('input value in the component is provided by props value', () => {
    const props = {
      value: '输入搜索关键字',
    };
    const wrapper = shallow(<SearchBar {...props} />);
    expect(wrapper.find('.Yep-search-bar').prop('value')).toBe('输入搜索关键字');
  });

  it('clear input value', () => {
    const props = {
      value: '清空搜索关键字',
      clearable: true,
      onChange: onChangeMock,
    };
    const wrapper = shallow(<SearchBar {...props} />);
    expect(wrapper.find('.Yep-search-bar').prop('value')).toBe('清空搜索关键字');
    expect(wrapper.find('.Yep-search-bar__clear').length).toBe(1);
    wrapper.find('.Yep-search-bar__clear').simulate('click');
    expect(onChangeMock.mock.calls.length).toBe(1);
    expect(onChangeMock.mock.calls[0][0]).toBe('');
  });

  it('to search', () => {
    const props = {
      value: '去搜索',
      clearable: true,
      onSearch: onChangeMock,
    };
    const wrapper = mount(<SearchBar {...props} />);
    expect(wrapper.find('.yep-search-bar-cancel').length).toBe(1);
    wrapper.find('.yep-search-bar-cancel').simulate('click');
    expect(onChangeMock.mock.calls.length).toBe(1);
  });
});
