// dynamic page manipulation using DOM
// DOM - Document Object Model
// document - global object that represents the webpage
// getElementById() - method to access an element by its id
// innerHTML - property to get or set the content of an element
// javascript can change all the html elements in the page
// javascript can change all the html attributes
// javascript can change all the css
// javascript can remove existing elements and attributes
// javascript can react to All the existing javascripting event
// javascript can create a new html events on the page 
// ByClassName
// ByTagName
// querySelector
// quertSelectorAll

let heading = document.getElementById("demo"); 

let para = document.getElementsByClassName("para");

document.write(heading);
document.write(para);
// get attribute
// set attribute 
let a = document.getElementById("demo").getAttribute("id");
console.log (a);
let b = document.getElementById("demo").setAttribute("class", "democlass");
let d = document.getElementById("demo").style.color = "red";
console.log(d);

//create an element
let newPara = document.createElement("p");
newPara.innerHTML = "This is a new paragraph.";
let par = document.getElementsByTagName("body");
par[0].appendChild(newPara);

console.log(newPara);
 

let removePara = newPara.remove();

// events 
// mouse events - click, mouseover, mouseout
// keyboard events - keydown, keyup
// form events - submit, change
// window events - load, resize, scroll

function onClick(){
    alert("Button clicked!");
}

function onMouseOver(){
    alert("Mouse over!");
} 
function onMouseOut(){
    alert("Mouse out!");
}
function onMouseDown(){
    alert("Mouse down!");
}
function onMouseUp(){
    alert("Mouse up!");
}
function onMouseMove(){
    alert("Mouse move!");
} 
function onDoubleClick(){
    alert("Double click!");
}
function onKeyDown(){
    alert("Key down!");
}
function onKeyUp(){
    alert("Key up!");
}   
function onSubmit(){
    alert("Form submitted!");
}
function onFocus(){
    alert("Input focused!");
}
function onBlur(){
    alert ("input blurred!");
}
function onLoad(){
    alert("Page loaded!");
}
