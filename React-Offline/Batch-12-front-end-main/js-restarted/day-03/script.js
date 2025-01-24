function sendReq() {
  // get
  const res = fetch("https://dummyjson.com/users");

  res
    .then((data) => data.json())
    .then((obj) => {
      console.log(obj);
    })
    .catch((err) => console.log(err));
}

// async and await

async function getUsers() {
  const res = await fetch("api");
  // const data = axios.get("api")

  const data = await res.json();

  console.log(data);
}
