import React from "react";
import {Link} from "react-router-dom"

const PokemonList = ({pokemons}) => {

    return(
        <>
          <ul className="list-group list-group-flush">
                {pokemons.map((item) => {
                    return (
                        <li 
                            className="list-group-item" 
                            key={item.name}>
                                <Link 
                                    to={`/pokemon/` + item.name}
                                    style={{ textDecoration: 'none', color:'#000' }}>
                                        {item.name}
                                </Link>
                        </li>
                    );
                })}
            </ul>
        </>
)
};


export default PokemonList