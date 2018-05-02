import React,{Component} from 'react';

export default function (ComposedComponent) {
  return class extends Component {
    constructor() {
      super()
      this.select = this.select.bind(this)
      this.selectByIndex = this.selectByIndex.bind(this)
      this.doScrollingComplete = this.doScrollingComplete.bind(this)
      this.computeChildIndex = this.computeChildIndex.bind(this)
    }

    select(value, itemHeight, scrollTo) {
      const {data} = this.props;
      for (let i = 0, len = data.length; i < len; i++) {
        if (data[i] === value) {
          this.selectByIndex(i, itemHeight, scrollTo)
          return;
        }
      }
      this.selectByIndex(0, itemHeight, scrollTo)
    }

    selectByIndex(index, itemHeight, zscrollTo) {
      if (index < 0 || index >= this.props.data.length || !itemHeight) {
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
      const {data} = this.props;
      const index = this.computeChildIndex(top, itemHeight, data.length);
      const value = data[index];
      if (value) {
        fireValueChange(value);
      } else if (console.warn) {
        console.warn('child not found', children, index);
      }
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          doScrollingComplete={this.doScrollingComplete}
          computeChildIndex={this.computeChildIndex}
          select={this.select}
        />)
    }


  }
}
