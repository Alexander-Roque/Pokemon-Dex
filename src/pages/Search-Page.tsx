import Input from "../components/input";
import * as React from "react"
import { getPokemon } from "../services/pokeapi-service";

const SearchPage = () => {
  const [query, setQuery] = React.useState("");
  const [pokemon, setPokemon] = React.useState(null);


  function handleSubmit(e) {
    e.preventDefault();
    getPokemon(query).then((data)=> setPokemon(data)).catch((error)=>console.log(error))
  }

  return (
   <>
   <>
    <form onSubmit={handleSubmit}>
      <Input
        name="query"
        placeholder="pokemon name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>Search</button>
    </form>
    {pokemon ? (
      <div>
        <h2>{pokemon.name}</h2>
        <p>{pokemon.id}</p>
        <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
        </div>
    ) : (
      "Ready to search"
    )}
    </>
   </>
  )
}

export default SearchPage;