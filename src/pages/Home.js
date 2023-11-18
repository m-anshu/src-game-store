import React from "react";
import { Link } from "react-router-dom";
import gamesData from "./Game/games.json";
import './home.css'
const Home = () => {
  return (
    <div>
      
      <h1 class='htitle'>Our Assorted Collection</h1>
      ,<div class='home'>
        {gamesData.map((game) => (
          
            <Link to={`/game/${game.id}/${game.title}/${game.description}`}>
              
              <img src={require(`./Game/images/game${game.id}.png`)} alt={game.title} width="300" height="400" class='himages'></img>
            </Link>
          
        ))}
      </div>
    </div>
  );
};

export default Home;
