const inputBox =document.getElementById("my-input");
const parent = document.getElementById("my-ol");
let todos = 0;

function addLi(){
    const newLi =document.createElement("li");
       
    if(!inputBox.value){
        alert("enter name");
        return;
    }
    newLi.id=todos;
    
    newLi.innerText=`${inputBox.value}
        <button onclick="remove(${todos})">Delete me !</button>`;
        todos++;
    
    parent.appendChild(newLi);
    inputBox.value="";
}
