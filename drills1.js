'use strict';

function whoAmI(name, age){
  let yob;
  try {
    yob = yearOfBirth(age);
  }
  catch (e) {
    console.log (e.message);
    return;
  }
  
  console.log('My name is Devin and I\'m 4000 years old');
  console.log('I was born in ' + yob);
}

whoAmI('John',29);

function yearOfBirth(age) {
  if (age < 0){
    throw new Error('Age can not be negative');
  }
  return 2018 - age;
}
whoAmI('John', -5);