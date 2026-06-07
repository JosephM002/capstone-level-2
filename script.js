const formTag = document.getElementById("image-form");
formTag.onsubmit = handleSubmit;
const output = document.getElementById("output");
const image = document.getElementById("image");
const caption = document.getElementById("fig");

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    "x-api-key": form.elements.key.value,
    limit: form.elements.amount.value,
  };
  const dataString = new URLSearchParams(data);
  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search" + "?" + dataString,
  );
  console.log("https://api.thecatapi.com/v1/images/search" + "?" + dataString);
  const receive = await response.json();
  const funFact = receive;
  console.log(data.limit);
  for (let i = 0; i < data.limit; i++) {
    let imgUrl = [];
    imgUrl.push(funFact[i].url);
    const source = funFact[i].url;
    console.log(source);
    output.innerHTML =
      output.innerHTML +
      '<figure class="lg:flex-row"><img id="image" src="' +
      source +
      '"><figcaption id="fig">' +
      "Cat " +
      (i + 1) +
      "</figcaption></figure>";
  }
}
