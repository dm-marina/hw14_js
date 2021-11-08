let num = +prompt('Enter num:');
let pow = +prompt('Enter pow:');
let nToPow;
function numToPow (num , pow=1){
    if(typeof(num)!== Number || isNaN(num) || num === null) {
            return 'not a number(num)'
    } 
     if(typeof(pow)!==Number || isNaN(pow) || pow === null ){
            return 'not a number(pow)'
     }
     if( pow!==null && num!==null){
            return num**pow;
     }
}
let result = numToPow();
alert(result);