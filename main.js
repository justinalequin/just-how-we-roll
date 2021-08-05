/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function (max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);
  return result;
}

const sortByNumber = function (arr) {
  const byNumber = function (item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/

// [*************] VARIABLES: DICE STARTING IMAGES [*************]

let dice1 = document.querySelector('#d6-roll.d6.roll');
dice1.src = 'images/start/d6.png'

let dice2 = document.querySelector('#double-d6-roll-1.d6.roll');
dice2.src = 'images/start/d6.png'

let dice22 = document.querySelector('#double-d6-roll-2.d6.roll');
dice22.src = 'images/start/d6.png'

let dice3 = document.querySelector('#d12-roll.roll');
dice3.src = 'images/start/d12.jpeg'

let dice4 = document.querySelector('#d20-roll.roll');
dice4.src = 'images/start/d20.jpg'

// [*************] VARIABLE: DICE LOCATION IN HTML [*************]

let dice1roll = document.querySelector('#d6-roll.d6.roll');

let dice2roll = document.querySelector('main')//'#double-d6-roll-1.d6.roll' && '#double-d6-roll-2.d6.roll');

let dice3roll = document.querySelector('#d12-roll.roll');

let dice4roll = document.querySelector('#d20-roll.roll');

// [*************] RESET BUTTON [*************]

let resetButton = document.querySelector('#reset-button');

// [*************] VARIABLE: STORED TEXT VARIABLES [*************]


//!!!!!!!
let d6Mean = document.querySelector('#d6-rolls-mean');
d6Mean.innerText = 'N/A';

let d6Median = document.querySelector('#d6-rolls-median');
d6Median.innerText = 'N/A';

let d6Mode = document.querySelector('#d6-rolls-mode');
d6Mode.innerText = 'N/A';
//!!!!!!!



//******
let doubled6Mean = document.querySelector('#double-d6-rolls-mean');
doubled6Mean.innerText = 'N/A';

let doubled6Median = document.querySelector('#double-d6-rolls-median');
doubled6Median.innerText = 'N/A';

let doubled6Mode = document.querySelector('#double-d6-rolls-mode');
doubled6Mode.innerText = 'N/A';
//******



//!!!!!!!
let d12Mean = document.querySelector('#d12-rolls-mean');
d12Mean.innerText = 'N/A';

let d12Median = document.querySelector('#d12-rolls-median');
d12Median.innerText = 'N/A';

let d12Mode = document.querySelector('#d12-rolls-mode');
d12Mode.innerText = 'N/A';
//!!!!!!!



//******
let d20Mean = document.querySelector('#d20-rolls-mean');
d20Mean.innerText = 'N/A';

let d20Median = document.querySelector('#d20-rolls-median');
d20Median.innerText = 'N/A';

let d20Mode = document.querySelector('#d20-rolls-mode');
d20Mode.innerText = 'N/A';
//******



/*******************
 * EVENT LISTENERS *
 *******************/
dice1roll.addEventListener('click', onClick1);
dice2roll.addEventListener('click', onClick2);
dice3roll.addEventListener('click', onClick3);
dice4roll.addEventListener('click', onClick4);

resetButton.addEventListener('click', onClickReset)


/******************
 * RESET FUNCTION *
 ******************/
function onClickReset() {
  dice1.src = 'images/start/d6.png'
  dice2.src = 'images/start/d6.png'
  dice22.src = 'images/start/d6.png'
  dice3.src = 'images/start/d12.jpeg'
  dice4.src = 'images/start/d20.jpg'
  //dice1roll.style.background = 'white'
  //dice2roll.style.background = 'white'
  sixes = [];
  doubleSixes = [];
  twelves = [];
  twenties = [];
  console.clear()
  d20Mode.innerText = 'N/A';
  d20Median.innerText = 'N/A';
  d20Mean.innerText = 'N/A';
  d12Mode.innerText = 'N/A';
  d12Median.innerText = 'N/A';
  d12Mean.innerText = 'N/A';
  doubled6Mean.innerText = 'N/A';
  doubled6Median.innerText = 'N/A';
  doubled6Mode.innerText = 'N/A';
  d6Mode.innerText = 'N/A';
  d6Median.innerText = 'N/A';
  d6Mean.innerText = 'N/A';
}


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/
function onClick1() {
  let ranDie1 = getRandomNumber(6);
  sixes.push(ranDie1)
  console.log('sixes array ', sixes)
  dice1.src = `./images/d6/${ranDie1}.png`

  onClick1Mean = theMeanFunction(sixes)
  d6Mean.innerText = onClick1Mean.toFixed(1)
  d6Median.innerText = theMedianFunction(sixes)
  d6Mode.innerText = theModeFunction(sixes)
  console.log(theModeFunction(sixes));
}

function onClick2() {
  let ranDie2 = getRandomNumber(12)
  if (ranDie2 === 1) { twelves.push(2) }

  if (ranDie2 % 2 === 0){

  }


  else {
    doubleSixes.push(ranDie2)
    let dice2Down = Math.floor(ranDie2 / 2)
    let dice2Up = Math.ceil(ranDie2 / 2)
    dice2.src = `./images/d6/${dice2Down}.png`
    dice22.src = `./images/d6/${dice2Up}.png`

    onClick2Mean = theMeanFunction(doubleSixes)
    doubled6Mean.innerText = onClick2Mean.toFixed(1);
    doubled6Median.innerText = theMedianFunction(doubleSixes)
    doubled6Mode.innerText = theModeFunction(doubleSixes)

  }


  console.log('doubleSixes array ', doubleSixes)
}

function onClick3() {
  ranDie3 = getRandomNumber(12)


  twelves.push(ranDie3)
  dice3.src = `./images/numbers/${ranDie3}.png`

  onClick3Mean = theMeanFunction(twelves)
  d12Mean.innerText = onClick3Mean.toFixed(1)
  d12Median.innerText = theMedianFunction(twelves)
  d12Mode.innerText = theModeFunction(twelves)
  console.log('twelves ', twelves)

}

function onClick4() {
  ranDie4 = getRandomNumber(20)
  twenties.push(ranDie4)
  dice4.src = `./images/numbers/${ranDie4}.png`


  onClick4Mean = theMeanFunction(twenties)
  d20Mean.innerText = onClick4Mean.toFixed(1)
  d20Median.innerText = theMedianFunction(twenties)
  d20Mode.innerText = theModeFunction(twenties)


  console.log('twenties ', twenties)
}


/****************
 * MATH SECTION *
 ****************/


function theMeanFunction(array) {
  output = array.reduce(function (acc, val) { return acc + val; }, 0) / (array.length);
  return output
}

function theMedianFunction(array) {
  sort = array.sort(function (a, b) { return a - b });
  if (array.length === 1) { return "N/A" }

  middle = Math.floor(array.length / 2);
  midPos = array[middle]
  return midPos

}

function theModeFunction(array) {
  output = 0;
  sort = array.sort(function (a, b) { return a - b });
  let oneCount = 0;
  let twoCount = 0;
  let threeCount = 0;
  let fourCount = 0;
  let fiveCount = 0;
  let sixCount = 0;
  let sevenCount = 0;
  let eightCount = 0;
  let nineCount = 0;
  let tenCount = 0;
  let elevenCount = 0;
  let twelveCount = 0;
  let thirteenCount = 0;
  let fourteenCount = 0;
  let fifteenCount = 0;
  let sixteenCount = 0;
  let seventeenCount = 0;
  let eighteenCount = 0;
  let nineteenCount = 0;
  let twentyCount = 0;

  for (i = 0; i < array.length; i++) {

    if (array[i] === 1) { oneCount += 1 }
    if (array[i] === 2) { twoCount += 1 }
    if (array[i] === 3) { threeCount += 1 }
    if (array[i] === 4) { fourCount += 1 }
    if (array[i] === 5) { fiveCount += 1 }
    if (array[i] === 6) { sixCount += 1 }
    if (array[i] === 7) { sevenCount += 1 }
    if (array[i] === 8) { eightCount += 1 }
    if (array[i] === 9) { nineCount += 1 }
    if (array[i] === 10) { tenCount += 1 }
    if (array[i] === 11) { elevenCount += 1 }
    if (array[i] === 12) { twelveCount += 1 }
    if (array[i] === 13) { thirteenCount += 1 }
    if (array[i] === 14) { fourteenCount += 1 }
    if (array[i] === 15) { fifteenCount += 1 }
    if (array[i] === 16) { sixteenCount += 1 }
    if (array[i] === 17) { seventeenCount += 1 }
    if (array[i] === 18) { eighteenCount += 1 }
    if (array[i] === 19) { nineteenCount += 1 }
    if (array[i] === 20) { twentyCount += 1 }
  }

  let mostOften = Math.max(oneCount, twoCount, threeCount, fourCount, fiveCount,
    sixCount, sevenCount, eightCount, nineCount, tenCount, elevenCount, twelveCount,
    thirteenCount, fourteenCount, fifteenCount, sixteenCount, seventeenCount,
    eighteenCount, nineteenCount, twentyCount)

  if (oneCount === mostOften) { output = 1 }
  if (twoCount === mostOften) { output = 2 }
  if (threeCount === mostOften) { output = 3 }
  if (fourCount === mostOften) { output = 4 }
  if (fiveCount === mostOften) { output = 5 }
  if (sixCount === mostOften) { output = 6 }
  if (sevenCount === mostOften) { output = 7 }
  if (eightCount === mostOften) { output = 8 }
  if (nineCount === mostOften) { output = 9 }
  if (tenCount === mostOften) { output = 10 }
  if (elevenCount === mostOften) { output = 11 }
  if (twelveCount === mostOften) { output = 12 }
  if (thirteenCount === mostOften) { output = 13 }
  if (fourteenCount === mostOften) { output = 14 }
  if (fifteenCount === mostOften) { output = 15 }
  if (sixteenCount === mostOften) { output = 16 }
  if (seventeenCount === mostOften) { output = 17 }
  if (eighteenCount === mostOften) { output = 18 }
  if (nineteenCount === mostOften) { output = 19 }
  if (twentyCount === mostOften) { output = 20 }

  return output


  console.log('oneCount', oneCount)
  console.log('twoCount', twoCount)
  console.log('threeCount', threeCount)
  console.log('fourCount', fourCount)
  console.log('fiveCount', fiveCount)
  console.log('sixCount', sixCount)

}