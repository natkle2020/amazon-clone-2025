// var fristname = "nardos"
// var lastname ="gidey"
// var fullname=fristname +' '+ lastname    
// console.log(fullname )

// // how to declare function on jav scripit

// function nardos() { 
// console.log("number"); 
// console.log ("female");
// console.log ("male")}

// nardos() 

// question 1
function myfrist(params) { 
console.log ("Hello")
}
myfrist()

// question 2
// Define a function called mySecond that takes a parameter and prints the parameter on console

var mysecond =(x)=>{console.log(x)
}
mysecond(123)

// question 3
// Define a function called myThird that takes a parameter and prints the parameter on the console. But, it uses mySecond function to print the parameter on the console
function myThird(a) {
    mysecond(a)
}

myThird( "Nardos")

// question 4
// Write a function named myFourth that takes an array as a parameter and prints only the first value of the array on the console.
// psedo code
// declare function name  myFourth
// called the function 

let myFourth =(a) => console.log("a")

myFourth(print)

// question 5  myfifth
//  declair a fuction name myfifth
// inpute aparameter name addation
// check weather the parameter is number
// if yes add the number inside the Array
// if not please inter numerical value

function myfifth(addation) { 
if(typeof(addation[0])=="number"&& typeof(addation[1])=='number') {return addation[0] +addation[1];
    }
else{
    return"please enter numerical value"
}} 
console.log( 4+3)
// diffrent method
// Write a function named myFifth that takes an array with two numbers in it as a parameter and prints the sum of the two numbers on console
// psedo code
// declare function  named myFifth
// input two parameter named num1 num2
// add the two argument on console
// calling the function

function myFifth(num1, num2)  {if
    (num1,num2=='Number'){
        return c}
    }
    console.log (3+7)
// question 6

// Write a function that takes an integer minutes and converts it to seconds.
// psedo code
// declear a function name time
// input one parameter name min
// the numeber must be greater 0r equal to 0
// the number must be intiger
// if yes multiplay that number with 60 and return the result
// if the user entered non intiger reture error"

function time(min) { 
    if(
        min>0&& typeof min=='number') { 
        return min*60
        }
    else if (min<0){
        return"you enter a negative number.please enter a positive number"}
}
console.log (time(10))
console.log (time(-1))

// question 7
// Create a function that takes a number as a parameter, increments the number by +1 and returns the result.

// psedo code
// declair function name increment
// it take 0ne parameter name num
// if num is grater than or equal ti 0 turn the result num+1
// if num is less than 0 turn "please inter posetive number"
// ivoke the function

function increment(num) {
if(num>=0){
    return num+1
}
 else if (num<0) {
    return "please inter posetive number"
  }  
}
console.log(increment(10))
console.log(increment(-10))

// question 8
// Write a function that takes the base and height of a triangle and returns its area.
// psedo code
// declair the function name triangle
// it take 2 parameter name b for the base h for height
// if the parameter are greater than zero turn the result a=b*h/2
// if the parameters are negative and not number return Error
// if the user inter string return plase inter posetive number
function triangle(b,h) {
if(b,h >0){
    return A=b*h/2}
  else if (b,h <0 && b,h!=="number") {
    return "error" } 
}
// debegging
console.log(triangle(5,7))
console.log(triangle(-4,-7))
console.log(triangle(5,"7"))
console.log(triangle(5,"abebe"))
// question 9
// Create a function that returns the total number of legs of all the animals. In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species (chickens = 2 legs, cows =, 4 legs, pigs = 4 legs). Remember: the farmer wants to know the total number of legs and not the total number of animals.

// total Number of leg 
// chiken= 2(leg)*parameter
// cows=4(leg)*parameter
// pigs=4(leg)*parameter
// total number of animal=
 // total number of chiken/2
// total number ofcows/4
// total number of pigs/4



// psedocode
// declair the function name total leg
// it takes 3 parameter c for the chiken co for cows p for pigs
// if the parameter c for the chiken leg is even  number result cleg =2leg*c and parameter co and p is greter than 4 and even number turn the result co,p *4leg

// if the total leg c for chiken 2leg*c turn the number of animal divided by 2 and the parameter co,p *4leg return the result by dviding co,p/4

// if the leg of c is 2*even number and the leg of co,p is 4*co,p turn the result total leg=c+co+p

// if the total animal of c  2*even/2 and the total animal of co,p *4leg/4 turn the result total animal=c+co+p 

function totalleg(c,co,p) {
    if(c,co,p =="number") {
        return  "c*2 + co*4 +p*4"
    }
   else if (c,co,p <0) {
    return "plase inter posetive number"
   }
}

console.log(totalleg(8,2,4))

// / question 10
// Create a function that takes an array containing only TWO numbers as a parameter and returns a value that is 3 times the first element of the array.

// psedocode

// declair the function name multiplay
// it takes 2 parameter num1 num2
// if num1 and num2 is equal to the number turn the result num1 num2 *3
// if the user inter String turn please inter Number
// call the function

function multiplay(num1,num2) {
if(num1,num2=="number"){
    return "num1 ,num2 *3"
}
//  else if(num1,num2!=="number"){ return "please inter number"}
}
console.log(multiplay (2,3))
console.log(multiplay ("abebe"))

// question 11

// Create a function that returns true when num1 is equal to num2; otherwise return false
// psedo code
// declair the function name equal
// it takes two parameter names num1 and num2
// check weather the two argument are equal
// if num1 is equal to num2 turn the result true
// if num1 and num 2 is string or not equal turn the result false
// invoke the function

function equal(num1, num2) {
if (num1==num2) 
{return true;} 
else{ 
    return false;
}
}
console.log(equal(3,4))
console.log(equal(3,3))

// question 12
// Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

// psedo code
// declare a function named divisor
// input one parameter
// check weather the given argument is divisible by 100 
// if yes reture true
// if not reture false
// invoke the function

function divisor (a) {
    if (a%100==0){
    return true;}
    else if(a%100>0 ){
        return false;
    }
} 
console.log(divisor (300))
console.log(divisor (250))

// question 13
// Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.
// psedo code
// declare a function name evenorodd
// input one parameter to be checked named num
// chech weather the argument is divisible by 2
// if yes reture even
// if not reture odd
// invoke the function
// function oddoreven
function evenorodd(num) {
if(num%2==0) { return 'even'; }
else {  return 'odd';}
}
console.log(evenorodd(6))
console.log(evenorodd(3))

// question 14
// Create a function that returns
// ○ “Invalid score” if score is above 100 or score is a negative number
// ○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
// ○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
// ○ “Grade C” for any score below 79
// // 
// pesedo code
// dclaire the function name “Grade
// it takes 4 parameter
// if the argument is greter than 100 or negative number turn the result Invalid
// if the score is greater than or equal to 90 and less than or equal to 100 turn the result grade A
// if the score is greater than or equal to 80 and less than or equal to grade B
// if the score is less than 79 turn the result grade C
// ivoke the function


function grade(g) {
    if(g>100 || g<0) { return "Invalid";}
    else if (g>=90 && g<=100) {
        return "grade A"}

else if (g>=80 && g<=89) {
        return "grade B"}

else if ( g<=79) {
        return "grade c"} }


console.log(grade(-45))
console.log(grade(69))
console.log(grade(86))
console.log(grade(105))
console.log(grade(98))