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