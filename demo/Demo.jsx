import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import * as Components from '@jdcfe/yep-react'; // eslint-disable-line
import * as IconComponents from '@jdcfe/icons-react/es/icons'; // eslint-disable-line
import Loading from '@jdcfe/yep-react-loading'; // eslint-disable-line
import {transform} from '@babel/standalone';
import jsonp from 'jsonp';
import ComponentCard from './component/ComponentCard';
//import Editor from './Editor';

class Demo extends React.Component {
  static propTypes = {
    demo: PropTypes.shape({
      order: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      __content: PropTypes.string.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      showEditor: false,
    };
    this.code = props.demo.__content.replace(/^\s*```jsx?/, '').replace(/```\s*$/, ''); // eslint-disable-line no-underscore-dangle
  }

  componentDidMount() {
    this.renderSource(this.code);
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.demo !== this.props.demo) {
      this.code = nextProps.demo.__content.replace(/^\s*```jsx?/, '').replace(/```\s*$/, ''); // eslint-disable-line no-underscore-dangle
      this.renderSource(this.code);
      this.setState({
        showEditor: false,
      });
    }
  }

  renderSource(code) {
    let finalCode = code.replace('mountNode', `document.getElementById("demo-${this.props.demo.order}")`);
    finalCode = finalCode.replace(/import[^;]+?;/g, '');
    const transformedCode = transform(finalCode, {
      presets: ['es2015', 'react'],
      plugins: ['proposal-class-properties', 'proposal-object-rest-spread'],
    }).code;

    const args = ['context', 'React', 'ReactDOM', 'PropTypes', 'jsonp', 'ComponentCard', 'IconComponents', 'Loading'];
    const argv = [this, React, ReactDOM, PropTypes, jsonp, ComponentCard, IconComponents, Loading];

    Object.keys(Components)
      .filter(a => a !== 'Loading')
      .forEach(name => {
        args.push(name);
        argv.push(Components[name]);
      });
    Object.keys(IconComponents).forEach(name => {
      args.push(name);
      argv.push(IconComponents[name]);
    });

    args.push(transformedCode);

    ReactDOM.unmountComponentAtNode(document.getElementById(`demo-${this.props.demo.order}`));

    new Function(...args)(...argv); // eslint-disable-line no-new-func
  }

  render() {
    const {demo} = this.props;

    return <div id={`demo-${demo.order}`} />;
  }
}

export default Demo;
