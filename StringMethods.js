const firstName = 'William';
const lastname = 'Johnson';
const age = 36;
const str = 'Hello there, my name is Brad'
const tags = 'web design, web development '

let val;

val = firstName + lastname;

//Concatenation
val = firstName + ' ' + lastname;

//Appending
val = 'Brad ';
val += "Smith";
val = 'Hello my name is ' + firstName + ' and I am ' + age;

//Escaping
val = 'that\'s Awesome, I can\'t wait';

//Length 
val = firstName.length;

//concat
val = firstName.concat(' ', lastname);

//Changing Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

//array value of string
val = firstName[0];

//indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

//chatAt()
val = firstName.charAt('2');

//get last char
val = firstName.charAt(firstName.length - 1);

//Substrings
val = firstName.substring(0,4);

//Slice
val = firstName.slice(0,4);
val = firstName.slice(-3);

//Split
val = str.split(' ');
val = tags.slice(',');

//replace()
val = str.replace('Brad', 'Jack');

//includes()
val = str.includes('Hello');
val = str.includes('foo');


console.log(val);
