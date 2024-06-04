{
  const throttle = (fn, delay) => {
    let timer = null;
    return function () {
      if (!timer) {
        timer = setTimeout(() => {
          fn.apply(this, arguments);
          timer = null;
        }, delay);
      }
    };
  };
}
{
  const throttle = (fn, delay) => {
    let lastCallTime = 0;
    return function () {
      let currentTime = Date.now();
      if (currentTime - lastCallTime >= delay) {
        fn.apply(this, arguments);
        lastCallTime = currentTime;
      }
    };
  };
}
