function myfunction() {
    document.write("Hello World");
}
function sayHello(){
    let nam = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    document.write("Hello " + nam + ", you are " + age + " years old.");
}
let x = 7 ;
let y = 8;
let add = (x,y) => {
    return x+y ;
}
document.write (add (x ,y));



    


