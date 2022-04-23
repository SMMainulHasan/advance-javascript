//Reduce implementation
Array.prototype.myReduce = function (callback, init) {
  let acc = init;
  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};

const myArray = [1, 2, 3, 4];

console.log(myArray.myReduce((a, b) => a + b, 0));
