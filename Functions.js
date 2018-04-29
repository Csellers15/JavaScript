//Function declarations
function greet(firstName = 'John', lastName = 'Doe'){
  return 'hello ' + firstName + ' ' + lastName;
}

console.log(greet('John', 'doe'));

//function Expressions
const square = function(x = 3){
  return x * x;
};

console.log(square(8));

//IIFEs immidiatley invokable function expressions
(function(name){
  console.log('Hello ' + name);
})('Brad');

//Property Methods
const todo = {
  add: function(){
    console.log('add todo..');
  },

  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();
