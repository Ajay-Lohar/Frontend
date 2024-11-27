
const cityInput = document.getElementById("my-city");
const cityDisplay = document.getElementById("display-city");
const tempDisplay = document.getElementById("display-temp");


async function searchCity(){
const city = cityInput.value;

const date = new Date();

const year = date.getFullYear();//2024
const month = date.getMonth()+1; //10 // as javaScript month start with 0
const day = date.getDate();



const data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${year}-${month}-${day}/?key=MA85H3QBHK3FGLU79LG3XRJM7`);



const res = await data.json();

console.log(res);

cityDisplay.innerHTML = res.resolvedAddress;
tempDisplay.innerHTML = res.currentConditions.temp;



};