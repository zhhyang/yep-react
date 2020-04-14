import classNames from 'classnames';

export default {
  ROOT: (customClassName: string) =>
    classNames({
      'Yep-carousel-root': true,
      [customClassName]: !!customClassName,
    }),

  CAROUSEL: (isSlider: boolean) =>
    classNames({
      'Yep-carousel': true,
      'Yep-carousel-slider': isSlider,
    }),

  WRAPPER: (isSlider: boolean, vertical: boolean) =>
    classNames({
      'thumbs-wrapper': !isSlider,
      'Yep-slider-wrapper': isSlider,
      'axis-horizontal': !vertical,
      'axis-vertical': vertical,
    }),

  SLIDER: (isSlider: boolean, isSwiping: boolean) =>
    classNames({
      thumbs: !isSlider,
      'Yep-slider': isSlider,
      animated: !isSwiping,
    }),

  ITEM: (isSlider: boolean, selected: boolean) =>
    classNames({
      thumb: !isSlider,
      'Yep-slide': isSlider,
      selected: selected,
    }),

  DOT: (selected: boolean) =>
    classNames({
      'Yep-dot': true,
      selected: selected,
    }),
};
