import React from 'react';
import {shallow, render, mount} from 'enzyme';
import Scratch from '../index';

const onChangeMock = jest.fn();

describe('Scratch', () => {
  beforeEach(() => {
    onChangeMock.mockReset();
  });

  it('touchMove event', () => {
    const props = {
      children: <div className="scratch-child">中奖了</div>,
    };
    const wrapper = shallow(<Scratch {...props} />);
    expect(wrapper.find('.Yep-scratch').find('.area2').length).toEqual(0);
    expect(wrapper.find('.Yep-scratch').find('.scratch-child').length).toEqual(0);
    expect(
      wrapper
        .find('.Yep-scratch')
        .find('#myCanvas')
        .simulate('touchMove')
    );
    expect(wrapper.find('.Yep-scratch').find('.area2').length).toEqual(1);
    expect(wrapper.find('.Yep-scratch').find('.scratch-child').length).toEqual(1);
  });
});
