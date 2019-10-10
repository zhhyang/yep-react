import React from 'react';
import {shallow, render, mount} from 'enzyme';
import ImagePicker from '../ImagePicker';

const onClickMock = jest.fn();

describe('ImagePicker', () => {
  beforeEach(() => {
    onClickMock.mockReset();
  });

  it('delete img', () => {
    const props = {
      files: [
        {
          url:
            'https://img12.360buyimg.com/mobilecms/s140x140_jfs/t15502/344/609174093/288569/bf1a1744/5a377ae2N1fdb98cb.jpg',
        },
      ],
      removeImage: onClickMock,
    };
    const wrapper = shallow(<ImagePicker {...props} />);
    expect(wrapper.find('.Yep-upload-wrapper').find('.upload-flex-item-del').length).toBe(1);
    expect(
      wrapper
        .find('.Yep-upload-wrapper')
        .find('.upload-flex-item-del')
        .simulate('click')
    );
    expect(onClickMock.mock.calls.length).toBe(1);
    expect(onClickMock.mock.calls[0][0]).toBe(0);
  });

  it('custom img width or height', () => {
    const props = {
      width: '2rem',
      height: '2rem',
    };
    const wrapper = shallow(<ImagePicker {...props} />);
    expect(wrapper.find('.Yep-upload-wrapper').find('.upload-add-picker').length).toBe(1);
    expect(
      wrapper
        .find('.Yep-upload-wrapper')
        .find('.upload-add-picker')
        .get(0).props.style
    ).toHaveProperty('width', '2rem');
    expect(
      wrapper
        .find('.Yep-upload-wrapper')
        .find('.upload-add-picker')
        .get(0).props.style
    ).toHaveProperty('height', '2rem');
  });
});
