
function fn() {
};

fn.prototype._call = function () {
  console.log('1111111');
}
const instance = Object.create(fn.prototype);
instance._call();
