
// quetion 1

// Question 2
//   ● Write a function that takes a single number as an argument and prints the next 5 numbers in the console. Note: each output should be displayed on a new line.

//  function single (x) { for (let i=
// x+1; i<=x+5;i++){
//     console.log(i+x)
// }
// }
// single(7)

// Question 3
// ● Write a function that takes a single number and prints the sum of the next 10 numbers after the given number.
//  function sumnum (total) { 
//     let sum=0; 1
//     for(let i= total+1; i<=total+10; i++) {
// sum +=i;
// return sum;
// }
// }
// sumnum(11)

// Question 4
// ● Write a function that takes an array as an argument and prints every element of the array on the console.

// age=[10,12,15,16];
// for(i=1;i<=age.lenght;i++){
//     console.log(age(i));}
// console.log(age);

// function sumArray(array)
// {
//     for(let i=0;i<array.lenght;i++)
//     {total +=array[i];}
// }
// return total;
//console.log(total)

// printarryalement(a)

// printarryalement(a)

// Question 5
// ● Write a function that takes an array as an argument and prints the total number of elements found in the array. Hint: use a property of the Array object to solve this question.
// ○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
// ○ Test case 2: Given the array a = ["world", 13], output should be: 2
// function totalarray(arr) {
//     let count= 0;
//     for(let i=0; i<arr.lenth; i++) {count++;}
//     console.log
// }

// // quetion 5 anather way
// function indexsum(array) {
//     if(!Array.isArray(array)){
//         return"must be an array";}  
// return array.length;
// }
// console.log (indexsum([1, "hello",8,44]));
// console.log (indexsum("hello"));

function array(arr) {
   
    for(let i=0;i<= arr.length; i++){
        console.log(arr[i]);
    }
}
array([1,"hellow" ,8,50]);
// Question 6
// ● Write a function that takes an array of numbers as a parameter and logs in the console the sum of all the numbers in the array.
// ○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
// ○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because 3+0

function TotalSum(array) {
 total=0;
 for (let i=0;i<array.length;i++){
    total=total+array[i];
 }
 return console.log(total);
}
 TotalSum([5, 6, 99, 8, 76, 4, 68, 44]);
TotalSum([3,0]);

// Question 7

// ● Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all odd numbers of the array from the total sum of all even numbers and logs the result in the console.
// ○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
// should be: 102
// ■ Sum of odd numbers: 5 + 99 = 104
// ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
// // ■ Difference between total even and total odd numbers: 206 - 104 = 102
function oddeven(array) { 
    let evensum=0;
    let oddsum=0;
    for(let i=0;i<array.length;i++)
        {
    if(array[i]%2==0){
        evensum= evensum+array[i];
        }
        else
    {
    oddsum= oddsum+array[i];
        }
    }
// return console.log (evensum);
// return console.log (oddsum);
return console.log(evensum-oddsum);
}

oddeven([5, 6, 99, 8, 76, 4, 68, 44]);


// Question 8
// ● Write a function that takes an array as a parameter and logs in the console the elements that have
// even indexes only. Notice: this question is not asking you to log elements with even value, but
// elements that are located on even indexes)
// ○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
// should be:
// 5
// 99
// 76
// 68
// ○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
// be:
// 11
// 3
//  car 

function indexes(array) {
    for(let i=0;i<array.length; i++){
        if(i%2==0){console.log(array[i])}
    } 
}
indexes([5, 6, 99, 8, 76, 4, 68, 44])
indexes([11, "sam",3,7,"car"])

// Questions 9 and 10 are dependent on the sampleArray provided below:
// let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
// Question 9
// Write a function that takes the sampleArray as a parameter, removes the last element from the array,
// adds a new value of "32" to the array and prints the new array on the console. Hint: use an array metho



let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
console.log(sampleArray);
sampleArray.pop([44])
console.log(sampleArray)
sampleArray.push("32")
console.log(sampleArray)

// Question 10
// ● Write a function that takes the sampleArray as an argument, sorts the array in ascending order
// and prints the sorted array on the console
// // Use the sort method. Make sure you understand just using the sort() method alphabetically.
// You should use this sorting syntax - sort(function(a, b){return a-b});

