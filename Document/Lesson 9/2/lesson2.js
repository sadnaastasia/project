function findScrollBarWidth(elem) {
  let computedStyleElem = getComputedStyle(elem);
  alert(computedStyleElem.height.replace('px', '') - (elem.clientHeight - 2 * computedStyleElem.padding.replace('px', '')));
}

findScrollBarWidth(example);