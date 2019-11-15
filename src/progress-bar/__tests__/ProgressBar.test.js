import React from 'react';
import {shallow} from 'enzyme';
import ProgressBar from '../index';

const onChangeMock = jest.fn();

describe('ProgressBar', () => {
  beforeEach(() => {
    onChangeMock.mockReset();
  });

  it('render customize class name when className prop is provided by user', () => {
    const props = {
      className: 'customizeClassName',
    };
    const wrapper = shallow(<ProgressBar {...props} />);
    expect(wrapper.find('.Yep-progress').hasClass('customizeClassName')).toBe(true);
  });

  it('When percent assigns 50, the progress bar reaches 50%.', () => {
    const props = {
      percent: 50,
    };
    const wrapper = shallow(<ProgressBar {...props} />);
    expect(wrapper.find('.Yep-progress-bar').get(0).props.style).toHaveProperty('width', '50%');
  });

  it('backgroundColor value in the component is provided by props backgroundColor', () => {
    const props = {
      backgroundColor: 'red',
      percent: 60,
    };
    const wrapper = shallow(<ProgressBar {...props} />);
    expect(wrapper.find('.Yep-progress-bar').get(0).props.style).toHaveProperty('background', 'red');
    expect(wrapper.find('.Yep-progress-bar').get(0).props.style).toHaveProperty('width', '60%');
  });

  it('When fixed assigns true, the progress bar is at the top of the page.', () => {
    const props = {
      fixed: true,
      percent: 60,
    };
    const wrapper = shallow(<ProgressBar {...props} />);
    expect(wrapper.find('.Yep-progress').hasClass('Yep-progress-fixed')).toBe(true);
  });
});
