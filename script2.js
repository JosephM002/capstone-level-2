const formTag2 = document.getElementById("login-form");
formTag2.onsubmit = handleSubmit;
const last3 = document.getElementById("tablelast3");
const first3 = document.getElementById("tablefirst3");
const email3 = document.getElementById("tablehandle3");

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    username: form.elements.username.value,
    password: form.elements.password.value,
  };
  const dataString = JSON.stringify(data);
  console.log(dataString);
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: dataString,
  });
  const receive = await response.json();
  if (receive.firstName === "undefined") {
    console.log(receive.firstName);
    console.log("something went wrong");
  } else {
    first3.innerText = receive.firstName;
    last3.innerText = receive.lastName;
    email3.innerText = receive.email;
    greetUser(receive.firstName);
  }
}

function greetUser(name) {
  console.log("Hello " + name + "!");
}
