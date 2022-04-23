//Reduce implementation
/*
Array.prototype.myReduce = function (callback, init) {
  let acc = init;
  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};

const myArray = [1, 2, 3, 4];

console.log(myArray.myReduce((a, b) => a + b, 0)); 
*/

const contucts = [
  "Alim Hossain",
  "Ayub Islam",
  "Aysha Khatun",
  "Akhun Jada",
  "Bellal Hossain",
  "Badal Islam",
  "Babul Jomadder",
  "Cucu kahmla",
  "Dulal Koshai",
  "Darun Kamul",
  "Emran Hossain",
  "Khalid Farhan",
  "Sadman Shadik",
  "Emayet Choudory",
  "Drub Rathe",
  "Gorav Chowdory",
  "Jakir Khan",
  "zakaria",
];

const contuctList = (arr) => {
  arr.reduce((acc, cur) => {
    const firstLatter = cur.charAt(0).toUpperCase();
    if (firstLatter in acc) {
      acc[firstLatter].push(cur);
    } else {
      acc[firstLatter] = [cur];
    }
    return acc;
  }, {});
};

const test = contuctList(contucts);
console.log(test);
