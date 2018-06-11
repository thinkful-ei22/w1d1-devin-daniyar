'use strict';

function jediName(firstName, lastName){
  return lastName.slice(0,3) + firstName.slice(0,2);

}

console.log(jediName('Juan', 'Magnifico'));

function beyond(num){
  if(num === Infinity || num === -Infinity){
    console.log('And beyond!');
  }else if(num > 0){
    console.log('To infinity...');
  }else if(num < 0){
    console.log('To negative infinity...');
  }else if(num === 0){
    console.log('Staying home.');
  }else{
    //default
  }

}

beyond(Infinity);
beyond(-Infinity);
beyond(5);
beyond(-5);
beyond(0);
beyond('HAHAHA I AM USING THE INTERNET');


function decode (word) {
  //take the first char
  let firstChar = word[0];
  switch (firstChar) {
    case 'a':
      return word[1];
    case 'b':
      return word[2];
    case 'c':
      return word[3];
    case 'd':
      return word[4];
    default:
      return ' ';
  }
}

function decodeString(string) {
  let splitString = string.split(' ');
  return splitString.map(function(word){
    return decode(word);
  }).join('');
}

console.log(decodeString('craft block argon meter bells brown croon droop'));

function daysInMonth(month, leapYear) {
  switch (month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      return month + ' has 31 days';
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      return month + ' has 30 days';
    case 'February':
      if (leapYear === true) {
        return month + ' has 29 days';
      } else {
        return month + ' has 28 days';
      }
    default:
      return 'Must provide a valid month';  
  }
}

console.log(daysInMonth('January'));
console.log(daysInMonth('February'));
console.log(daysInMonth('February', true));
console.log(daysInMonth('March'));
console.log(daysInMonth('April'));
console.log(daysInMonth('May'));
console.log(daysInMonth('June'));
console.log(daysInMonth('July'));
console.log(daysInMonth('August'));
console.log(daysInMonth('September'));
console.log(daysInMonth('October'));
console.log(daysInMonth('November'));
console.log(daysInMonth('December'));
console.log(daysInMonth('whatever'));

function rockPaperScissors(choice){
  //1 - Rock
  //2 - Paper
  //3 - Scissors

  const randomNo = Math.floor(Math.random() * 3) + 1;
  let winner = '';

  if(choice < 0 || choice > 3 || typeof(choice) !== 'number'){
    console.error('Invalid input!');
    return;
  }
  
  switch(choice - randomNo){
    case 2:
    case -1:
      winner = ' You lose...';
      break;
    case 1:
    case -2:
      winner = ' You win!';
      break;
    case 0:
      winner = ' Tie.';
      break;
    default:
      winner = ' Something went wrong?';
  }
    
  console.log(`You chose ${convertRPSValue(choice)}, opponent chose ${convertRPSValue(randomNo)}.` + winner);

}

function convertRPSValue(val){
  switch(val){
    case 1: return 'rock';
    case 2: return 'paper';
    case 3: return 'scissors';
    default: return '????';
  }
}

rockPaperScissors(1);
rockPaperScissors(2);
rockPaperScissors(3);
rockPaperScissors(4);
rockPaperScissors('Jeff');