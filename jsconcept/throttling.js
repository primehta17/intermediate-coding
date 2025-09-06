function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) return;
    lastCall = now;
    func(...args);
  };
}

function resizeWindow(event) {
  const w = event.target.outerWidth;
  const h = event.target.outerHeight;
  const text = `Width is ${w} and height is ${h}`;
  document.getElementById("demo").innerHTML = text;
}

window.addEventListener("resize", resizeWindow);
