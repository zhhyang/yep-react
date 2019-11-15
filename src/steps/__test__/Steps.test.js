import React from 'react';
import {shallow, render, mount} from 'enzyme';
import Steps from '../index';

const onClickMock = jest.fn();

describe('Steps', () => {
  beforeEach(() => {
    onClickMock.mockReset();
  });

  it('custom className', () => {
    const props = {
      className: 'customizeClassName',
    };
    const wrapper = shallow(<Steps {...props} />);
    expect(wrapper.hasClass('customizeClassName')).toBe(true);
  });

  it('custom stepNum', () => {
    const props = {
      stepNum: 2,
    };
    const wrapper = shallow(<Steps {...props} />);
    expect(wrapper.find('.current').length).toEqual(2);
  });

  it('custom steps title', () => {
    const props = {
      titles: ['步骤1'],
    };
    const wrapper = shallow(<Steps {...props} />);
    expect(wrapper.find('.Yep-steps-item').length).toEqual(1);
    expect(
      wrapper
        .find('.Yep-steps-item')
        .find('.Yep-steps-item-text')
        .at(0)
        .text()
    ).toEqual('步骤1');
  });

  it('custom steps description', () => {
    const props = {
      desc: ['提交申请'],
    };
    const wrapper = shallow(<Steps {...props} />);
    expect(
      wrapper
        .find('.Yep-steps-item')
        .find('.Yep-steps-item-text')
        .at(1)
        .text()
    ).toEqual('提交申请');
  });

  it('custom icon', () => {
    const props = {
      icon: ['circle'],
      titles: ['步骤1'],
    };
    const wrapper = mount(<Steps {...props} />);
    expect(wrapper.find('.Yep-steps-num').length).toEqual(1);
    expect(wrapper.find('.Yep-steps-num').find('.Yep-icon-circle').length).toEqual(1);
  });
});
