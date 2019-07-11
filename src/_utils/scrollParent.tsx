export default (node: any) => {
  if (!(node instanceof HTMLElement)) {
    return document.documentElement;
  }

  const excludeStaticParent = node.style.position === 'absolute';
  const overflowRegex = /(scroll|auto)/;
  let parent = node;

  while (parent) {
    if (!parent.parentNode) {
      return node.ownerDocument || document.documentElement;
    }

    const style = window.getComputedStyle(parent) as CSSStyleDeclaration;
    const position = style.position;
    const overflow = style.overflow;
    // @ts-ignore
    const overflowX = style['overflow-x'];
    // @ts-ignore
    const overflowY = style['overflow-y'];

    if (position === 'static' && excludeStaticParent) {
      // @ts-ignore
      parent = parent.parentNode;
      continue;
    }

    // @ts-ignore
    if (overflowRegex.test(overflow) && overflowRegex.test(overflowX) && overflowRegex.test(overflowY)) {
      return parent;
    }

    // @ts-ignore
    parent = parent.parentNode;
  }
  // @ts-ignore
  return node.ownerDocument || node.documentElement || document.documentElement;
};
