import React from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'codemirror';

import 'codemirror/mode/jsx/jsx';
import 'codemirror/addon/comment/comment';
import 'codemirror/keymap/sublime';

export default class Editor extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const {value } = this.props;

    this.cm = CodeMirror(this.editor, {
      mode: 'jsx',
      theme: 'lrc',
      viewportMargin: Infinity,
      lineNumbers: false,
      dragDrop: false,
      keyMap: 'sublime',
    });

    this.cm.setValue(value);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.value !== this.props.value) {
      this.cm.setValue(nextProps.value);
    }
  }

  render() {
    return (
      <div className="editor" ref={(ref) => { this.editor = ref; }} />
    );
  }
}
