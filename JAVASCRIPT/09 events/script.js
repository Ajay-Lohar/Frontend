//function declaration
function greetuser(){
    console.log("hello how are you ")
}

// const sayhello = function (){
//     console.log("hello");
// };
// sayhello();


// const hello = function (){
//     console.log("hello ajay");
// }
// hello();

// const addtion = function (a,b){

//     console.log(a+b);
// }

// addtion(4,5);


// // function expresion 
// const sayhello = function (name){
//     console.log("hello "+name);
// }

// sayhello("ajay");

// //arrow function
// const saybye =()=>{
//     console.log("tata bye bye");
// };
// saybye();


//--------------------------------------------------------------------------------
const greetbtn = document.getElementById("greet-btn");

// 2nd way 

// greetbtn.onclick = greet;

// function greet(){
//     alert("hello greet");
// }

// greetbtn.onclick = function (){
//     alert("hello greet");
// }
// greetbtn.onclick = greet;
greetbtn.onclick = ()=>{
    alert("hello greet");
}