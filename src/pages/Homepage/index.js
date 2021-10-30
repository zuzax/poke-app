import React, {useEffect, useState}  from "react";
import 'bootstrap/dist/css/bootstrap.css';
import PokemonList from "../../components/PokemonList/index.js"
import SearchBar from "../../components//SearchBar/index.js";
import PokemonLogo from "../../components/PokemonLogo/index.js";

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

const HomePage = () => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemon, setPokemon] = useState("")
    const [error, setError] =useState("");

    useEffect(() => {
        fetch(API_URL)
            .then(resp => resp.json())
            .then(data => {
                setPokemons(data.results);
            })
            .catch(() => {
                setError("Błąd");
             });
        }, []);   

    const handleChange = (e) => {
        setPokemon(e.target.value);
    };
      
    const handleSubmit = (e) => {
        e.preventDefault();
        setPokemon("")
    };
  
    const handleFiltering= () => {
        setPokemons(prevState => prevState.filter(p => p.name.includes(pokemon)));
        setPokemon("")
    }

    return ( 
          <>
            <div className="container">
                <PokemonLogo />
                <SearchBar 
                    handleSubmit={handleSubmit} 
                    handleChange={handleChange} 
                    inputVal={pokemon} 
                    handleFiltering={handleFiltering}
                />
                <PokemonList pokemons={pokemons} /> 
            </div>
         </>
     );
}
          
export default HomePage;