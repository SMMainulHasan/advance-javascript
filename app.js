// __________________Throttling___________________________

const targetButton = document.getElementById("throttling-btn");
const timeApi = "http://worldtimeapi.org/api/timezone/Etc/UTC";


async function apiCall(url) {
  const data = await axios.get(url);
  console.log(data);
}
const throttle = (func, limit)=> {
  let flag = true;
  return function(){
    if (flag){
      func();
      flag= false;
      setTimeout(()=> {
        flag = true
      }, limit)
    }
  }
}
const currentTime = apiCall(timeApi)

const throttledApiCall = {
  throttle(currentTime, 1000)
};

targetButton.addEventListener("click", throttledApiCall);
/*
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

/* // ---------Turing array into Object--------
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
