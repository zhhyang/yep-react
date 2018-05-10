import React from 'react';
import PropTypes from 'prop-types';
import Editor from './Editor';

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

    return (
      <div className="">
        <h3 className="">{demo.title}</h3>
        <div className="">{demo.description}</div>
        <div className="component-box">
          <div id={`demo-${demo.order}`} className="component-hd">
            <div style={{width: '375px', height: '620px'}}>
              <iframe src={`http://localhost:8081/component/${componentName}`} frameBorder="0"
                      style={{width: '375px', height: '620px'}}/>
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
