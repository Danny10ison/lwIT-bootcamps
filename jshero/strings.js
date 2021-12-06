// JavaScript strings (functions + strings)

function greet(name){
    return 'Hello ' + name + '!';
}
let greetMe = greet('Daniel');

console.log(greetMe);

function hi(name){
    return 'Hi ' + name + '!';
}

let h1 = hi('Selva');
let h2 = hi('Pola');
let x = h1 + ' ' + h2;

console.log(x)

let word = "fire"
function shout(word){
    let result = word + word;
    console.log(result);
    return result;
}
shout(word);

// string length
function myLength(text){
    return text.length;
}

console.log(myLength("hmm"))

// string methods
function toCase(text){
    
    return  text.toLowerCase()+ "-" + text.toUpperCase(); 
}
console.log(toCase("kofI"))

function shortcut(text1, text2){
    return text1.charAt(0)+text2.charAt(0);
}

console.log(shortcut("Amnesty", "International"));

function firstChar(text){
    return text.trim().charAt(0);
}
console.log(firstChar(" Hman "));

function indexOfIgnoreCase(text1, text2){
    return text1.toLowerCase().indexOf(text2.toLowerCase());
}
console.log(indexOfIgnoreCase("bit","it"));
console.log(indexOfIgnoreCase("bit","iT"));


function secondIndexOf(text1, text2){
    return text1.indexOf(text2, text1.indexOf(text2)+1) ;
}
console.log(secondIndexOf("White Rabbit", "it"));

function firstWord(text){
    let firstBlank = text.indexOf(' ');
    return text.substr(0,firstBlank)
}
console.log(firstWord("see ad stop"));

function normalize(date){
    return date.replace(/-/g, '/'); // change any instance of - to /
}
let datee = '20-05-2017';
console.log(normalize(datee));