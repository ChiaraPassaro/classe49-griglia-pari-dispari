// Creare in JavaScript una griglia 8x8.
// Ogni cella della griglia contiene un numero casuale da 1 a 64. 

//I numeri presenti nelle celle non devono essere ripetuti(ovvero la griglia contiene ** tutti ** i numeri da 1 a 64).

// Ogni volta che clicco su un quadrato questo si colora di verde se il numero contenuto e' pari e in rosso se dispari..


// Functions
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function generateArrayNumbersRand(lengthArray, min, max) {
  // console.log('this generateArray', this);
  if (min < 0) {//min non minore di zero
    return 'min non e valido';
  } else if (max < lengthArray) {
    return 'max non e valido';
  }

  const arrayNumbers = [];


  for (let i = 0; i < lengthArray; i++) {
    //genero numero random
    let numberRand = getRandomIntInclusive(min, max);

    //controllo se il numero generato e dentro numbersRandom
    //se non lo e allora lo inserisco nell'array
    //altrimenti ne genero uno nuovo

    while (arrayNumbers.includes(numberRand)) { //controllo se e incluso in array, e ne genero uno nuovo finche e presente
      numberRand = getRandomIntInclusive(min, max);
    }

    //qui ci arrivo solo se ho generato un numero nuovo
    arrayNumbers.push(numberRand); //lo pusho nell'array

  }

  return arrayNumbers;
}




//Set UP 
// Creare in JavaScript una griglia 8x8.
// Ogni cella della griglia contiene un numero casuale da 1 a 64. 
const row = 8;
const col = 8;
const numberSquare = row * col;
const maxNumber = numberSquare;
const minNumber = 1;
const containerGrid = document.getElementById('grid');

//avere un elenco di numeri per poi controllarli
// const numbersRandom = [];



// for (let i = 0; i < numberSquare; i++) {
//   const square = document.createElement('div');
//   //aggiungiamo classe square
//   square.classList.add('square');

//   //genero numero random
//   let numberRand = getRandomIntInclusive(minNumber, maxNumber);

//   //controllo se il numero generato e dentro numbersRandom
//   //se non lo e allora lo inserisco nell'array
//   //altrimenti ne genero uno nuovo

//   while (numbersRandom.includes(numberRand)) { //controllo se e incluso in array, e ne genero uno nuovo finche e presente
//     numberRand = getRandomIntInclusive(minNumber, maxNumber);
//   }

//   //qui ci arrivo solo se ho generato un numero nuovo
//   numbersRandom.push(numberRand); //lo pusho nell'array
//   // console.log(numbersRandom);
//   // console.log(numberRand);
//   square.append(numberRand);
//   // console.log(square);

//   //inserisco lo square nel container 
//   containerGrid.append(square);
// }


const numbersRandom = generateArrayNumbersRand(numberSquare, minNumber, maxNumber);
// console.log(numbersRandom);

for (let i = 0; i < numberSquare; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.style.width = `calc(100% / ${col})`;
  square.style.height = `calc(100% / ${row})`;
  console.log(square.style);
  square.append(numbersRandom[i]);
  containerGrid.append(square);

  square.addEventListener('click', function () {
    //nell'addeventlistener il this e l'elemento su cui sto ascoltando
    console.dir(this);
    const element = this;
    //che numero ho dentro? pari o dispari?

    if (parseInt(element.innerText) % 2 == 0) {
      element.classList.add('square--even', 'clicked');
    } else {
      element.classList.add('square--odd', 'clicked');
    }
  });
}


// function isEven(num) {
//   if (num % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const isEven = (num) => {
//   console.log(num % 2 == 0);
//   if (num % 2 == 0) { //true
//     return true;
//   } else { //false
//     return false;
//   }
// }
// const isEven = (num) => {
//   return num % 2 == 0;
// }
// const isEven = (num) => num % 2 == 0;
// // const parolaUguale = (parola) => parola == 'pippo';


// console.log(isEven(10));