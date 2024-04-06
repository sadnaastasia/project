let point1 = `x = ${field.getBoundingClientRect().x}, y =  ${field.getBoundingClientRect().y}`;
let point2 = `x = ${field.getBoundingClientRect().right}, y =  ${field.getBoundingClientRect().bottom}`;
let computedStyleField= getComputedStyle(field);
let point3 = `x = ${field.getBoundingClientRect().x + Number(computedStyleField.borderLeftWidth.replace('px', ''))}, 
y =  ${field.getBoundingClientRect().y + Number(computedStyleField.borderTopWidth.replace('px', ''))}`;
let point4 = `x = ${field.getBoundingClientRect().right - Number(computedStyleField.borderRightWidth.replace('px', ''))}, 
y =  ${field.getBoundingClientRect().bottom - Number(computedStyleField.borderBottomWidth.replace('px', ''))}`;