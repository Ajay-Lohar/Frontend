// //1.get elements by using Id name
// const heading = document.getElementById("my-heading");

// console.log(heading);

// //2.get elements by using class name
// const paras =document.getElementsByClassName("my-para");

// console.log(paras[1]);

// //3.get elements by using Tag name 
// const liElements =document.getElementsByTagName("li");

// console.log(liElements[3]);

// //4.get elements by using Query selector

// const heading2 =document.querySelector("#my-heading");

// console.log(heading2);


// const para2 =document.querySelector(".my-para");

// console.log(para2);

// //5.get elements by using QueryselectoraAll
// const para3 =document.querySelectorAll(".my-para");

// console.log(para3);

//  const heading = document.getElementById("my-heading");

// console.log(heading);

// // innerHTML
// // innerText
// // textContent

// heading.innerHTML="thise is my heading";

// const span1 = document.getElementById("Outer-span");

// console.log(span1.innerHTML);
// console.log(span1.innerText);
// console.log(span1.textContent);


// //parent Ul 
// const unorderList = document.getElementById("my-ul");

// //creat li element
// const listItem = document.createElement("li");

// //add some text
// listItem.innerHTML ="Boxing";

// //appent li to ul
// unorderList.appendChild(listItem);


// //parent header
//const header2 = document.getElementById("header2");

// //creat header element
// const para = document.createElement("h2");

// //add some text
//header2.innerText ="Thise is my para sushant";

//appent li to ul
// header2.appendChild(para);

//style .....................................................................................

const header = document.getElementById("my-heading");

header.style.color ="red";