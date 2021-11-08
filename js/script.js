let num = +prompt('Enter num:');
let pow = +prompt('Enter pow:');
let nToPow;
function numToPow (num , pow=1){
    if(typeof(num)!== Number || pow === null || isNaN(pow)) {
            return 'not a number(num)'
    } 
     if(typeof(pow)!==Number || pow === null || isNaN(pow)){
            return 'not a number(pow)'
     }
            return num**pow;
}
numToPow();
alert(numToPow());