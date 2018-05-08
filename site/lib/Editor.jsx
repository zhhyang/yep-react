import React from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'codemirror';

import 'codemirror/mode/jsx/jsx';
import 'codemirror/addon/comment/comment';
import 'codemirror/keymap/sublime';

export default class Editor extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const { onChange, value } = this.props;

    this.cm = CodeMirror(this.editor, {
      mode: 'jsx',
      theme: 'lrc',
      viewportMargin: Infinity,
      lineNumbers: false,
      dragDrop: false,
      keyMap: 'sublime',
    });

    this.cm.setValue(value);

    this.cm.on('changes', (cm) => {
      if (onChange) {
        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
          onChange(cm.getValue());
        }, 300);
      }
    });
  }

  render() {
    return (
      <div className="editor" ref={(ref) => { this.editor = ref; }} />
    );
  }
}
