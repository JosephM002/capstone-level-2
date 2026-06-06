const formTag3 = document.getElementById("form3");
const suc3 = document.getElementById("success");
const saved3 = document.getElementById("saved");
formTag3.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  try {
    const data = {
      id: form.elements.cats.value,
      flip: form.elements.switch.checked,
      number: form.elements.number.value,
    };

    console.log(data.number);
    const isFlipped = data.flip;
    if (isFlipped) {
      localStorage.setItem("favorite", suc3.innerText);
    }
    let numberArray = [];
    suc3.innerText = "";
    for (var i = 0; i < data.number; i++) {
      const dataString = new URLSearchParams(data);
      const response = await fetch(
        "https://meowfacts.herokuapp.com/" + "?" + dataString,
      );
      const receive = await response.json();
      const funFact = receive.data[0];
      numberArray.push(funFact);
    }
    for (var i = 0; i < data.number; i++) {
      suc3.innerText = suc3.innerText + "\n" + numberArray[i];
    }
    if (isFlipped) {
      suc3.innerText = "";
      saved3.innerText = "";
      saved3.innerText = localStorage.getItem("favorite");
    } else {
      console.log("no");
    }
  } catch {
    console.log("Error!");
    suc3.innerHTML = "<h1>There may have been an error. Please try again.</h1>";
  }
}
