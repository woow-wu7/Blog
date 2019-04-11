const obj = {
  name: 'woow-wu',
  age: 20,
};
function fn() {
  return {
    name: this.name,
    age: this.age
  }
};

Function.prototype._bind = function (obj) {
  let context =  obj ? obj : window;
  // 当第一个参数是 null, undefined，或者为空时，表示传入window对象

  let arr = [];
  for (let i = 1, len = arguments.length; i < len; i++) {
    arr.push('arguments[' + i + ']')
  }
  // arguments是类似数组的对象，即具有length属性，key值是数值
  // 因为arguments是对象，所以可以用for循环得到没项的value值
  // 因为arguments第一个obj对象，所以函数参数是除去第一项后的值
  // arr数组是 [ 'arguments[1]', 'arguments[2]' ]

  context.fn = this;
  // --- 第一步：给对象绑定函数
  // this指的是 fn函数对象
  // 给obj添加fn属性，值是fn函数 (fn属性在后面要删掉，所以可以随便取名)

  const res = eval('context.fn(' + arr + ')');
  // --- 第二步：执行函数
  // 执行fn函数
  // 因为加号可以重载，执行相加或者连接
  // 当+的运算子有对象时，先执行 valueof -> 对象返回自身 -> toString -> 除了Objct外，其他都是对象的字符串形式
  // 所以arr会被转成字符串形式，即 "arguments[1],arguments[2]"
  // res拿到函数的返回值

  delete context.fn;
  // --- 第二步：删除函数

  return res;
  // 因为函数可以有返回值

}

const res = fn._bind(obj, 'wang', 30);
console.log(res, '执行_bind函数后得到的返回值');