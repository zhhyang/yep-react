import React from 'react';
import {shallow} from 'enzyme';
import HorizontalWhiteSpace from '../HorizontalWhiteSpace';

const onChangeMock = jest.fn();

describe('HorizontalWhiteSpace', () => {
  beforeEach(() => {
    onChangeMock.mockReset();
  });

  it('render customize class name when className prop is provided by user', () => {
    const props = {
      className: 'customizeClassName',
    };
    const wrapper = shallow(<HorizontalWhiteSpace {...props} />);
    expect(wrapper.find('.Yep-whitespace-horizontal').hasClass('customizeClassName')).toBe(true);
  });

  it('When size assigns sm, it is judged whether the spacing between left and right elements is smaller.', () => {
    const props = {
      size: 'sm',
    };
    const wrapper = shallow(<HorizontalWhiteSpace {...props} />);
    expect(wrapper.find('.Yep-whitespace-horizontal').hasClass('Yep-whitespace-horizontal-sm')).toBe(true);
  });
});
