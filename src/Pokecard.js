import React from "react";
import './Pokecard.css'




const Pokecard=({pokemon,username})=>{
    console.log(pokemon)
    return (

        <div className="column">
            <div className="Pokecard-card">
                <img src={pokemon.img} alt="Avatar" />
                <div className="Pokecard-container">
                    <h4><b>{pokemon.name} {username}</b></h4>
                    <h4>Type:{pokemon.type}</h4>
                    <h4>EXP:{pokemon.base_experience}</h4>

                </div>
            </div>
        </div>
        
        
    )
}

export default Pokecard;