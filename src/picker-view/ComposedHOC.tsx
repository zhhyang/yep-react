import * as React from 'react';

const Item = props => null;

export interface ItemProps  {
  className?: string;
  value?: any;
};

export default function(ComposedComponent:any) {
  return class extends React.Component {
    static Item = Item;

    constructor(props) {
      super(props);
      this.select = this.select.bind(this);
      this.selectByIndex = this.selectByIndex.bind(this);
      this.doScrollingComplete = this.doScrollingComplete.bind(this);
      this.computeChildIndex = this.computeChildIndex.bind(this);
    }

    select(value, itemHeight, scrollTo) {
      const children = React.Children.toArray(this.props.children);
      for (let i = 0, len = children.length; i < len; i++) {
        if (children[i].props.value === value) {
          this.selectByIndex(i, itemHeight, scrollTo);
          return;
        }
      }
      this.selectByIndex(0, itemHeight, scrollTo);
    }

    selectByIndex(index, itemHeight, zscrollTo) {
      if (index < 0 || index >= this.props.children.length || !itemHeight) {
        return;
      }
      zscrollTo(index * itemHeight);
    }

    computeChildIndex(top, itemHeight, childrenLength) {
      let index = top / itemHeight;
      const floor = Math.floor(index);
      if (index - floor > 0.5) {
        index = floor + 1;
      } else {
        index = floor;
      }
      return Math.min(index, childrenLength - 1);
    }

    doScrollingComplete(top, itemHeight, fireValueChange) {
      const children = React.Children.toArray(this.props.children);
      const index = this.computeChildIndex(top, itemHeight, children.length);
      const child: any = children[index];
      if (child) {
        fireValueChange(child.props.value);
      } else if (console.warn) {
        console.warn('child not found', child, index);
      }
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          doScrollingComplete={this.doScrollingComplete}
          computeChildIndex={this.computeChildIndex}
          select={this.select}
        />
      );
    }
  };
}
