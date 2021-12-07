// Booleans

// nand
function nand(bool1, bool2){
    return !(bool1&&bool2)
}

// nor
function nor(bb1, bb2){
    return !(bb1||bb2);
}

// xor
function xor(b1, b2){
    // Y(xor) = (a+b).(!a+!b)
    return (b1||b2)&&(!b1||!b2)
}

// Strict Equality
function equals(a, b){
    return a===b;
}

function threeEquals(a, b, c){
    return a===b && b===c
}

function isEven(num){
    return (num%2)===0;
}

// strick inequality
function unequal(h, s, k){
    return (h!==s)&&(s!==k)&&(h!==k);
}

// compare numbers
function isThree(j){
    return (j>=100) && (j<1000);
}

