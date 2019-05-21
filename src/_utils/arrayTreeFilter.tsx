function arrayTreeFilter<T>(
  data: T[],
  filterFn: (item: T, level: number) => boolean,
  options?: {
    childrenKeyName?: string,
  }
) {
  options = options || {};
  options.childrenKeyName = options.childrenKeyName || 'children';
  let children = data || [];
  const result: T[] = [];
  let level = 0;
  do {
    const foundItem: any = children.filter(item => {
      return filterFn(item, level);
    })[0];
    if (!foundItem) {
      break;
    }
    result.push(foundItem);
    children = foundItem[options.childrenKeyName] || [];
    level += 1;
  } while (children.length > 0);
  return result;
}

export default arrayTreeFilter;
