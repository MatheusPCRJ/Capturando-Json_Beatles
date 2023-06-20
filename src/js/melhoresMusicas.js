import jsonBeatles from "../data/beatles_songs.json" assert {type: "json"};

let divMaisTocadas = document.querySelector("#recebeMaisTocadas");

jsonBeatles.forEach(musicas => {
    divMaisTocadas.innerHTML =
    `
        <ol class="maisTocadas__ol">
            <a href="#">
                <li class="maisTocadas__li">${musicas.tracks[0]}</li>
            </a>
            <a href="#">
                <li class="maisTocadas__li">${musicas.tracks[1]}</li>
            </a>
            <a href="#">
                <li class="maisTocadas__li">${musicas.tracks[2]}</li>
            </a>
            <a href="#">
                <li class="maisTocadas__li">${musicas.tracks[3]}</li>
            </a>
            <a href="#">
                <li class="maisTocadas__li para_esquerda">${musicas.tracks[4]}</li>
            </a>
            <a href="#">
                <li class="maisTocadas__li">${musicas.tracks[5]}</li>
            </a>
            <a href="#">
                <li class="maisTocadas__li">${musicas.tracks[6]}</li>
            </a>
            <a href="#">
                <li class="maisTocadas__li">${musicas.tracks[7]}</li>
            </a>
            <a href="#">
                <li class="maisTocadas__li">${musicas.tracks[8]}</li>
            </a>
            <a href="#">
                <li class="maisTocadas__li">${musicas.tracks[9]}</li>
            </a>
        </ol>
    
    `
})