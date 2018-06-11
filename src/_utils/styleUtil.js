export function getTransformPropValue(v) {
  return {
    transform: v,
    WebkitTransform: v,
    MozTransform: v,
  };
}

export function setTransform(style, v) {
  style.transform = v;
  style.webkitTransform = v;
  style.mozTransform = v;
}

export function getPxStyle(value, unit = 'px', vertical = false) {
  value = vertical ? `0px, ${value}${unit}, 0px` : `${value}${unit}, 0px, 0px`;
  return `translate3d(${value})`;
}

export function setPxStyle(el, value, unit = 'px', vertical = false) {
  setTransform(el.style, getPxStyle(value, unit, vertical));
}
