import React, {PureComponent, Component} from 'react';

import PropTypes from 'prop-types';

class StaticRenderer extends Component {
  render() {
    return this.props.render();
  }
}

export default class ListView extends PureComponent {
  static propTypes = {
    renderSectionHeader: PropTypes.func,
    renderSectionBodyWrapper: PropTypes.func,
  };

  static defaultProps = {
    renderSectionBodyWrapper: sectionId => <div key={sectionId} />,
  };

  constructor() {
    super();

    this.onScroll = this.onScroll.bind(this);
  }

  onScroll(e) {}

  render() {
    const {
      className,
      renderHeader,
      renderFooter,
      renderSectionWrapper,
      renderSectionHeader,
      renderSectionBodyWrapper,
      sectionBodyClassName,
      renderBodyComponent,
      data,
      renderRow,
      keyLabel,
      children,
    } = this.props;
    const rowIdentities = [];
    const sectionIdentities = Object.keys(data);
    Object.keys(data).forEach((item, index) => {
      rowIdentities[index] = [];
      data[item].forEach(ss => {
        rowIdentities[index].push(ss[keyLabel]);
      });
    });
    const contentComponents = [];
    for (let sectionIdx = 0; sectionIdx < rowIdentities.length; sectionIdx++) {
      const sectionId = sectionIdentities[sectionIdx];
      const rowIds = rowIdentities[sectionIdx];
      if (rowIds.length === 0) {
        continue;
      }
      let renderSectionHeaderComponent;
      if (renderSectionHeader) {
        renderSectionHeaderComponent = (
          <StaticRenderer key={`s_${sectionId}`} render={renderSectionHeader.bind(null, sectionId, sectionId)} />
        );
      }
      const sectionBody = [];

      for (let rowIdx = 0; rowIdx < rowIds.length; rowIdx++) {
        const rowID = rowIds[rowIdx];
        const comboID = `${sectionId}_${rowID}`;
        const row = (
          <StaticRenderer
            key={`r_${comboID}`}
            render={renderRow.bind(null, data[sectionIdentities[sectionIdx]][rowIdx])}
          />
        );
        sectionBody.push(row);
      }
      const rowsAndSeparators = React.cloneElement(
        renderSectionBodyWrapper(sectionId),
        {
          className: sectionBodyClassName,
        },
        sectionBody
      );
      if (renderSectionWrapper) {
        contentComponents.push(
          React.cloneElement(renderSectionWrapper(sectionId), {}, renderSectionHeaderComponent, rowsAndSeparators)
        );
      } else {
        contentComponents.push(renderSectionHeaderComponent);
        contentComponents.push(rowsAndSeparators);
      }
    }
    return (
      <div onScroll={this.onScroll} ref={el => (this.listViewRef = el)} className={className}>
        {renderHeader && renderHeader()}
        {React.cloneElement(renderBodyComponent(), {}, contentComponents)}
        {renderFooter && renderFooter()}
        {children}
      </div>
    );
  }
}
