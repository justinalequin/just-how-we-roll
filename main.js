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
  dice1roll.style.background = 'white'
  dice2roll.style.background = 'white'
   sixes = [];
   doubleSixes = [];
   twelves = [];
   twenties = [];
  console.clear()
}


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/
function onClick1() {
  let ranDie1 = getRandomNumber(6);
  sixes.push(ranDie1)
  console.log('sixes array ',sixes)
  dice1.src = `./images/d6/${ranDie1}.png`

  let dice1Mean = (sixes.reduce(function(acc, val){ return acc + val; }, 0)/(sixes.length));
  d6Mean.innerText = dice1Mean

  let dice1Median = sixes.sort(function (a, b){return a-b});
  let arrLen = Math.floor(sixes.length / 2);
  let dice1Median1 = sixes[arrLen]
  d6Median.innerText = dice1Median1
  
  
}

function onClick2() {
  doubleSixes.push(getRandomNumber(12))
  console.log('doubleSixes array ',doubleSixes)
}

function onClick3() {
  twelves.push(getRandomNumber(12))
  console.log('twelves ',twelves)
}

function onClick4() {
  twenties.push(getRandomNumber(20))
  console.log('twenties ',twenties)
}


/****************
 * MATH SECTION *
 ****************/


