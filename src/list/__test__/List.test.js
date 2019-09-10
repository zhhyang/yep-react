import React from 'react';
import {mount, render, shallow} from 'enzyme';
import List from '../index';
import ListItem, {Brief} from '../ListItem';

const onClickMock = jest.fn();

describe('List', () => {
  beforeEach(() => {
    onClickMock.mockReset();
  });
  it('render customize class name when className prop is provided by user', () => {
    const props = {
      className: 'customizeClassName',
    };
    const wrapper = shallow(<List {...props} />);
    expect(wrapper.find('.Yep-list').hasClass('customizeClassName')).toBe(true);
  });

  it('renderHeader', () => {
    const props = {
      renderHeader: 'STRING',
    };
    const wrapper = shallow(<List {...props} />);
    expect(wrapper.find('.Yep-list-header').length).toBe(1);
    expect(wrapper.find('.Yep-list-header').text()).toBe('STRING');
    wrapper.setProps({renderHeader: () => 'FUNCTION'});
    expect(wrapper.find('.Yep-list-header').text()).toBe('FUNCTION');
  });

  it('renderChildren', () => {
    const wrapper = render(
      <List>
        <ListItem>CHILD</ListItem>
      </List>
    );
    expect(wrapper.find('.Yep-list-body').length).toBe(1);
    expect(wrapper.find('.Yep-list-item').length).toBe(1);
    expect(wrapper.find('.Yep-list-line').length).toBe(1);
    expect(wrapper.find('.Yep-list-content').length).toBe(1);
  });

  it('render child extra', () => {
    const wrapper = render(
      <List>
        <ListItem extra="EXTRA">CHILD</ListItem>
      </List>
    );

    expect(wrapper.find('.Yep-list-extra').length).toBe(1);
    expect(wrapper.find('.Yep-list-extra').text()).toBe('EXTRA');
  });

  it('render child brief', () => {
    const wrapper = render(
      <List>
        <ListItem>
          CHILD<Brief>SUBTITLE</Brief>
        </ListItem>
      </List>
    );

    expect(wrapper.find('.Yep-list-brief').length).toBe(1);
    expect(wrapper.find('.Yep-list-brief').text()).toBe('SUBTITLE');
  });

  it('render child mutiple line text wrap', () => {
    const wrapper = render(
      <List>
        <ListItem wrap multipleLine>
          Multiple line，long text will wrap；Long Text Long Text Long Text Long Text Long Text Long Text
        </ListItem>
      </List>
    );

    expect(wrapper.find('.Yep-list-line-multiple').length).toBe(1);
    expect(wrapper.find('.Yep-list-line-wrap').length).toBe(1);
  });

  it('disabled', () => {
    const wrapper = mount(
      <List>
        <ListItem disabled onClick={onClickMock}>
          DISABLED
        </ListItem>
      </List>
    );

    expect(wrapper.find('.Yep-list-item').length).toBe(1);
    expect(wrapper.find('.Yep-list-item').hasClass('Yep-list-item-disabled')).toBe(true);
    wrapper.find('.Yep-list-item').simulate('click');
    expect(onClickMock.mock.calls.length).toBe(1);
  });

  it('renderFooter', () => {
    const props = {
      renderFooter: 'STRING',
    };
    const wrapper = shallow(<List {...props} />);
    expect(wrapper.find('.Yep-list-footer').length).toBe(1);
    expect(wrapper.find('.Yep-list-footer').text()).toBe('STRING');
    wrapper.setProps({renderFooter: () => 'FUNCTION'});
    expect(wrapper.find('.Yep-list-footer').text()).toBe('FUNCTION');
  });
});
