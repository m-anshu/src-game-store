import React from "react";
import { Link } from "react-router-dom";
import gamesData from "./Game/games.json";

const Home = () => {
  return (
    <div>
      <h1>Video Games</h1>
      <ul>
        {gamesData.map((game) => (
          <li key={game.id}>
            <Link to={`/game/${game.id}/${game.title}/${game.description}`}>
              <h2>{game.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
