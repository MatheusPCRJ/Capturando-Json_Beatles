import listaBeatles from "../data/beatles_songs.json" assert {type: "json"};
const musicas = listaBeatles;
const card = document.getElementById("apareceCard");

musicas.forEach(elemento => {
    card.innerHTML += 
    `
        <div id="descritivoCard" class="descritivoCard">   
            <div class="descritivo__musicas">
                <p class="descritivo__titulo">  ${elemento.name}</p>
                <img src="${elemento.cover}">
            </div> 

            <li class="listaItens"> ${elemento.tracks.map(item => {
                return item + "<br>";
                }).join("")}
            </li> 

        </div>  
    

    `
})