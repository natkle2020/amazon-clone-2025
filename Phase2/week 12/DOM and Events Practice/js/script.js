console.log("testing");
// Question 1: The following three questions are based on the two paragraphs under the
// section which says "For Question 1" in the index.html file.
// 1.1 Select the element with an id of "sample1".
console.log("Question1");

let frist = document.getElementById("sample1");

// 1.2 Print the element itself on the console upon page refresh.
console.log(frist);

// 1.3 Print the content of the element on the console upon page refresh
// Set the content
console.log(frist.innerHTML);    
console.log(frist.textContent); 
//  textContent with out element
//  console.log(frist.innerText) visible 
// Question 2: The following questions are based on the HTML code found under the
// section labeled "For question 2".

// 2.1 Select the element with an ID of "techCompanies" and display it on your
// console. (Do not use "querySelector" for this question)
// let select = document.getElementById("techCompanies")
// console.log(select);
// 2.2 Use "querySelector" to select the element with an ID of "techCompanies"
//  and display it on your console.
let selector = document.querySelectorAll("techCompanies")
console.log(selector);
// 2.3 How many tech companies are listed under the ul element with an id of
// "techCompanies"? Use "querySelectorAll" to count the total.
let tech = document.querySelectorAll("#techCompanies li")
console.log(tech.length);

tech.innerHTML= "tech.length"

// 2.4 Select all elements with a class name of "red" and display them on the
// console. Use both "querySelectorAll" and "getElementByClass"
let color =document.getElementsByClassName("red")
console.log( color);

let color1 = document.querySelectorAll(".red")
console.log( color1);

// 2.5 Create a new li HTML element with a content of "Facebook" and display it
// on console

let li =document.createElement("li")
console.log(li);

li.textContent="Facebook"

// 2.6 Give the newly created element a class of "blue" using JavaScript

li.classList.add("blue")

// 2.7 Append the newly created element next to the the "Sony" li element

let parent = document.getElementById("techCompanies")
parent.append(li)
 console.log(parent);

// 2.8 How many of the tech companies are labeled blue? Find the result
// using JavaScript and display the result inside the "blueCompanies" div.


// console.log(blueall.length);
let blue12 =document.getElementsByClassName("blue")
console.log(blue12.length);

let blue =document.getElementById("blueCompanies")
let save = document.createElement("P")
save.innerHTML=blue12.length
blue.appendChild(save)

// let blue =document.getElementsByClassName("blue")
// let blue1 =document.getElementById("blueCompanies")
// let save =document.createElement("p")
// save.innerHTML=blue.length
// blue1.appendChild(save) 

// Question 3:
// Change the background color of the page to light-blue (#99ecff) when clicked on the text
// that says "Yes". If there is a background color set already, change it to none when clicked
// on "No"
// Hint: First, write two functions to alter the backgroundColor of the page. One to add a
// background color, another to remove. Then, select the "yesBackground" or
// "noBackground" element and bind the selected element with the click event. Finally,
// attach the function you wrote to alter the background color when the respective element
// is clicked on.
//  let backgroundColor= "#99ecff"
// let bground = document.getElementById("yesBackground")
// let bground2 = document.getElementById("noBackground")
// // bground.onclick=backgroundColor("#99ecff")

// // bground2.onclick=backgroundColor("")
// bground.addEventListener("click",yes)
// function yes(params) {
// document.body.style.backgroundColor="99ecff"
//     }
// bground2.addEventListener("click",no)   
// function no(params) {
// document.boby.style.backgroundColor=" "
    
// }

let bground = document.getElementById("yesBackground")
let bground1 =document.getElementById("noBackground")
bground.addEventListener("click",yes)
function yes(params) {
document.body.style.backgroundColor="#99ecff"
}
bground1.addEventListener("click",no)
function no(params) {
document.body.style.backgroundColor=""
}
// Question 4:
// A form with two text fields is provided under the section which says "For question4".
// Write a JavaScript code which takes the values of the two fields, checks if they are
// number values and calculate the sum of the two numbers.
// 1. Display the result on the console
// 2. Display the result underneath the form
// 3. If any of the numbers provided is not a number, display a message that says
// "Please enter numerical values only" underneath the form


// let form =document.getElementById("adder");
// let fristvalue =document.getElementsByName("First-value")[0].value
// let secondvalue  =document.getElementsByName("second-value")[0].value
// let submitdisplay =document.getElementById("sum");

// form.addEventListener( "submit", adder);
// function adder (e) {
//     e.preventDefault()
// let error= "";
// let thesum ="";
// if (!fristvalue ==number ) {
//     error.push("Please enter numerical values only") }
// if(!secondvalue== number){
//     error.push("Please enter numerical values only")
// }
// if (fristvalue < o){
//     error.push("please put posetive number")
// }
// if(secondvalue<0 ) {
//     error.push("please put posetive number")
//     }
//     thesum = fristvalue + secondvalue
//     submitdisplay.text = `sum:${thesum}`;
// }
let form =document.getElementById("adder");
let fristvalue =document.getElementsByName("First-value")[0].value;
let secondvalue  =document.getElementsByName("second-value")[0].value;
let submitdisplay =document.getElementById("sum");

form.addEventListener( "submit", adder);
function adder (e) {
    e.preventDefault()
let thesum =""
let fristNum=Number(fristvalue)
let secondNum =Number(secondvalue)
if(isNaN(fristvalue)|| isNaN (secondvalue)){
return submitdisplay.innerText = "must be number";}
thesum = fristNum + secondNum;
submitdisplay.text = `sum:${thesum}`;

}
