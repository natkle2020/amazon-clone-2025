// Question 1 Given an array of numbers, write a function that prints in the console another array which contains all the even numbers in the original array, which also have even indexes only.
// ○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
// ○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]
// to find out the even number from the parametre and the index
// psedo code 
// declair a function name getOnlyEvens
// it took one parameter called parameter.
// the parameter must be number and posetive number if not return error
// the parameter and the index must be even number 

function getOnlyEvens(parameter) { 
//  if (parameter !==number && parameter<0 )
if(!(Array.isArray(parameter))){
    return "error with your input"
}
let result=[]
for(let i=0; i<parameter.length;i++) {
if (i%2==0 && parameter[i]%2 ==0)
{ result.push(parameter[i])  }
}
return result;
}
console.log(getOnlyEvens([1, 2, 10, 6, 4, 8]))
console.log(getOnlyEvens([0, 1, 2, 3, 10])) 

//   Question 2
// ● Create a function that takes a two-digit number as an parameter and prints "Ok" in the console if the given string is greater than its reversed digit version. If not, the function will print "Not ok"
// ○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
// ○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32

// the given string is greater than the reversed digit
// psedo code 
// declair a function name reverseCompare
// it take one parameter name parameters
// validate weather the value is two digit number
// if not turn please put two digit number
// if yes move on the next step
// compare the two digit  string with the reverse string    
// if the given string is greater than the reversd string

// two digit string divided by 10 we teak the mojulo and multiplay by 10 
// two digit string divided by 10 and sum up 
// reverse=(num%10)*10 + num/10
//  return ok 
// if not return "not ok" 
// it took one parameter name parameter
// declair a varable to store the new value

// code

function reverseCompare(parameter) {
if ( Math.abs(parameter).toString().length !==2 || typeof parameter !=="number" ){
    return "please put two digit number"
}
// else if (parameter =="string"){
//     return "put string"
// }
   else{
    let reversed = (parameter % 10) * 10 + Math.floor(parameter / 10); 
    console.log(reversed)
    
    if(parameter> reversed){
        return "ok"
    }
    else{
        return "not ok"
        }
    } 
}
console.log(reverseCompare(-23) )
console.log(reverseCompare("-23") )
console.log(reverseCompare(100) )
console.log(reverseCompare('abebe') )
console.log(reverseCompare(72) )
// Question 3
// ● Write a function that takes a positive integer and returns the factorial of the number. Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The factorial of any positive integer x isx*(x-1)*(x-2)*......*1(ex: factorialof4is 4 * 3 * 2 * 1 = 24)
// ○ Test 1: returnFactorial(5) outputs 120
// ○ Test 2: returnFactorial(6) outputs 720
// ○ Test 3: returnFactorial(0) outputs 1

function factorial(params) {
    if(params<0){
        return "enter posetive intiger number "}
        else if(params==0){
            return "1"
        }
        let paramsfact= params
 for(i=1; i<params;i++)  {
    paramsfact =paramsfact*(params-i) }
return paramsfact
    
}  
console.log(factorial(5)) 
console.log(factorial(6))
console.log(factorial(0))

// Question 4 (Meera array)
// ● A Meera array is defined to be an array containing only numbers as its elements and for all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because 2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an array of numbered elements and prints “I am a Meera array” in the console if its array does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a Meera array”
// ○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 * 2 is 10
// ○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
// ○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
// *2 is -6




// Question 5 (Dual array)
// ● Define a Dual array to be an array where every value occurs exactly twice. For example, {1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5 occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two times) Write a function named isDual that returns 1 if its array argument is a Dual array. Otherwise it returns 0.
//  pesdo code 
// declair a function name Dual array that take auargument
// it take 0ne parameter
// if every value occur two times its Dual array
// if is Dual array return 1
// if not return 0
function Dualarray(params) { 
if(!array.isarray(params)){
    return "please provide array only"
    }
if( params.length % 2 != 0){
return 0;
}
for (i=0; i<params.length; i++){

for ( let j =0; j <params.length; j++){
    if (params[i]==params[j]){
        count++;
    }
}
}
}








// Question 6
// ●
// Write a function that takes the number of seconds and returns the digital format clock time as a string. Time should be counted from 00:00:00.
// ○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45 secs.
// ■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
// ■ digitalClock(87000) as "00:10:00" It's 00:10 next day.

// code
function digitalclock(parameter) {
if (typeof(parameter)!="number" || parameter <0){
    return `the value you provide ${parameter} isn't appropriate value`;
}
 let hour = Math.floor(parameter/3600);
 let formatedithour=hour.toString().padStart(2, "0");
 let minute =Math.floor((parameter-(hour*3600))/60);
 let formateditminute = minute.toString().padStart(2,"0");
let second = Math.floor(parameter-((hour*3600)+ (minute*60)));
let formateditsecond = second.toString().padStart(2,"0")
formatedithour= ( hour% 24 ).toString().padStart(2,"0");
let time = `${formatedithour}:{formatedminute}      `

return time;
}
// debugging 
console.log(digitalclock(3661));
console.log(digitalclock(86399));
console.log(digitalclock(3600));
console.log(digitalclock(71));
console.log(digitalclock(86757));
console.log(digitalclock(86757));