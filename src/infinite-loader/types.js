// @flow
import * as React from 'react';

export type InfiniteLoaderPropTypes = {
  children: React.Node,
  loadMore: () => void,
  hasMore: boolean,
  loader: React.Node,
  scrollThreshold: number,
  endMessage: React.Node,
  style: Object,
  height: number,
  scrollableTarget: React.Node,
  hasChildren: boolean,
  pullDownToRefresh: boolean,
  pullDownToRefreshContent: React.Node,
  releaseToRefreshContent: React.Node,
  pullDownToRefreshThreshold: number,
  refreshFunction: () => void,
  onScroll: () => void,
  dataLength?: number,
};
