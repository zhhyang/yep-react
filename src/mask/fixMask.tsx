import closest from '../_utils/closest';

/**
 * 修复Mask组件touch事件穿透
 * 需要滚动的地方请加class: 'Yep-scroller'
 * 参考代码:
 * http://www.zhangxinxu.com/study/201612/mobile-scroll-prevent-window-scroll.html
 */

export default function fixMask() {
  const data = {
    scroller: null,
    posY: 0,
    scrollY: 0,
    maxscroll: 0,
  };

  function isIosModalVisible() {
    return /iPhone|iPod|iPad/i.test(navigator.userAgent) && document.body.className.indexOf('mask-open') > -1;
  }

  document.body.addEventListener(
    'touchstart',
    e => {
      if (!isIosModalVisible()) return;

      const scroller = closest(e.target, '.Yep-scroller');
      if (!scroller) return;

      data.scroller = scroller;
      // 垂直位置标记
      data.posY = e.touches[0].pageY;
      data.scrollY = scroller.scrollTop;
      // 是否可以滚动
      data.maxscroll = scroller.scrollHeight - scroller.clientHeight;
    },
    {passive: false}
  );

  document.body.addEventListener(
    'touchmove',
    e => {
      if (!isIosModalVisible()) return;

      if (!data.scroller) {
        e.preventDefault();
        return;
      }

      const scrollTop = data.scroller.scrollTop;
      const distanceY = e.touches[0].pageY - data.posY;

      // 上下边缘检测
      if (distanceY > 0 && scrollTop === 0) {
        // 往上滑，并且到头
        // 禁止滚动的默认行为
        e.preventDefault();
        return;
      }

      // 下边缘检测
      if (distanceY < 0 && scrollTop + 1 >= data.maxscroll) {
        // 往下滑，并且到头
        // 禁止滚动的默认行为
        e.preventDefault();
        return;
      }
    },
    {passive: false}
  );

  document.body.addEventListener(
    'touchend',
    e => {
      if (!isIosModalVisible()) return;
      data.scroller = null;
      data.maxscroll = 0;
    },
    {passive: false}
  );
}
