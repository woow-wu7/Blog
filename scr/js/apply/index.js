const obj = {
  name: 'wang',
};
function fn(name) {
  return {
    name: name || this.name
  }
}
Function.prototype._apply = function (context, arr) {
  context = context ? context : window;
  context.fn = this;
  let res = null;
  if (!arr) { //_apply第二个参数不存在，就不给fn传参，直接执行fn
    res = context.fn()
  } else {
    arr instanceof Array
    ?
    res = context.fn(...arr)
    :
    console.log('第二个参数只能是数组')
  }
  delete context.fn;
  return res;
}
const result = fn._apply(obj, ['woow-wu']);
console.log(result)