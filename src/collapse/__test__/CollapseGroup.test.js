import React from 'react';
import {shallow, mount} from 'enzyme';
import Collapse from '../index';
import CollapseGroup from '../CollapseGroup';

const onChangeMock = jest.fn();

describe('CollapseGroup', () => {
  beforeEach(() => {
    onChangeMock.mockReset();
  });

  it('render customize class name when className prop is provided by user', () => {
    const props = {
      className: 'customizeClassName',
    };
    const wrapper = shallow(<CollapseGroup {...props} />);
    expect(wrapper.find('.Yep-collapses').hasClass('customizeClassName')).toBe(true);
  });

  it('customize defaultOpenIndex', () => {
    const props = {
      defaultOpenIndex: 1,
    };
    const wrapper = mount(
      <CollapseGroup {...props}>
        <Collapse title="1">1</Collapse>
        <Collapse title="2">2</Collapse>
      </CollapseGroup>
    );
    expect(
      wrapper
        .find('.Yep-collapses')
        .childAt(1)
        .find('.Yep-collapse-cont')
        .is('.Yep-collapse-show')
    ).toBe(true);
  });
});
