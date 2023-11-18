import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import gamesData from "./games.json";


const GamePage = () => {
  const { id } = useParams();

  // Use useEffect to fetch the game data based on the id
  const [game, setGame] = useState(null);
  const images= [
     require(`./images/game${id}_1.jpg`),
    require(`./images/game${id}_2.jpg`),
    require(`./images/game${id}_3.jpg`),
  ]
  useEffect(() => {
    const selectedGame = gamesData.find((game) => game.id === parseInt(id));
    setGame(selectedGame);
  }, [id]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle changing the displayed image
  const changeImage = (direction) => {
    if (direction === "next") {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (direction === "prev") {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  // Function to handle adding the game to the wishlist
  const addToWishlist = () => {
    // Implement logic to add the game to the wishlist
    console.log(`Added ${game.title} to wishlist`);
  };

  // Function to handle adding the game to the cart
  const addToCart = () => {
    // Implement logic to add the game to the cart
    console.log(`Added ${game.title} to cart`);
  };

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  // Function to handle submitting the rating and review
  const submitRatingAndReview = () => {
    // Implement logic to submit the rating and review (e.g., send to server)
    console.log(`Submitted Rating: ${rating}, Review: ${review}`);
    // You may want to clear the form or provide feedback to the user after submission
  };

  // If the game data is not yet loaded, display a loading message or component
  if (!game) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{game.title}</h1>
      <img src={images[currentImageIndex]} alt={game.title} style={{ maxWidth: "100%" }} />
      <div>
        <button onClick={() => changeImage("prev")}>Previous Image</button>
        <button onClick={() => changeImage("next")}>Next Image</button>
      </div>
      <p>{game.description}</p>
      <p>Price: ${game.price}</p>
      <p>Rating: {game.rating}</p>
      {/* Buttons to add to wishlist and cart */}
      <button onClick={addToWishlist}>Add to Wishlist</button>
      <button onClick={addToCart}>Add to Cart</button>
      {/* Star rating component */}
      <div>
        <p>Rate this game:</p>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            style={{ cursor: "pointer", color: star <= rating ? "gold" : "gray" }}
          >
            &#9733;
          </span>
        ))}
      </div>

      {/* Review textarea */}
      <div>
        <p>Write a review:</p>
        <textarea value={review} onChange={(e) => setReview(e.target.value)} />
      </div>

      {/* Button to submit rating and review */}
      <button onClick={submitRatingAndReview}>Submit Rating and Review</button>
    </div>
  );
};

export default GamePage;
