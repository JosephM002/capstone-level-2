const formTag = document.getElementById("front-form");
formTag.onsubmit = handleSubmit;
const suc = document.getElementById("change");

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const values = {
    username: form.elements.username.value,
    password: form.elements.password.value,
    happy: form.elements.planAdvanced1.checked,
    sad: form.elements.planAdvanced2.checked,
  };
  const isChecked2 = values.sad;
  console.log(values.sad);
  values.username.value = "Hello";
  console.log(values.username.value);
  if (isChecked2) {
    update.innerHTML = "<h1>You can do it!</h1>";
  } else {
    suc.innerText = "";
  }
}
