//for loop
for(let i = 0;i < 10;i++){
  if(i === 2){
    console.log('2 is my favorite number');
    continue;
  }
  if(i === 5){
    break;
  }
   console.log(i);
}

//while loop
let i = 0;

while(i < 10){
  console.log('Number ' + i);
  i++;
}

//do while
let j = 0;
do{
  console.log('Number ' + j);
  j++;
}
while(j < 10);


//loop through array
const cars = ['ford', 'chevy', 'honda', 'toyota'];

for(let i = 0; i < cars.length; i++){
  console.log(cars[i]);
}

//for each for arrays
cars.forEach(function(car){
  console.log(car);
});

//map
const users = [
  {id: 1, name:"John"},
  {id: 2, name:"sara"},
  {id: 3, name:"karen"},
]

const ids = users.map(function(user){
  return user.id;
});

console.log(ids);

const user = {
  fistName: 'John',
  lastName: 'Doe',
  age: 40
}


//For in loop
for(let x in user){
  console.log(`${x} : ${user[x]}`);
}
