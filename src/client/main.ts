let saisie = document.createElement("input");
saisie.setAttribute("type" , "text");
let button = document.createElement("button");
button.innerText = "envoyer";
document.body.append(saisie, button)

button.addEventListener("click", async () => {
  let saisieValue = saisie.value;
  const res = await fetch(`http://localhost:3030/button/${saisieValue}`)
  const message = await res.text()
  const p = document.createElement("p");
  p.innerText = message;
  document.body.append(p)
})