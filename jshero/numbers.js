/**
 * JavaScript Numbers
 * 
 */

function add(num1, num2){
    return num1 + num2;
}
console.log(add(1,2));


let x = 3;
x++   // increment
x = x*2;
x--;  //decrement
console.log(x); // 7


function toFahrenheit(celcius){
    return (celcius*1.8) + 32;
}
console.log(toFahrenheit(0));


function onesDigit(numm){
    return numm%10;
}
console.log(onesDigit(2674));

function mean(numm1, numm2){
    return (numm1+numm2)/2;
}
console.log(1,2);

function hypotenuse(b, c){
    let hypo = Math.sqrt(Math.pow(b,2)+Math.pow(c,2));
    return hypo;
}
console.log(hypotenuse(3,4));


function midrange(x, y, s){
    let small = Math.min(x,y,s)
    let big = Math.max(x,y,s);

    return (big+small)/2;
}
console.log(midrange(3,9,1));


function area(radius){
    return Math.PI*Math.pow(radius,2);
}
console.log(area(2));

function round100(num){
    // logic behind this
  

    return Math.round(num/100)*100;

}
let hm = round100(1749);
console.log(hm);

// random numbers
function dice(){
    multOf6 = Math.random()*6;
    wholePart = Math.floor(multOf6);  // add 1 so that it never goes to sero
    properDice = wholePart+1;

    return properDice;
}
let milude = dice();
console.log(milude);

// parseInt
function aadd(text){
    let firstSummand = parseInt(text, 10); // get first operand 102
    let plusPosition = text.indexOf('+', 0)
    let theRest = parseInt(text.substr(plusPosition+1), 10)


    return  firstSummand+theRest;
}

console.log(aadd("102+17"))