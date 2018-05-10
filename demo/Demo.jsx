import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Components from '@jdcfe/lrc-m'; // eslint-disable-line
import {transform} from '@babel/standalone';

//import Editor from './Editor';

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

    this.toggleEditor = this.toggleEditor.bind(this);
    this.onCodeChange = this.onCodeChange.bind(this);
  }

  componentDidMount() {
    this.renderSource(this.code);
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
      presets: ['es2015', 'react'],
      plugins:[
        'proposal-class-properties'
      ]
    }).code;

    const args = ['context', 'React', 'ReactDOM', 'PropTypes'];
    const argv = [this, React, ReactDOM, PropTypes];

    Object.keys(Components).forEach((name) => {
      args.push(name);
      argv.push(Components[name]);
    });

    args.push(transformedCode);

    ReactDOM.unmountComponentAtNode(document.getElementById(`demo-${this.props.demo.order}`));

    new Function(...args)(...argv); // eslint-disable-line no-new-func
  }

  render() {
    const {demo} = this.props;

    return (
      <div id={`demo-${demo.order}`}>

      </div>
    );
  }
}

export default Demo;
