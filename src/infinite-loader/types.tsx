import * as React from 'react';

export interface InfiniteLoaderPropTypes {
  children: React.ReactNode;
  loadMore: () => void;
  hasMore?: boolean;
  loader?: React.ReactNode;
  scrollThreshold?: number;
  endMessage?: React.ReactNode;
  style: React.CSSProperties;
  height?: number,
  scrollableTarget: React.ReactNode;
  hasChildren?: boolean;
  pullDownToRefresh?: boolean;
  pullDownToRefreshContent?: React.ReactNode;
  releaseToRefreshContent?: React.ReactNode;
  pullDownToRefreshThreshold?: number;
  refreshFunction?: () => void,
  onScroll?: () => void,
  dataLength?: number,
}
