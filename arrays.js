//Create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,56,76);
const fruit = ['Apple', 'Banana', 'Orange'];
const mix = [23, 'Hello', true, null, undefined, {a:1,b:1}, new Date()];

let val;


//get array length
val = numbers.length;

//check if is array
val = Array.isArray(numbers);
//get single value
val = numbers[3];
val = numbers[0];
//insert into array
numbers[2] = 100;
//find index of value
val = numbers.indexOf(36);

//mutating arrays
//add on to end
numbers.push(250);
//add on to front
numbers.unshift(120);
//take off from end
numbers.pop();
//take off from front
numbers.shift();
//splicing values
numbers.splice(1,1);
//reverse array
numbers.reverse();
//concatenate array
val = numbers.concat(numbers2);
//sort array
val = fruit.sort();
val = numbers.sort();

//use the compare funcation
val = numbers.sort(function(x,y){
  return x-y;
});

//reverse sort
val = numbers.sort(function(x,y){
  return y-x;
});

//find first num under 50
function under50(num){
  return num < 50;
}

val = numbers.find(under50);


console.log(numbers);
console.log(val);
