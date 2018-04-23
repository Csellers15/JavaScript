const id = 100;

//equal to
if(id == 100){
  console.log('CORRECT');
} else{
  console.log('INCORRECT');
}

//NOT equal to
if(id != 100){
  console.log('CORRECT');
} else{
  console.log('INCORRECT');
}

//equal to value and type
if(id === 100){
  console.log('CORRECT');
} else{
  console.log('INCORRECT');
}

// not equal to value and type
if(id !== 100){
  console.log('CORRECT');
} else{
  console.log('INCORRECT');
}

//checking if id is defined
if(typeof id !== 'undefined'){
 console.log(`The id is ${id}`);
} else{
  console.log('No id');
}

//greater or less than
if(id > 200){
  console.log('CORRECT');
} else{
  console.log('INCORRECT');
}

if(id < 200){
  console.log('CORRECT');
} else{
  console.log('INCORRECT');
}

if(id >= 200){
  console.log('CORRECT');
} else{
  console.log('INCORRECT');
}

if(id <= 200){
  console.log('CORRECT');
} else{
  console.log('INCORRECT');
}


//if else
const color = 'red';

if(color === 'red'){
  console.log('color is red')
} else if(color === 'blue'){
  console.log('color is blue');
}else{
  console.log('color is not red or blue');
}

//logical operators
const name = 'steve';
const age = 20;

//And &&
if( age > 0 && age < 12){
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenager`)
} else{
  console.log(`${name} is an adult`);
}

//Or ||
if(age < 16 || age > 65){
  console.log(`${name} can not run in the race`);
} else{
  console.log(`${name} can run in the race`);
}

//Ternary Operator
console.log(id === 100 ? 'Correct' : 'Incorrect');
