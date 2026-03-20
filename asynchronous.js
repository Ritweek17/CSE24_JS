// Asynchronous JavaScript

let promise = new Promise((resolve, reject) => {
let success = true; // Simulating success or failure
if (success) {
    resolve("Operation successful!");
} else {
    reject("Operation failed!");
}
});
promise.then(result => console.log(result)).catch(error => console.error(error));

// async / await 
async function getData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    console.log(data);
}
getData();

//Fetch API

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

//Error handling with try/catch

try {
    var x = y + 10; // This will throw an error because y is not defined
} catch (error) {
    console.log(error.message); // Output: y is not defined

}

// local storage

localStorage.setItem('name', 'John Doe');

// Retrieve data from local storage

let name = localStorage.getItem('name');
console.log(name); // Output: John Doe

// Remove data from local storage

localStorage.removeItem('name');

// Clear all data from local storage

localStorage.clear();

// store objects in local storage

var user = {
    name: 'Alice',
    age: 30
};
localStorage.setItem('user', JSON.stringify(user));

// Retrieve object from local storage

var retrievedUser = JSON.parse(localStorage.getItem('user'));
console.log(retrievedUser); // Output: { name: 'Alice', age: 30 }   

