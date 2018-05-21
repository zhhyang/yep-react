import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
      // firstTouch: true,
      // down: false,
      isAreaShow: true,
      isArea2Show: false
    };
    this.touchStart = this.touchStart.bind(this);
    this.touchMove = this.touchMove.bind(this);
    this.touchEnd = this.touchEnd.bind(this);    
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

  touchStart(e) {
    // $icanvas.off('touchstart');
    // if (this.state.firstTouch) {
    //   this.setState({
    //     firstTouch: false,
    //     down: true,
    //   });
    // }
    var icanvas = document.getElementById('myCanvas');    
    var context = icanvas.getContext('2d');
    context.beginPath();
    var rect = icanvas.getBoundingClientRect();
    context.moveTo(e.changedTouches[0].clientX - rect.left, e.changedTouches[0].clientY - rect.top);
    // $("#area2").show();
  }

  touchMove(e) {
    // $icanvas.off('touchmove');
    e.persist();
    this.setState({
      isArea2Show: true
    });
    // var e = event;
    var icanvas = document.getElementById('myCanvas');    
    var context = icanvas.getContext('2d');
        
    // if (this.state.down) {
      var rect = icanvas.getBoundingClientRect();

      context.lineTo(e.changedTouches[0].clientX - rect.left, e.changedTouches[0].clientY - rect.top);
      context.stroke();
    // }
    var iwidth = wrap_canvas.clientWidth;
    var iheight = wrap_canvas.clientHeight;
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
        this.setState({
          isAreaShow: false
        });
    }
    e.preventDefault && e.preventDefault();
    e.returnValue = false;
    e.stopPropagation && e.stopPropagation();
    return false;
  }

  touchEnd() {
    // $icanvas.off('touchend');
    // this.setState({
    //   down: false,
    // });

    // wrap_canvas.style.display="none";

    // setTimeout(function () {
    //     replaceSection(prizeInfo[prizeStatus]);
    // }, 0);
  }

  render() {
    const {prefixCls, className, style} = this.props;
    const cls = classNames(prefixCls, className);
    return (
      <div className={cls}>
        {this.state.isAreaShow &&
          <div className="area" id="wrap_canvas">
            <canvas id="myCanvas" onTouchStart={this.touchStart} onTouchMove={this.touchMove} onTouchEnd={this.touchEnd} />
          </div>
        }
        {this.state.isArea2Show &&
          <div className="area2" id="area2">
            中奖了
          </div>
        }
      </div>
    );
  }
}
