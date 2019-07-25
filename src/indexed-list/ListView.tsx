import * as React from 'react';

import {IndexedListProps} from './index';
export interface ListViewProps extends IndexedListProps {
  renderSectionHeader: (sectionData: string, sectionId: string) => React.ReactNode;
  renderSectionBodyWrapper: (sectionId: string) => React.ReactNode;
  sectionBodyClassName: string;
}

export interface StaticRendererProps {
  render: () => React.ReactNode;
}

class StaticRenderer extends React.Component<StaticRendererProps> {
  render() {
    return this.props.render();
  }
}

export default class ListView extends React.PureComponent<ListViewProps> {
  listViewRef: HTMLDivElement;

  static defaultProps = {
    renderSectionBodyWrapper: (sectionId: string) => <div key={sectionId} />,
    renderBodyComponent: () => <div />,
  };

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
      useBodyScroll,
      style = {},
    } = this.props;
    const rowIdentities = [] as any;
    const sectionIdentities = Object.keys(data);
    Object.keys(data).forEach((item, index) => {
      rowIdentities[index] = [];
      data[item].forEach((ss: any) => {
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
            render={renderRow.bind(null, data[sectionIdentities[sectionIdx]][rowIdx], rowIdx, sectionId)}
          />
        );
        //@ts-ignore
        sectionBody.push(row);
      }
      const rowsAndSeparators = React.cloneElement(
        renderSectionBodyWrapper(sectionId) as any,
        {
          className: sectionBodyClassName,
        },
        sectionBody
      );
      if (renderSectionWrapper) {
        //@ts-ignore
        contentComponents.push(
          //@ts-ignore
          React.cloneElement(
            renderSectionWrapper(sectionId) as any,
            {},
            renderSectionHeaderComponent,
            rowsAndSeparators
          )
        );
      } else {
        //@ts-ignore
        contentComponents.push(renderSectionHeaderComponent);
        //@ts-ignore
        contentComponents.push(rowsAndSeparators);
      }
    }
    const baseStyle = {
      position: 'relative',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
    } as React.CSSProperties;
    const containerStyle = {
      ...(useBodyScroll ? {} : baseStyle),
      ...style,
    };
    return (
      <div ref={el => (this.listViewRef = el as HTMLDivElement)} className={className} style={containerStyle}>
        {renderHeader && renderHeader()}
        {React.cloneElement(renderBodyComponent() as any, {}, contentComponents)}
        {renderFooter && renderFooter()}
        {children}
      </div>
    );
  }
}
