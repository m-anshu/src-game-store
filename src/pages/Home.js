// Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // Sample list of games (you can replace this with actual data)
  const games = [
    {
      id: 1,
      title: "Cyberpunk 2077",
      description: "Immerse yourself in the Cyberpunk universe, from the original storyline of Cyberpunk 2077 and its gripping spy-thriller expansion Phantom Liberty to the award-winning anime series Cyberpunk: Edgerunners — there are countless stories to discover in the deadly megalopolis of Night City.",
      images: ["game1_1.jpg", "game1_2.jpg", "game1_3.jpg"],
    },
    {
      id: 2,
      title: "Game 2",
      description: "Description of Game 2",
      images: ["game2_1.jpg", "game2_2.jpg"],
    },
    {
      id: 3,
      title: "Game 3",
      description: "Description of Game 3",
      images: ["game3_1.jpg", "game3_2.jpg", "game3_3.jpg"],
    },
  ];

  return (
    <div>
      <h1>Video Games</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <Link to={`/game/${game.id}`}>
              <h2>{game.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
