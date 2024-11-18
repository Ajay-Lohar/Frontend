// console.log("3" + +3);//33  second value auto convert as string 
   
// //   console.log("3" ++3);//error

//   console.log(3+ +"3" );//6  second value auto convert as number 

//   console.log(message);

//   _________________________________________________________________________________________________________

//   // ternary operator

//   let userage =2 ;

//   const message = userage>18 ? " greterthan 18": "less than 18";

//   console.log(message);

//   _________________________________________________________________________________________________________






//   if("ajay"){   //  string  truely value
//   if("")    {   // empty string  falsy value
//   if(+"0")  {   //  string  falsy value
//   if(0)     {   // 0 , -0,+0  is falsy value  


//     console.log("you can vote");
//   }else{
//     console.log("you can not vote");
//   }



//   _________________________________________________________________________________________________________

// const day=2;

// switch(day){ case 1 : console.log("Sunday"); break;
//     case 2 : console.log("Monday"); break;

// }


//   _________________________________________________________________________________________________________


//   functions


//   function declaration
// function greet(){
//     console.log("good morning");
// }

// function bye(){
//     alert("good bye");
// }

// function sayhello(){
//    const name = prompt("hello  ");
//     console.log("hello " +name);
// }
// function sayhello1(){
//     confirm("hello ");
// }

// function q(){
//   const isAbove =   confirm("hare you above 18 ? ");
// // isabove - true/false

//     if(isAbove){
//         console.log("yes you can vote");
//     }else{
//         console.log("no  you can't vote");
//     }

// }

// function inputNumber(){
//     let  number = prompt("enter a number");
       
//     alert(+number + 3);
// }

// function twoNumber(){
//     let  number1 = prompt("enter a 1st number");
//     let  number2 = prompt("enter a 2nd number");
       
//     alert(+number1 + +number2);// + is rquired string number convert to int number
// }



// // Call function
// // console.log(greet()); 

// // greet();

// //   _________________________________________________________Q_1________________________________________________
// // two number input and perform addition on them

// /*
//  function add(a,b){
//      console.log(a+b);
//      return a+b ;
//   }
//  add(1,3);
//  consol.log(add(1,3));
// */

// //   ____________________________________________________________________________________________________________



// // random number generate

// // Math.random()*10 ;
// // Math.random()*20 ;

// function randomName(){
//     const names = [ "ajay","ashish","kirtiraj","Sid","ganesh","sushant","j","u","o","p"];

//     const random = Math.random()*10;

//     const randomName =Math.floor(random);

//     alert(names[randomName]);

// }

// function maxnumber(){
//     const num1 = prompt("enter 1 number ");
//     const num2 = prompt("enter 2 number ");
//     const num3 = prompt("enter 3 number ");

//     console.log((num1 >num2 || num1 > num3) ?(num2>num1 ||num2 >num3)? num2 : num3 );//wrong
// }

