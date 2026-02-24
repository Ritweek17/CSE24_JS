var num= 10 ;
console.log(num);
console.log(typeof(num));

num=false;
console.log(num);
console.log(typeof(num));

num=null;
console.log(num);
console.log(typeof(num));

num=undefined;
console.log(num);
console.log(typeof(num));

var sayHello = function(){
    alert("Hello World!");
}
//function expression
var numberArray = [1,2,3];
//array literal
var animals = new Array("dog","cat","mouse");
//object literal
var person = {
    name: "John",
    age: 30,
}

//symbol
const sym1 = Symbol(4);
console.log(sym1);
console.log(typeof(sym1));
const sym2 = Symbol(4);
console.log(sym2);
console.log(typeof(sym2));
if(sym1 === sym2){
    console.log("sym1 and sym2 are equal");
}else{
    console.log("sym1 and sym2 are not equal");
}
