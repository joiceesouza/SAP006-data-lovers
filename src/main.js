//import { example } from './data.js';
//console.log(example, data);

import data from './data/ghibli/ghibli.js';

/////////////////// Importar Filmes ////////////////////

const films = data.films

const listaImpressa = document.getElementById("listaImpressa")

const showFilme = (filmList) => {
  filmList.forEach(film => {
    listaImpressa.innerHTML += `  
    <li class="cardGhibli"> 
    <img class="card-poster" src=" ${film.poster}">
    <p class="card-titulo"> Title: ${film.title} </p> 
    <p class="card-lançamento"> Release date: ${film.release_date} </p>
    <p class="card-descrição"> Description: ${film.description} </p>    
    <p class="card-diretor"> Director: ${film.director} </p>
    <p class="card-producer"> Producer: ${film.producer} </p>
    <p class="card-avaliação"> Score: ${film.rt_score} </p>
   </li>
  `
  })

}
showFilme(films)


  ///////////////////Importar Personagem ////////////////

const listaPersonagem = document.getElementById("listaPersonagem")
const showPeople = (peopleList, film)=>{
  peopleList.forEach(people=> {
    listaPersonagem.innerHTML += 
    `
    <li class="cardPersonagem">
          <img src=${people.img} class="card-img" alt="ImagemPersonagem" >
          <p class="card-nome"> Personagem: ${people.name}</p>
          <p class="card-filme"> Filme: ${film} </p>
          <p class="card-gênero"> Genero: ${people.gender}</p>
          <p class="card-idade"> Idade: ${people.age}</p>
          <p class="card-specie"> Espécie: ${people.specie}</p>
    </li> 
  `
  })
}

for (let film of films) {
  let peopleList = film.people
  showPeople(peopleList, film.title)
}