let sampleArray1 = [5, 6, 99, 8, 76, 4, 68, 44 ];
sampleArray1.sort((a,b)=>a-b);
console.log(sampleArray1);



// The questions below ( questions 11 to 14) are based on the "evangadiClass" object provided below.
// let evangadiClass = {
// lengthOfCourse: "1 Month",
// website: "https://www.evangadi.com/",
// isChallenging: false,
// topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
// students: 
// {
// name: "Abebe",
// age: 34,
// sex: "M"
// },
// {
// name: "Kebede",
// age: 44,
// sex: "M"
// },
// {
// name: "Almaz",
// age: 27,
// sex: "F"
// },
// {
// name: "Challa",
// age: 22,
// sex: "M"
// },
// {
// name: "Chaltu",
// age: 19,
// sex: "F"
// Question 11}]}
// ● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the
// console
// Use the dot notation "." to call the property you want to change
// function Evangadiclass(n,a,s) { 
//     this.name=n
//     this.age=a
//     this.sex=s 
// ]


// Question 12
// ● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the
// console
 // Use an array method


// let topicsCovered =["HTML","CSS" ,"Media Query","JavaScript"];
// topicsCovered.unshift("bootstrap");
// console.log(topicsCovered);
// evangadiClass.topicsCovered.push("bootstrap")
// console.log('evangadiclass')
// Question 13
// ● Write a function that takes the "evangadiClass" object as an argument and calculates the average
// age of the class. Print the result on the console

// students = [
//  {
//     name: "Abebe", 
//     age: 34,
//     sex: "M"
//     },
//     {
//     name: "Kebede",
//     age: 44,
//     sex: "M"
//     },
//     {
//     name: "Almaz",
//     age: 27,
//     sex: "F"
//     },
//     {
//     name: "Challa",
//     age: 22,
//     sex: "M"
//     },
//     {
//     name: "Chaltu",
//     age: 19,
//     sex: "F"
//     }
// ]
studentage=Student.filter
console.log(students);
console.log(students.age);






// Question 14
// ● Write a function that takes the "evangadiClass" object as an argument and calculates 




// Question 15: 

// Test the divisors of three
// ● Write a function that takes 2 parameters: a low and high number. Your goal is to print all
// numbers (on the console) between low and high, and for each of these numbers print
// whether or not the number is divisible by 3. If the number is divisible by 3, print the word
// "div3" directly after the number.

// psedo
// declare a function name divisors
// it take two parameter name low and high
// if the parameter is >=low and <=high, check if the parameter is divisible by 3,
//    if divisible by 3, print the wor "div3 after each number"l;fkdkofjidj j

function divisors(low,high) { 
for (i=low;i<=high;i++)
    {
     if(i%3==0){console.log(i," is div3")}
    }
}
divisors(2,9);




// Question 16: 

// The famous coding interview question (FizzBuzz)
// ● Write a function that prints in the console the numbers from 1 to 100. But for multiples of

function FizzBuzz(loww,highh) {
    for (i=loww;i<=highh;i++)
        {
         if (i%3==0 && i%5==0)
                {console.log("FizzBuzz")}
            else if (i%3==0)
                {console.log("Fizz")}
            else if (i%5==0) 
                {console.log("Buzz")}
            else 
                {console.log(i)}
        } 
}
FizzBuzz(1,100);


// Question 19: Evens number
// ● An Evens number is an integer whose digits are all even. For example 2426 is an Evens number but 3224 is not. Write a function named isEvens that prints on the console 1 if its integer argument is an Evens number. The function prints 0 otherwise.

//Psedo Code
// Read Input
// Convert number to String
// Initialize an array to store the individual strings
// Iterate over each character in the the string.
// if all digits are integers, return 1, else print 0.

function isEvens(value) {
    valueString = value.toString();
    digit = [];
    for (let i = 0; i < valueString.length; i++)
        {
        digit.push(Number(valueString.charAt(i)))
        }
    console.log(digit.length);
        for (let k = 0; k < digit.lenght; k++){console.log(digit[k]);}
        }
   // }
isEvens(2041);

// const number = 123;
// const numberString = number.toString();
// const digits = [];
// for (let i = 0; i < numberString.length; i++) {
//  digits.push(Number(numberString.charAt(i)));
// }
// console.log(digits); // Output: [1, 2, 3]