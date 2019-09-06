import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Tabs from '../index';
// import TabPanel from '../Tabs';

const {TabPanel} = Tabs;

const onClickMock = jest.fn();

describe('Tabs', () => {
  beforeEach(() => {
    onClickMock.mockReset();
  });

  it('render customize class name when className prop is provided by user', () => {
    const props = {
      className: 'customizeClassName',
    };
    const wrapper = shallow(<Tabs {...props} />);
    expect(wrapper.find('.Yep-tabs').hasClass('customizeClassName')).toBe(true);
  });

  it('Tabs position', () => {
    const props = {
      tabBarPosition: 'bottom',
    };
    const wrapper = shallow(<Tabs {...props} />);
    expect(wrapper.find('.Yep-tabs-bottom').length).toEqual(1);
    wrapper.setProps({tabBarPosition: 'left'});
    expect(wrapper.find('.Yep-tabs-left').length).toEqual(1);
  });

  // it('input value in the component is provided by props value', () => {
  //   const props = {
  //     value: 5,
  //   };
  //   const wrapper = shallow(<Stepper {...props} />);
  //   expect(wrapper.find('.Yep-stepper-input-value').prop('value')).toBe(5);
  // });
  //
  // it('when user click button, component will call onChange callback with new value', () => {
  //   const props = {
  //     onChange: onChangeMock,
  //   };
  //   const wrapper = shallow(<Stepper {...props} />);
  //   wrapper.find('.Yep-stepper-add').simulate('click');
  //   expect(onChangeMock.mock.calls.length).toBe(1);
  //   expect(onChangeMock.mock.calls[0][0]).toBe(2);
  // });
  //
  // it('customize step', () => {
  //   const props = {
  //     step: 3,
  //     onChange: onChangeMock,
  //   };
  //   const wrapper = shallow(<Stepper {...props} />);
  //   wrapper.find('.Yep-stepper-add').simulate('click');
  //   expect(onChangeMock.mock.calls.length).toBe(1);
  //   expect(onChangeMock.mock.calls[0][0]).toBe(4);
  // });
  //
  // it('render customize button that user provided', () => {
  //   const props = {
  //     buttonAdd: <div>add</div>,
  //     buttonReduce: <div>reduce</div>,
  //   };
  //   const wrapper = shallow(<Stepper {...props} />);
  //   expect(wrapper.find('.Yep-stepper-add').text()).toBe('add');
  //   expect(wrapper.find('.Yep-stepper-reduce').text()).toBe('reduce');
  // });
});

/*describe('TabPanel', () => {
  beforeEach(() => {
    onClickMock.mockReset();
  });

  it('tab default case and setProps', () => {
    const props = {
      className: 'customizeClassName',
      tab: '选项卡一',
    };

    const wrapper = shallow(<TabPanel {...props} />);
    // expect(wrapper.find('.Yep-tabs-tab-bar-wrap').hasClass('customizeClassName')).toBe(true);
    expect(wrapper.find('.Yep-tabs-default-bar-tab').html()).toBe('选项卡一');
    // expect(wrapper.find('.Yep-tab-bar-tab-title').length).toBe(1);
    //
    // expect(wrapper.find('.Yep-tab-bar-tab-badge').length).toBe(0);
    // expect(wrapper.find('.tab-dot').length).toBe(0);
    //
    // expect(wrapper.find('.Yep-tab-bar-tab-title').text()).toBe('title');
    //
    // expect(wrapper.find('.Yep-tab-bar-tab-icon').get(0).props.style).toHaveProperty('color', '#6C707D');
    // expect(wrapper.find('.Yep-tab-bar-tab-title').get(0).props.style).toHaveProperty('color', '#6C707D');
    //
    // wrapper.setProps({dot: true, selected: true, onClick: onClickMock});
    //
    // expect(wrapper.find('.Yep-tab-bar-tab-badge').length).toBe(1);
    // expect(wrapper.find('.tab-dot').length).toBe(1);
    //
    // expect(wrapper.find('.Yep-tab-bar-tab-icon').get(0).props.style).toHaveProperty('color', '#ec3838');
    // expect(wrapper.find('.Yep-tab-bar-tab-title').get(0).props.style).toHaveProperty('color', '#ec3838');
    //
    // wrapper.find('.Yep-tab-bar-tab').simulate('click');
    // expect(onClickMock.mock.calls.length).toBe(1);
  });
});*/
