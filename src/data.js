
//SEARCH//

export const buscarName = (data, condition) => {
  const resultadoBusca = data.filter(n => n.title.toLowerCase().includes(condition.toLowerCase()));
  return resultadoBusca;
};


//ORDENAR//
export const ordemAlfabetica = (data, order) => {
  if (order === "crescente") {
    return data.sort((a, z) => a.title > z.title ? 1 : -1)
  } else if (order === "decrescente") {
    return data.sort((a, z) => a.title > z.title ? -1 : 1)
  } return data
};

//FILTRO//

export const getPeople = films => {
  let people = []
  for (let film of films) {
    const chars = film.people.map (function (char){
      char.movie = film.title
     return char
    })
    people = people.concat(film.people)  //concat cria um novo array unindo todos os elementos que foram passados como parâmetro, na ordem dada, para cada argumento e seus elementos (se o elemento passado for um array). //
  }
  return people
}
