const debounceInput = document.querySelector("#debounce-input");
debounceInput.addEventListener("keypress", debounce(callData, 300));

let counter = 1;
function callData() {
  console.log("called for data " + counter++);
}

function debounce(fn, limit) {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, limit);
  };
}

// __________________Throttling___________________________
const targetButton = document.getElementById("throttling-btn");
targetButton.addEventListener("click", throttle(getData, 300));

let count = 1;
function getData() {
  console.log("called for data " + counter++);
}

function throttle(fn, limit) {
  let flag = true;
  return function () {
    const context = this;
    const args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
}

/**
// ----------Reduce implementation-------------
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

/** // ---------Turing array into Object--------
const names = [
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

const nameGroup = names.reduce((acc, cur) => {
  const firstLetter = cur[0].toUpperCase();
  if (firstLetter in acc) {
    acc[firstLetter].push(cur);
  } else {
    acc[firstLetter] = [cur];
  }
  return acc;
}, {});

Object.keys(nameGroup).forEach((key) => {
  console.log("_______", key, "______");
  nameGroup[key].forEach((name, index) => console.log(index + 1, "| ", name));
});
*/
