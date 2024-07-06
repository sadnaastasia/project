function moveBall(field, ball) {
  let computedStyleField = getComputedStyle(field);
  let computedStyleBall = getComputedStyle(ball);
  x = computedStyleField.width.replace('px', '') / 2 - computedStyleBall.width.replace('px', '') / 2;
  y = computedStyleField.height.replace('px', '') / 2 - computedStyleBall.height.replace('px', '') / 2;
  ball.style.top = `${y}px`;
  ball.style.left = `${x}px`;
}

window.addEventListener('load', () => moveBall(field, ball));