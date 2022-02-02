import React from "react";
import Pokecard from './Pokecard';
import './Pokecards.css'


function Pokecards({pokedex,username}) {
    return (
        <div className="row">
            <h1>{username}</h1>
            {pokedex.map((pokemon)=>{
                return (
                    <Pokecard pokemon={pokemon} username={username}/>
                )
            })}

        </div>
    );
  }
  
  export default Pokecards;