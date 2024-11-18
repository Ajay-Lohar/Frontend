// to select  an element with given id



//___________________________________________________________________________________________________________
// id 
// const select_H1=document.getElementById("my-h1");
// console.log(select_H1);

// const select_H2=document.getElementById("my-h2");
// console.log(select_H2);



//___________________________________________________________________________________________________________
//className

// const heading = document.getElementsByClassName("heading");

// console.log(heading[0]);

//___________________________________________________________________________________________________________
//tagname


//same as id and className

//___________________________________________________________________________________________________________
//querySelector

// const heading2 =document.querySelector(".heading");//.className ,  #idName
// console.log(heading2);

// const heading3 =document.querySelectorAll(".heading");
// console.log(heading3);


//___________________________________________________________________________________________________________
//change the inner html 
const select_H1=document.getElementById("my-h1");

select_H1.innerHTML ="change the text";


// create a function which will change innerHTML of heading

function changeText(){
  const select_H1=document.getElementById("my-h3");
    

       select_H1.innerHTML ="123234";

}


//ParaGraph change

function changepara(){
    const select_para = document.getElementById("my-para");

    select_para.innerHTML ="Good Afternoon !!";


    select_para.style.backgroundColor ="pink";

}