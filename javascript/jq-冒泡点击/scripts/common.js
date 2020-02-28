// 函数节流
var throttle = function (fn, delay) {
  var timer = null;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(function () {
      fn.apply(this, arguments);
    }, delay || 50);
  }
}
