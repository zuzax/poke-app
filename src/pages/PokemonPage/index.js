import React, {useState, useEffect} from "react";

const PokemonPage = (props) => {
 const {match} = props;
 const {params} = match;
 const {pokemonName} = params;
 const [pokemonId, setPokemonId] = useState([]);
 const [allStats, setAllStats] = useState([])
 const stats = allStats.filter(e => {
     return !e.stat.name.includes("-")
 })
 
 useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
        .then(resp => resp.json())
        .then(data => {
            setPokemonId(data.id);
            setAllStats(data.stats)
      })
  }, []);

return (
    <>
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div 
                className="card"  
                style={{width: 250}}>
                    <div className="card-body text-warning bg-dark">
                        <h1 className="card-title">{pokemonName}</h1>
                        <img 
                            className="card-img-top" 
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} 
                            alt="pokemon"/>
                        <h2>Basic Stats:</h2>
                            {stats.map((e, i) => {
                                return <p 
                                    className="card-text" 
                                    key={i}>
                                        {e.stat.name.toUpperCase()} : {e.base_stat}
                                    </p>
                            })}
                    </div>
            </div>
        </div>
   </>
   )
}

export default PokemonPage