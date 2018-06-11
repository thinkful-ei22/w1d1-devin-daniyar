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
      return '2';
    case 'b':
      return '3';
    case 'c':
      return '4';
    case 'd':
      return '5';
    default:
      return " ";
  }
}

function decodeString(string) {
  let splitString = string.split(' ');
  return splitString.map(function(word){
    return decode(word);
  }).join('');
}

console.log(decodeString('craft block argon meter bells brown croon droop'));