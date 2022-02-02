import React from 'react';
import logo from './logo.svg';
import './App.css';
import pokedex from './Pokedex';
import Pokecards from './Pokecards';
// import assignCards from './PokeGame';


const assignCards=(cards)=>{

  let player1=[];
  let player2=[];

  for (let i=0;i<4;i++){
      let randomIdx=Math.floor(Math.random()*cards.length)
      player1.push(cards.splice(randomIdx,1)[0])
  }
  console.log('cards')
  console.log(cards)
  player2=[...cards]
  console.log('sdaaaaaaaaaaaaa p1 dasssssssss')
  console.log(player1)
  console.log('sdaaaaaaaaaaaaa p2 dasssssssss')
  console.log(player2)
  const players={p1:player1,p2:player2}
  console.log(players)
  return players

}

function App() {
  // console.log(pokedex)
  let players=assignCards([...pokedex])
  console.log('p1 check')
  console.log(players.p1)
  // console.log(totalExp(p1))
  console.log('p2 check')

  console.log(players.p2)

  // console.log(totalExp(p2))

  return (
    <div className="App">

      <h1 style={{textAlign:'center'}}>Pokedex</h1>
      <Pokecards pokedex={players.p1} username='player1'/>
      <Pokecards pokedex={players.p2} username='player2'/>
    </div>
  );
}



const totalExp=(player)=>{
  return player.reduce((acc,next)=>{
    return acc+next.base_experience
  },0)
}



export default App;
