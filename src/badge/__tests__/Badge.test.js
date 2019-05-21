import React from 'react';
import {render, mount} from 'enzyme';
import Badge from '../index';

describe('Badge', () => {
  it('renders dot prop correctly', () => {
    const wrapper = render(
      <Badge dot>
        <span style={{width: '0.52rem', height: '0.52rem', background: '#ddd', display: 'inline-block'}} />
      </Badge>
    );
    expect(wrapper.find('.Yep-badge-dot')).toHaveLength(1);
  });

  it('renders text correctly', () => {
    const wrapper = mount(<Badge text="券" />);
    expect(wrapper.find('.Yep-badge-text')).toHaveLength(1);
    expect(wrapper.find('.Yep-badge-text').text()).toBe('券');
  });
});
