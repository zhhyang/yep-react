import React from 'react';
import PropTypes from 'prop-types';
import Editor from './Editor';
import QRCode from 'qrcode.react';

class Demo extends React.Component {
  static propTypes = {
    demo: PropTypes.shape({
      order: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      __content: PropTypes.string.isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      showEditor: false,
    };
    this.code = props.demo.__content.replace(/^\s*```jsx?/, '').replace(/```\s*$/, ''); // eslint-disable-line no-underscore-dangle
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.demo !== this.props.demo) {
      this.code = nextProps.demo.__content.replace(/^\s*```jsx?/, '').replace(/```\s*$/, ''); // eslint-disable-line no-underscore-dangle
    }
  }


  render() {
    const {demo, componentName} = this.props;
    const host = process.env.NODE_ENV === 'production'?'yep-react.jd.com/demo.html':'localhost:8081';
    const src = `http://${host}#/component/${componentName}?order=${demo.order}`;
    return (
      <div className="">
        <h3 style={{
          display:'flex',
          alignItems:'center',
          margin:0,
        }}>{demo.title}<QRCode value={src} size={100} style={{marginLeft:10}} level="M" /></h3>
        <div className="">{demo.description}</div>
        <div className="component-box">
          <div id={`demo-${demo.order}`} className="component-hd">
            <div
              style={{
                width: '380px',
                height: '760px',
                backgroundImage:'url(http://yep.jd.com/index/1.0.0/img/phone.bf15f6c.png)',
                backgroundSize:'cover',
                padding:'60px 30px',
              }}
            >
              <iframe src={src} frameBorder="0"
                      style={{width: '100%', height: '100%'}}/>
            </div>
          </div>
          <div className="component-bd" style={{display: 'block'}}>
            <Editor value={this.code}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Demo;
