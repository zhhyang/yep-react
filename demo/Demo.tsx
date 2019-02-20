import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import * as Components from '@jdcfe/yep-react'; // eslint-disable-line
import {transform} from '@babel/standalone';
import jsonp from 'jsonp';
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
    this.code = props.demo.__content.replace(/^\s*```(js|ts)x?/, '').replace(/```\s*$/, ''); // eslint-disable-line no-underscore-dangle

    this.toggleEditor = this.toggleEditor.bind(this);
    this.onCodeChange = this.onCodeChange.bind(this);
  }

  componentDidMount() {
    this.renderSource(this.code);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.demo !== this.props.demo) {
      this.code = nextProps.demo.__content.replace(/^\s*```(js|ts)x?/, '').replace(/```\s*$/, ''); // eslint-disable-line no-underscore-dangle
      this.renderSource(this.code);
      this.setState({
        showEditor: false,
      });
    }
  }

  onCodeChange(newCode) {
    this.renderSource(newCode);
    this.code = newCode;
  }

  toggleEditor() {
    this.setState({
      showEditor: !this.state.showEditor,
    });
  }

  renderSource(code) {
    let finalCode = code.replace('mountNode', `document.getElementById("demo-${this.props.demo.order}")`);
    finalCode = finalCode.replace(/import[^;]+?;/g, '');
    const transformedCode = transform(finalCode, {
      presets: ['es2015', 'react', 'typescript'],
      plugins: ['proposal-class-properties', 'proposal-object-rest-spread'],
    }).code;

    const args = ['context', 'React', 'ReactDOM', 'PropTypes', 'jsonp'];
    const argv = [this, React, ReactDOM, PropTypes, jsonp];

    Object.keys(Components).forEach(name => {
      args.push(name);
      argv.push(Components[name]);
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
