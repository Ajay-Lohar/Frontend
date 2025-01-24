// promises

function sendReq() {
  const resPromise = fetch("https://dummyjson.com/users/2");

  resPromise
    .then((data) => data.json())
    .then((obj) => {
      // console.log(obj);
      console.log(obj.firstName);
      console.log(obj.lastName);

      document.getElementsByTagName(
        "h1"
      )[0].innerHTML = `Welcome back ${obj.firstName} ${obj.lastName}`;
    })
    .catch((error) => console.log(error));
}
