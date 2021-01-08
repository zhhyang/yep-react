import * as React from 'react';

export interface InfiniteLoaderPropTypes {
  children: React.ReactNode;
  loadMore: () => void;
  hasMore?: boolean;
  loader?: React.ReactNode;
  scrollThreshold?: number;
  endMessage?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  height?: number;
  scrollableTarget?: React.ReactNode;
  hasChildren?: boolean;
  onScroll?: (e: React.TouchEvent<HTMLDivElement>) => void;
  dataLength: number;
  initialScrollY?: number;
}
