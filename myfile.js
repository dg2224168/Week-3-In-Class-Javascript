
const heading1 = document.querySelector("h1");
heading1.innerHTML = "This is changed Heading Value!"

const heading2 = document.querySelector("h2");
heading2.innerHTML = "This is changed Heading2 Value!"

let variable1 = "Bob";
let variable2 = 10;
let variable3 = true;

let variableArray = ['Item 2', 'Item 4', 'Item 3'];
let variableArray2 = [1, 2, 3];

let arrayitem = variableArray[1];

const heading4 = document.querySelector('h4');

heading4.innerHTML = variable1;
heading4.textContent = "This is using textContent!";

console.log(variable2);
console.log("Value for console!");


const heading5 = document.querySelector('h5');


let value1 = "Deakin University";

if(value1 === "Deakin University"){
    console.log("That is right!");
    // Show it in HTML output
    heading5.innerHTML = "That is right!";
}
else{

    console.log("That is wrong!");
    // Show it in HTML output

}


function multiply(value1, value2) {
    let result = value1 * value2;
    return result;

}

console.log(multiply(2,3))
// Console for different values.

// Todo: Create addition fucntion
function add(value1, value2) {
    let result = value1 + value2;
    return result;

}

console.log(add(2,3));

heading5.innerHTML = add(2,3);

// Todo: Create substraction function

// alert("You Just Clicked! Outside the function1");

document.querySelector("html").addEventListener("click", function() {
    alert("You Just Clicked!")
})


localStorage.setItem("key1", "value1");
localStorage.setItem("key2", "value2");
localStorage.setItem("key3", "value3");

let value1constant = localStorage.getItem("key1");

heading5.innerHTML = `This value is from localstorage,${value1constant}`;


// Create a button in HTML file


// Then use query selector here to access it

let myButton  = document.querySelector("button");

// Show alert with button click

let imagevalue = document.querySelector("img");

myButton.onclick = () => {


    const src = imagevalue.getAttribute("src");

    if (src === "html5.png") {

        imagevalue.setAttribute("src", "javascript.png");


    }
    else{
        imagevalue.setAttribute("src", "html5.png");
    }


    // alert("Button is clicked! ");
}




// Create  a alert function ....

//assign it to button click






