// functions 
// javascript is case sensitive
function hello(){
    return 'Hello World!';
} // creating a function
let heillo = /*function call*/hello(); 

console.log(heillo);

// multiple functions
function a(){
    return 'Hello a!';
}

function b(){
    return 'Hello b!';
}
let a_ = a();
let b_ = b();

console.log(a_, b_);

// functions with parameters
function echo(param){
  return param;  
}
let greta = echo('Greta');
console.log(greta);

