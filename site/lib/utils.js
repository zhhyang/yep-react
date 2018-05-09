function toCamelCase(str) {
  const reg=/-(\w)/g;

  return (str.charAt(0).toUpperCase()+str.slice(1)).replace(reg,function($0,$1){
    return $1.toUpperCase();
  });
}

export {
  toCamelCase
}
