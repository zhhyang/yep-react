import React from 'react';
import {shallow, mount} from 'enzyme';
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
    const wrapper = mount(<ProgressBar {...props} />);
    expect(wrapper.find('.Yep-progress').hasClass('customizeClassName')).toBe(true);
  });

  it('When percent assigns 50, the progress bar reaches 50%.', () => {
    const props = {
      percent: 50,
    };
    const wrapper = mount(<ProgressBar {...props} />);
    expect(wrapper.html()).toEqual(
      '<div class="Yep-progress"><div class="Yep-progress-bar" style="width: 50%; background: rgb(236, 56, 56);"></div></div>'
    );
  });

  it('backgroundColor value in the component is provided by props backgroundColor', () => {
    const props = {
      backgroundColor: '#000',
      percent: 60,
    };
    const wrapper = mount(<ProgressBar {...props} />);
    expect(wrapper.html()).toEqual(
      '<div class="Yep-progress"><div class="Yep-progress-bar" style="width: 60%; background: rgb(0, 0, 0);"></div></div>'
    );
  });

  it('When fixed assigns true, the progress bar is at the top of the page.', () => {
    const props = {
      fixed: true,
      percent: 60,
    };
    const wrapper = mount(<ProgressBar {...props} />);
    expect(wrapper.find('.Yep-progress').hasClass('Yep-progress-fixed')).toBe(true);
  });
});
