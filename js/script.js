const BASEURL = "https://pokeapi.co/api/v2/pokemon/"


function getPokemonList(){
    let listaPokemons = []
    fetch(BASEURL + '?limit=251').then( Response => {
        if (Response.status == 200){
            listaPokemons = Response.json().then( json => {json.results.map( pokemon => { console.log(pokemon.name)})
            return json})
            return listaPokemons
        }
    })
}

function showPokemonList(){
    let listaPokemons = []
    fetch(BASEURL + '?limit=1000').then( Response => {
        if (Response.status == 200){
            listaPokemons = Response.json().then( json => {json.results.map( pokemon => { 
                let liPokemon = document.createElement("li")
                let liPokemonImg = document.createElement("img")
                fetch(pokemon.url).then(Response => { pokemonImg = Response.json().then( (pokemon) => {(liPokemonImg.src = pokemon.sprites.front_default)})})
                liPokemon.innerHTML = pokemon.name
                liPokemon.appendChild(liPokemonImg)
                document.getElementById("ListaPokemons").appendChild(liPokemon)
            })
            return json})
            return listaPokemons
        }
    })
}


//Começo da resolução
function showSixPokemons(){
    let listaseis = []
    fetch(BASEURL+'?limit=6').then((Response)=>{Response.json().then((Abacate)=>{console.log(Abacate.results)})})
    
}

//Começo da Resolução
function showPokemonById(){
    fetch(BASEURL + 5).then( (Response) => { Response.json().then( (Pokemon) => {console.log(Pokemon.name)}) } )

    
}


/*
Exemplo de código usando o modificador async na função e await para aguardar retornos.
async function getData() {
       let res = await fetch(BASEURL+ '?limit=151')
       let result = await res.json()
       let pokemon = result.results
       console.log(pokemon)       
       return(pokemon)
 }*/