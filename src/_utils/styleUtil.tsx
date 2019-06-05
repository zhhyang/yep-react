export function getTransformPropValue(v: any) {
  return {
    transform: v,
    WebkitTransform: v,
    MozTransform: v,
  };
}

export function setTransform(style: any, v: any) {
  style.transform = v;
  style.webkitTransform = v;
  style.mozTransform = v;
}

export function getPxStyle(value: number | string, unit = 'px', vertical = false) {
  value = vertical ? `0px, ${value}${unit}, 0px` : `${value}${unit}, 0px, 0px`;
  return `translate3d(${value})`;
}

export function setPxStyle(el: HTMLDivElement, value: number | string, unit = 'px', vertical = false, useLeft = false) {
  if (useLeft) {
    if (vertical) {
      el.style.top = `${value}${unit}`;
    } else {
      el.style.left = `${value}${unit}`;
    }
  } else {
    setTransform(el.style, getPxStyle(value, unit, vertical));
  }
}

export function suffixPx(value?: string | number): string | undefined {
  if (value === undefined && value === null) {
    return undefined;
  }

  value = String(value);
  return /^\d+$/.test(value) ? `${value}px` : value;
}
