import React from 'react';
import {shallow, render, mount} from 'enzyme';
import Skeleton from '../index';

const onChangeMock = jest.fn();

describe('Skeleton', () => {
  beforeEach(() => {
    onChangeMock.mockReset();
  });

  it('rect', () => {
    const wrapper = shallow(
      <Skeleton>
        <rect x="70" y="15" rx="4" ry="4" width="117" height="6.4" />
      </Skeleton>
    );
    expect(wrapper.contains(<rect x="70" y="15" rx="4" ry="4" width="117" height="6.4" />)).toBe(true);
  });

  it('circle', () => {
    const wrapper = shallow(
      <Skeleton>
        <circle cx="10" cy="110" r="8" />
      </Skeleton>
    );
    expect(wrapper.contains(<circle cx="10" cy="110" r="8" />)).toBe(true);
  });
});
