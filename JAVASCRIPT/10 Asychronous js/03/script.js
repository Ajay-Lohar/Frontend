//'https://dummyjson.com/users/add'
const  fn = document.getElementById("first-name");
const  ln = document.getElementById("last-name");
const data = {
    firstName : `${fn}` ,
    lastName  : `${ln}`,
    age : 25
}

async function sendReq() {
    const req = await fetch ("https://dummyjson.com/users/add",{
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
    

const res = await req.json();
console.log(res);

};
//JSON -> data.json(),JSON,parse()
//js   ->   JSON.stringify(data)
