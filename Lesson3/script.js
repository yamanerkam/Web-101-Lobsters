// JavaScript to interact with HTML and CSS
const title = document.getElementById('title');
const description = document.getElementById('description');
const actionButton = document.getElementById('actionButton');

console.log('connected')
// Add an event listener to the button
actionButton.addEventListener('click', function () {
    // Change the text content of the title and description
    title.textContent = "JavaScript in Action!";
    description.textContent = "You just clicked the button, and JavaScript changed this text!";

    // Change the background color of the body
    document.body.style.backgroundColor = '#42f587';

    // Change the button text
    actionButton.textContent = "Clicked!";
});

const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const number = document.getElementById('number')

let numVal = 0
console.log(minus, plus, number)

plus.addEventListener('click', function () {
    numVal = numVal + 1
    number.textContent = numVal
})

minus.addEventListener('click', function () {
    numVal = numVal - 1
    number.textContent = numVal
})