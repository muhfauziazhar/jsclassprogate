async function fetchData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu", {
    method: "GET",
  });
  const json = await response.json();
  const idPika = json.id;
  const namePika = json.name;
  const imgPika = json.sprites.front_default;
  const typePika = json.types[0].type.name;

  const getDiv = document.getElementById("hasil");
  const newPara1 = document.createElement("p");
  const newPara2 = document.createElement("p");
  const newImg = document.createElement("img");
  newImg.setAttribute("src", imgPika);
  newPara1.innerHTML = `${idPika}: ${namePika}`;
  newPara2.innerHTML = `type: ${typePika}`;
  getDiv.style.backgroundColor = "yellow";
  getDiv.append(newPara1);
  getDiv.append(newImg);
  getDiv.append(newPara2);
}
