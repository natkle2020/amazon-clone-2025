console.log("jQuery Testing");
// Question 1:
// The following three questions are based on the two paragraphs under the section which says,
// "For Question 1".
// 1.1. Select the element with an id of "sample1" using jQuery.

let sample =$("#sample1") 

// 1.2. Print the element itself on the console upon page refresh.
console.log(sample);

// 1.3. Print the content of the element on the console upon page refresh. Use jQuery
// to select the content of the element

let sample1 = $("#sample1").text();

console.log(sample1);

// Question 2:
// The following questions are based on the HTML code found under the section labeled "For
// question 2".
// 2.1. Select the element with an ID of "techCompanies" and display it on your console.

let tech = $("#techCompanies")
console.log(tech);

// 2.2. How many tech companies are listed under the ul element with an id
// of "techCompanies"?
let companies = $("#techCompanies, li").length;

console.log(companies);

// 2.3. Select all elements with a class of "red" and display them on the console.
let color = $('#techCompanies .red')
console.log(color);

// 2.4. Create a new li HTML element with a content of "Facebook" and display it on console
let face =$("<li></li>")

face.text("facebook")
console.log(face.text());


// 2.5. Give the newly created element a class of "blue" using jQuery

// let clacolor = $("#techCompanies")
face.addClass("blue");

 console.log(face);

// 2.6. Append the newly created element next to the the "Sony" <li> element
let add = $("#techCompanies")
add.append(face)
console.log(add);

// 2.7. How many of the tech companies are labeled blue? Find the result using jQuery and
// display the result inside the "blueCompanies" div.
let labeled = $(".blue").length
 console.log(labeled);
//  let create =$("<p><p/>")
// console.log(create);
// // to show 
// $("#blueCompanies").html ("7")

let blueCompanies = $("#blueCompanies");
blueCompanies.append(labeled);
console.log(blueCompanies);

// Question 3:
// A form with two text fields is provided under the section which says "For question 3". Write a
// jQuery code which takes the values of the two fields, checks if they are number values and
// calculate the sum and average of the two numbers.
// 3.1. Display the result on the console
// 3.2. Display the result underneath the form
// 3.3. If any of the numbers provided is not a number, display a message that says "Please
// enter numerical values only" underneath the form

$("#adder").on("submit", function(e) {
e.preventDefault();
let inputone =$("input[name='frist-value']").val();
let inputtwo =$("input[name='second-value']").val();
let sum = $("#sum");
// valiadation
if (!$.isNumeric(inputone)|| !$.isNumeric(inputtwo)){
return sum.text("please enter numeric value");
}
let total =parseFloat(inputone) + parseFloat(inputtwo);
let average = total /2;
let add =`sum ${total} average:${average}`;
sum.text(add);
})


// Question 4:
// Create an HTML form which asks users to provide their First name, Last name and Email
// address. All the fields should be labeled as required. Once the user submits, write a JavaScript
// function that checks if all the fields are provided. If not, it should show an error message above
// the form.
// If the user provides all the values, hide the form input fields, and display all the values provided
// by the user on the browser.
let form=$("#adder2").on("submit", function (e) {
    e.preventDefault();

let fname = $("input[name ='First-Name']").val();
let lname = $("input[name= 'Last-Name']").val();
let email =$("input[name ='Email-address']").val();

let sum2=$("#Result")
// validation on 
if ($.isNumeric(fname)|| $.isNumeric(lname) || $.isNumeric(email) ){
    return sum2.text("error")
}

sum2.html(`first name ${fname} <br> last name ${lname} <br> email ${email}`);
let el = $("#adder2")
form.hide();


} )



