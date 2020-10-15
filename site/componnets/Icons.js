import React, {Component} from 'react';

import * as Icons from '@jdcfe/icons-react/es/icons';

import CopyToClipboard from 'react-copy-to-clipboard';
import classNames from 'classnames';

const CopyableIcon = ({name, justCopied, onCopied, Component}) => {
  const className = classNames('card', {
    copied: justCopied === name,
  });
  const onCopy = (text, result) => {
    if (result) {
      onCopied(name, text);
    } else {
      alert('Copy icon name failed, please try again.');
    }
  };
  return (
    <CopyToClipboard text={`<${name} />`} onCopy={onCopy}>
      <div className={className} key={name}>
        <Component style={{fontSize: '24px', margin: '12px 0 '}} />
        <p className="name-description">{name}</p>
      </div>
    </CopyToClipboard>
  );
};

class AllIconDemo extends Component {
  state = {
    justCopied: null,
  };

  componentWillUnmount() {
    window.clearTimeout(this.copyId);
  }

  onCopied = (type, text) => {
    alert(`${text}  copied `);
    this.setState({justCopied: type}, () => {
      this.copyId = window.setTimeout(() => {
        this.setState({justCopied: null});
      }, 2000);
    });
  };
  render() {
    return (
      <div className="icons-container">
        {Object.keys(Icons).map(iconName => {
          const Component = Icons[iconName];
          return (
            <CopyableIcon
              Component={Component}
              name={iconName}
              justCopied={this.state.justCopied}
              onCopied={this.onCopied}
            />
          );
        })}
      </div>
    );
  }
}

export default AllIconDemo;
