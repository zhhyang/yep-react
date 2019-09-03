import React from 'react';
import {mount, render} from 'enzyme';
import Cell from '../index';

const {Item, Brief} = Cell;

describe('Cell', () => {
  it('default case', () => {
    const wrapper = mount(
      <Cell>
        <Item label="白条">白条随机立减最高99 每个用户限用1次</Item>
      </Cell>
    );
    expect(wrapper.find('.Yep-cell-label').length).toBe(1);
    expect(wrapper.find('.Yep-cell-content').length).toBe(1);
    expect(wrapper.find('.Yep-cell-content').length).toBe(1);
  });

  it('render customize class name when className prop is provided by user', () => {
    const props = {
      className: 'customizeClassName',
    };
    const wrapper = render(<Cell {...props} />);
    expect(wrapper.hasClass('customizeClassName')).toBe(true);
  });

  it('do not render Icon component when icon prop is false', () => {
    const wrapper = render(
      <Cell>
        <Item label="重量" icon={false}>
          0.46kg
        </Item>
      </Cell>
    );
    expect(wrapper.find('.Yep-cell-arrow').length).toBe(0);
  });

  it('multiple lines', () => {
    const wrapper = render(
      <Cell>
        <Item label="已选" wrap={true}>
          iPhone X 经典蓝，1件，可选服务 iPhone X 黑色，1件，可选服务
        </Item>
      </Cell>
    );
    expect(wrapper.find('.Yep-cell-line-wrap').length).toBe(1);
  });

  it('Auxiliary Notes', () => {
    const wrapper = render(
      <Cell>
        <Item label="白条">
          白条随机立减最高99 每个用户限用1次<Brief>现货，11：00前下单，预计今日送达</Brief>
        </Item>
      </Cell>
    );
    expect(wrapper.find('.Yep-list-brief').length).toBe(1);
  });

  it('align', () => {
    const wrapper = render(
      <Cell>
        <Item label="白条" align="top">
          白条随机立减最高99 每个用户限用1次
        </Item>
      </Cell>
    );
    expect(wrapper.find('.Yep-cell-item-top').length).toBe(1);
  });
});
