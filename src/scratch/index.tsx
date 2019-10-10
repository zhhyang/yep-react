import * as React from 'react';
import classNames from 'classnames';

export interface ScratchProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  scratchImgUrl: string;
  resPercent?: number;
  resCallback: () => void;
  children: React.ReactNode;
}

export interface State {
  isAreaShow: boolean;
  isArea2Show: boolean;
}

export default class Scratch extends React.PureComponent<ScratchProps, State> {
  static defaultProps = {
    prefixCls: 'Yep-scratch',
    style: {},
    scratchImgUrl: '',
    resCallback: () => {},
  };

  constructor(props: ScratchProps) {
    super(props);
    this.state = {
      isAreaShow: true,
      isArea2Show: false,
    };
    this.touchStart = this.touchStart.bind(this);
    this.touchMove = this.touchMove.bind(this);
    this.touchEnd = this.touchEnd.bind(this);
  }

  componentDidMount() {
    const wrap_canvas = document.getElementById('wrap_canvas') as HTMLDivElement;
    const icanvas = document.getElementById('myCanvas') as HTMLCanvasElement;
    const iwidth = wrap_canvas && wrap_canvas.clientWidth;
    const iheight = wrap_canvas && wrap_canvas.clientHeight;

    icanvas && (icanvas.width = iwidth);
    icanvas && (icanvas.height = iheight);

    let context = icanvas && (icanvas.getContext('2d') as CanvasRenderingContext2D);
    context && (context.lineCap = 'round');
    context && (context.lineJoin = 'round');

    let imgObj = new Image();
    imgObj.crossOrigin = 'Anonymous';
    imgObj.src = this.props.scratchImgUrl;

    //待图片加载完后，将其显示在canvas上
    imgObj.onload = function() {
      //保持图片的原始大小：470*480
      context.drawImage(imgObj, 0, 0, iwidth, iheight);

      // 在源图像外显示目标图像。只有源图像外的目标图像部分会被显示，源图像是透明的。(源图像：刮痕区域，目标图像：带图片的初始canvas)
      context.globalCompositeOperation = 'destination-out';
    };

    context && (context.lineWidth = 30);
  }

  touchStart(e: any) {
    let icanvas = document.getElementById('myCanvas') as HTMLCanvasElement;
    let context = icanvas.getContext('2d') as CanvasRenderingContext2D;
    context.beginPath();
    let rect = icanvas.getBoundingClientRect();
    context.moveTo(e.changedTouches[0].clientX - rect.left, e.changedTouches[0].clientY - rect.top);
  }

  touchMove(e: any) {
    this.setState({
      isArea2Show: true,
    });

    const wrap_canvas = document.getElementById('wrap_canvas') as HTMLDivElement;
    let icanvas = document.getElementById('myCanvas') as HTMLCanvasElement;
    let context = icanvas && (icanvas.getContext('2d') as CanvasRenderingContext2D);
    let rect = icanvas && icanvas.getBoundingClientRect();

    context && context.lineTo(e.changedTouches[0].clientX - rect.left, e.changedTouches[0].clientY - rect.top);
    context && context.stroke();

    let iwidth = wrap_canvas && wrap_canvas.clientWidth,
      iheight = wrap_canvas && wrap_canvas.clientHeight,
      imgData = context && context.getImageData(0, 0, iwidth, iheight),
      pixles = imgData && imgData.data,
      transPixs = [];

    for (let i = 0, j = pixles && pixles.length; i < j; i += 4) {
      let a = pixles[i + 3];
      if (a < 128) {
        //@ts-ignore
        transPixs.push(i);
      }
    }

    //@ts-ignore
    if (
      ((transPixs.length / (pixles && pixles.length / 4)) * 100).toFixed(2) >
      (this.props.resPercent >= 0 ? this.props.resPercent : 60)
    ) {
      this.props.resCallback();
      this.setState({
        isAreaShow: false,
      });
    }
    return false;
  }

  touchEnd() {}

  render() {
    const {prefixCls, className, style} = this.props;
    const cls = classNames(prefixCls, className);
    return (
      <div className={cls} style={style}>
        {this.state.isAreaShow && (
          <div className="area" id="wrap_canvas">
            <canvas
              id="myCanvas"
              onTouchStart={this.touchStart}
              onTouchMove={this.touchMove}
              onTouchEnd={this.touchEnd}
            />
          </div>
        )}
        {this.state.isArea2Show && (
          <div className="area2" id="area2">
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}
