import {buscarName, ordemAlfabetica} from '../src/data.js';
import {ordemPersonagem} from '../src/data.js';
import {getPeople} from '../src/data.js';
import {filterDirector} from '../src/data.js';
import {filterGender} from '../src/data.js';
import {calcAgregado} from '../src/data.js';


const arrayPeople = [
  {
    "name": "Pazu",
    "gender": "Male",
  },
  
    [{
      "name": "Satsuki Kusakabe",
      "gender": "Female",
    }],

   [{
      "name": "Kiki",
      "gender": "Female",
    }]
]

const diretor = [
  { "director": "Hayao Miyazaki" },
  { "director": "Isao Takahata" },
  { "director": "Gorō Miyazaki" }
];

const arrayBusca = [
  { 
    "title":"Kiki's Delivery Service"},
  { 
    "title":"My Neighbor Totoro"},
  { 
    "title": "Castle in the Sky"}
];


describe("filterDirector", ()=>{
  it("filtered deveria ser uma função", () =>{
    expect(typeof filterDirector).toBe("function")
  })

  it('retornar o diretor Isao Takahata', () => {
    const filDirector = filterDirector(diretor,"Isao Takahata")
    expect(filDirector).toEqual([{ "director": "Isao Takahata" }])
  });
});

describe("buscarName", ()=>{
  it("buscarName deveria ser uma função", () =>{
    expect(typeof buscarName).toBe("function")
  })

  it("Deveria buscar os filmes pelo titulo", () =>{
    const buscarFilm = buscarName(arrayBusca,"Kiki")
    expect(buscarFilm).toEqual([{"title":"Kiki's Delivery Service"}])
  })  
});


describe("ordemAlfabetica", ()=>{
  it("ordemAlfabetica deveria ser uma função", () =>{
    expect(typeof ordemAlfabetica).toBe("function")
  })

  it("Deveria retornar title ordenado A-Z", () =>{
    const orderAz = ordemAlfabetica([{ "title": "Pom Poko" },
    { "title": "Tales from Earthsea"},
      { "title": "Castle in the Sky" }], "crescente")
      expect(orderAz).toEqual([{ "title": "Castle in the Sky" },
      { "title": "Pom Poko" },
      { "title": "Tales from Earthsea", }])  
  })

  it("Deveria retornar title ordenado Z-A", () =>{
    const orderZa = ordemAlfabetica([{ "title":"Castle in the Sky" },
    { "title": "Tales from Earthsea"},
      { "title": "Pom Poko" }], "decrescente")
      expect(orderZa).toEqual([{ "title": "Tales from Earthsea"},
      { "title": "Pom Poko" },
      { "title": "Castle in the Sky" }])  
  })

});

describe("ordemPersonagem", ()=>{
  it("ordemPersonagem deveria ser uma função", () =>{
    expect(typeof ordemPersonagem).toBe("function")
  }) 

  it("Deveria retornar name people ordenado A-Z", () =>{
    const orderPeopleAz = ordemPersonagem([{"name": "Pazu"},
    {  "name": "Satsuki Kusakabe"},
      {"name": "Kiki" }], "crescente")
      expect(orderPeopleAz).toEqual([{"name": "Kiki"},
      { "name": "Pazu" },
        { "name": "Satsuki Kusakabe"}])  
  })

  it("Deveria retornar name people ordenado Z-A", () =>{
    const orderPeopleZa = ordemPersonagem([{"name": "Pazu"},
    { "name": "Kiki"},
      {"name": "Satsuki Kusakabe"}], "decrescente")
      expect(orderPeopleZa).toEqual([{"name": "Satsuki Kusakabe"},
      { "name": "Pazu" },
        { "name": "Kiki"}])  
  })
});

describe("getPeople", ()=>{
  it("getPeople deveria ser uma função", () =>{
    expect(typeof getPeople).toBe("function")
  })
});

describe("filterGender", ()=>{
  it("filterGender deveria ser uma função", () =>{
    expect(typeof filterGender).toBe("function")
  })

  it("Deveria retornar Pazu, personagem masculino", () =>{
    const genero = filterGender(arrayPeople, "Male")
    expect(genero).toEqual([{ "gender": "Male",
    "name": "Pazu", }])
    
  })
});

describe("calcAgregado", ()=>{
  it("calcAgregado deveria ser uma função", () =>{
    expect(typeof calcAgregado).toBe("function")
  })

  it("Deveria retornar o calculo agregado", () =>{
    const filmCalc = [{"title":"Kiki's Delivery Service"}, {"title":"My Neighbor Totoro"}].length
    const peopleCalc = [{"name": "Pazu"},{"name": "Satsuki Kusakabe"}, {"name": "Kiki"},{"name": "Seita Yokokawa"}].length/filmCalc
    const calc = calcAgregado([filmCalc,peopleCalc])
    expect(calc).toEqual({"media": 2, "total": 4 })

  })

});

