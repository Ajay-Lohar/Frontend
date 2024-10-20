const button = document.getElementById("btn");

// first  input



button.addEventListener("click",()=>{
    const firstInput = document.getElementById("first-num");

    const secondInput = document.getElementById("second-num");

   console.log(+firstInput.value+ +secondInput.value);   //in console output
   alert(+firstInput.value+ +secondInput.value);         // in alert pop-ups
});

