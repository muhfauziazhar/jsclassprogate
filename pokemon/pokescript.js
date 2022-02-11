async function fetchData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30", {
    method: "GET",
  });
  const json = await response.json();
  const results = json.results;

  for (let i = 0; i < results.length; i++) {
    fetch(results[i].url)
      .then((response) => response.json())
      .then((response) => {
        class DataPokemon {
          constructor(id, name, img, type) {
            this.id = id;
            this.name = name;
            this.img = img;
            this.type = type;
          }

          info() {
            const getDiv = document.getElementById("hasil");
            const newDiv = document.createElement("div");
            newDiv.className = `col border border-dark ${this.type}`;
            newDiv.innerHTML = `<p>${this.id}: ${this.name}</p> <img src="${this.img}"> <p>type: ${this.type}</p>`;
            return getDiv.append(newDiv);
          }
        }

        const dataPoke = new DataPokemon(
          response.id,
          response.name,
          response.sprites.front_default,
          response.types[0].type.name
        );

        console.log(dataPoke);
        dataPoke.info();
      });
  }
}
/*
    const getDiv = document.getElementById("hasil");
    const newPara1 = document.createElement("p");
    const newPara2 = document.createElement("p");
    const newImg = document.createElement("img");
    newImg.setAttribute("src", imgPoke);
    newPara1.innerHTML = `${idData}: ${name}`;
    newPara2.innerHTML = `type: ${typePoke}`;
    getDiv.style.backgroundColor = "yellow";
    getDiv.append(newPara1);
    getDiv.append(newImg);
    getDiv.append(newPara2);
    */
