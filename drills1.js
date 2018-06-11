'use strict';

function whoAmI(name, age){
  let yob = yearOfBirth(age);
  console.log('My name is Devin and I\'m 4000 years old');
  console.log('I was born in ' + yob);
}

whoAmI('John',29);

function yearOfBirth(age) {
  return 2018 - age;
}

