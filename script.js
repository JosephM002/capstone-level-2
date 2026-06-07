const formTag = document.getElementById("image-form");
formTag.onsubmit = handleSubmit;
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
  for (var i = 0; i < data.limit; i++) {
    const imgUrl = funFact[i].url;
    image.src = imgUrl;
    const img = document.createElement("img");
    const fig = document.createElement("figcaption");
    caption.innerText = "Cat " + (i + 1);
    img.src = imgUrl;
    img.alt = "Cat";
    img.width = 200;
    img.length = 200;
    document.body.appendChild(img);
    document.body.appendChild(fig);
    fig.innerText = img.alt + " " + (i + 1);
    console.log(fig);
  }
}

function addImage() {
  for (var i = 0; i < data.limit; i++) {
    const imgUrl = funFact[i].url;
    const img = document.createElement("img");
    img.src = imgUrl;
    img.alt = "Cat";
    document.body.appendChild(img);
  }
}
