import React from 'react';
import {render} from 'enzyme';
import ActionSheet from '../index';

jest.useFakeTimers();

describe('ActionSheet', () => {
  it('default case', () => {
    const props = {
      show: true,
    };
    const wrapper = render(<ActionSheet {...props} />);
    expect(wrapper.find('.Yep-popup').length).toBe(1);
  });

  it('with cancel btn', () => {
    const props = {
      hasCancel: true,
      show: true,
    };
    const wrapper = render(<ActionSheet {...props} />);
    expect(wrapper.find('.Yep-action-sheet-cancel').length).toBe(1);
  });

  it('display active item', () => {
    const props = {
      show: true,
      active: 1,
      data: ['未婚', '已婚', '离异'],
    };
    const wrapper = render(<ActionSheet {...props} />);
    expect(wrapper.find('.Yep-action-sheet-item_active').length).toEqual(1);
  });

  it('render customize class name when className prop is provided by user', () => {
    const props = {
      className: 'customizeClassName',
      show: true,
    };
    const wrapper = render(<ActionSheet {...props} />);
    expect(wrapper.find('.customizeClassName').length).toEqual(1);
  });
});
