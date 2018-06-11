'use strict';

function whoAmI(name, age){
  if (!name || !age){
    console.error('Arguments not valid');
    return;
  }
  let yob;
  try {
    yob = yearOfBirth(age);
  }
  catch (e) {
    console.error (e.message);
    return;
  }
  
  console.log('My name is ' + name + ' and I\'m ' + age + ' years old');
  console.log('I was born in ' + yob);
}

function yearOfBirth(age) {
  if (age < 0){
    throw new Error('Age can not be negative');
  }
  return 2018 - age;
}

whoAmI('John', 29);
whoAmI('John', -5);
whoAmI();