import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class Scratch extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    prefixCls: 'Yep-scratch',
    style: {},
  };

  constructor() {
    super();
    this.state = {
      firstTouch: true,
      down: false,
    };
  }

  componentDidMount() {
    var wrap_canvas = document.getElementById('wrap_canvas');
    var icanvas = document.getElementById('myCanvas');
    if (wrap_canvas && icanvas) {
      var iwidth = wrap_canvas.clientWidth;
      var iheight = wrap_canvas.clientHeight;

      icanvas.width = iwidth;
      icanvas.height = iheight;

      var drawMode = false;

      var context = icanvas.getContext('2d');
      context.lineCap = 'round';
      context.lineJoin = 'round';
      context.fillStyle = 'rgb(193,193,193)';
      context.fillRect(0, 0, iwidth, iheight);
      context.font = '25px 微软雅黑';
      context.fillStyle = '#454444';
      var txt = '刮这里';

      context.fillText(txt, iwidth / 2 - context.measureText(txt).width / 2, iheight / 2 + 9);
      context.globalCompositeOperation = 'destination-out';
      context.lineWidth = 30;

      // 刮奖结束标志
      // var notEnd = true;
    }
  }

  touchStart() {
    // $icanvas.off('touchstart');
    if (this.state.firstTouch) {
      this.setState({
        firstTouch: false,
        down: true,
      });
    }
    var context = icanvas.getContext('2d');
    context.beginPath();
    var icanvas = document.getElementById('myCanvas');
    var rect = icanvas.getBoundingClientRect();
    context.moveTo(event.changedTouches[0].clientX - rect.left, event.changedTouches[0].clientY - rect.top);
    // $("#area2").show();
  }

  touchMove() {
    // $icanvas.off('touchmove');
    $('#area2').show();
    var e = event;
    if (this.state.down) {
      var rect = icanvas.getBoundingClientRect();

      context.lineTo(event.changedTouches[0].clientX - rect.left, event.changedTouches[0].clientY - rect.top);
      context.stroke();
    }

    var imgData = context.getImageData(0, 0, iwidth, iheight),
      pixles = imgData.data,
      transPixs = [];
    for (var i = 0, j = pixles.length; i < j; i += 4) {
      var a = pixles[i + 3];
      if (a < 128) {
        transPixs.push(i);
      }
    }
    if ((transPixs.length / (pixles.length / 4) * 100).toFixed(2) > 30) {
      // alert("中奖了！");
      // wrap_canvas.style.display="none";
      if (prizeStatus != '') {
        wrap_canvas.style.display = 'none';
        setTimeout(function() {
          replaceSection(prizeInfo[prizeStatus]);
        }, 400);
      }
    }
    e.preventDefault && e.preventDefault();
    e.returnValue = false;
    e.stopPropagation && e.stopPropagation();
    return false;
  }

  touchEnd() {
    // $icanvas.off('touchend');
    this.setState({
      down: false,
    });

    // wrap_canvas.style.display="none";

    // setTimeout(function () {
    //     replaceSection(prizeInfo[prizeStatus]);
    // }, 0);
  }

  render() {
    return (
      <div class="scratch-box">
        <div class="area" id="wrap_canvas">
          <canvas id="myCanvas" onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd} />
        </div>
        <div class="area2" id="area2">
          中奖了
        </div>
      </div>
    );
  }
}
