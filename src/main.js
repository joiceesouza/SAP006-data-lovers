//import { example } from './data.js';
//console.log(example, data);

//import { dataghibli } from './data.js';

import { ordemAlfabetica, getPeople, buscarName } from './data.js';

import data from './data/ghibli/ghibli.js';

// Importar Filmes//

const films = data.films
const people = getPeople(films)


const listaImpressa = document.getElementById("listaImpressa")

const showFilme = (filmList) => {
  listaImpressa.innerHTML = ""
  filmList.forEach(film => {
    listaImpressa.innerHTML +=
      `  
    <li class="cardGhibli"> 
    <div class="cards">
    <div class="flip">
    <section class="front-card">
    <img class="card-poster" src=" ${film.poster}">
    </section>
    <section class="back-card">
    <p class="card-titulo"> ${film.title} </p> 
    <p class="card-lançamento"> Release date: ${film.release_date} </p>
    <p class="card-descrição"> Description: ${film.description} </p>    
    <p class="card-diretor"> Director: ${film.director} </p>
    <p class="card-producer"> Producer: ${film.producer} </p>
    <p class="card-avaliação"> Score: ${film.rt_score} </p>
    </section>
    </div>
    </div>
   </li>
  `
  })

}
showFilme(films)


//Importar Personagem //

const listaPersonagem = document.getElementById("listaPersonagem")
const showPeople = (peopleList) => {
  //listaPersonagem.innerHTML = ""
  peopleList.forEach(people => {
    listaPersonagem.innerHTML +=
      `
    <li class="cardPersonagem">
    <div class="cardsPersonagens">
    <div class="flipPersonagens"> 
    <section class="front-personagens">
          <img class="card-poster" src=" ${people.img}">
          </section>
          <section class="back-personagens">
          <p class="card-personagens">${people.name}</p>
          <p class="card-filme"> Filme: ${people.movie} </p>
          <p class="card-gênero"> Genero: ${people.gender}</p>
          <p class="card-idade"> Idade: ${people.age}</p>
          <p class="card-specie"> Espécie: ${people.specie}</p>
          </section>
          </div>
          </div>
         
    </li> 
  `
  })
}
showPeople(people)


//SEARCH//
const buscarNomes = document.getElementById("search");
function filtroPesquisa(event) {
  const charactersByName = buscarName(data.films, event.target.value);
  showFilme(charactersByName);
}
buscarNomes.addEventListener("keyup", filtroPesquisa);



//ORDENAR //

const ordenar = document.querySelector(".order");
function ordemFilme(event) {
  const order = ordemAlfabetica(data.films, event.target.value)
  showFilme(order);
}
ordenar.addEventListener("change", ordemFilme);


//FILTRO FILME_PERSONAGEM//

const filtrarMenu = document.getElementById("filterMenu")
filtrarMenu.addEventListener("change", function (event) {
  let filmeMenu = event.target.value
  if (filmeMenu == "Filmes") {
    listaPersonagem.innerHTML = ""
    showFilme(films)
  }
  else if (filmeMenu == "Personagem") {
    listaImpressa.innerHTML = ""
    showPeople(people)
  }
  else {
    listaImpressa.innerHTML = ""
    listaPersonagem.innerHTML = ""
    showFilme(films)
    showPeople(people)
  }
});

//FILTRO DIRETOR//

const filterFilm = document.getElementById("select_id")
filterFilm.addEventListener("change", function (event) {
  listaImpressa.innerHTML = ""
  let director = event.target.value

  if (director == "todos") {
    showFilme(films)
  }
  else {
    let filteres = films.filter(film => film.director == director);
    showFilme(filteres)
  }
})

//FILTRO GENERO//

const femeleMale = document.getElementById("genero_id")
femeleMale.addEventListener("change", function (event) {
  listaPersonagem.innerHTML = ""
  for (let filme of films) {
    let peopleS = filme.people
    let gender = event.target.value
    let filterGenero = peopleS.filter(peopleS => peopleS.gender == gender);
    showPeople(filterGenero, filme.title)

  }
})


//CALCULO AGREGADO//

let printCuriosidade = document.getElementById("curiosidades_id")
let personagens = []
for (let i = 0; i < films.length; i++) {
  personagens.push(films[i].people.length)
}

const mediaPersonagens = personagens.reduce((a, b) => (a + b)) / personagens.length
const totalPersonagens = personagens.reduce((a, b) => (a + b))

printCuriosidade.innerHTML =
  `<div class="class_id">
  <h4>Curiosidades</h4>
  <br>
  <p class="soma">A soma de todos os personagens é: ${totalPersonagens}</p>
  <br>
  <p class="media"> A média de personagem por filme é: ${mediaPersonagens}</p>
  <br>
  <a  href ="https://pt.quizur.com/tag/b4I-studio-ghibli"  target ="_self">Quiz e Testes de Personalidade sobre Studio Ghibli. Clique aqui!</a>
  </div>`
