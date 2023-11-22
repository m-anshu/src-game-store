import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import gamesData from "./games.json";
import './gamepage.css'

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
    <div className='game-page-container'>
      <h1 className="game-page-title">{game.title}</h1>
      <img src={images[currentImageIndex]} alt={game.title} style={{ maxWidth: "100%" }} className="game-page-image"/>
      <div className="game-page-dbutton">
        <button onClick={() => changeImage("prev")} className="game-page-button">
        &lt;
        </button>
        <button onClick={() => changeImage("next")} className="game-page-button">
        &gt;
        </button>
      </div>
      <p className="game-page-desc">{game.description}</p>
      <p className="game-page-rating" >Critic Score: {game.rating}/5</p>
      <p className="game-page-price">Price: ${game.price}</p>
      {/* Buttons to add to wishlist and cart */}
      <div className="game-page-buttons-container">
        <button onClick={addToWishlist} className="game-page-wishlist-button">
          Add to Wishlist
        </button>
        <button onClick={addToCart} className="game-page-cart-button">
          Add to Cart
        </button>
      </div>
      {/* Star rating component */}
      <div>
        <p className="game-page-star-head">Rate this game:</p>
        {[1, 2, 3, 4, 5].map((star) => (
          <span className="game-page-star"
            key={star}
            onClick={() => setRating(star)}
            style={{ cursor: "pointer", color: star <= rating ? "gold" : "gray" }}
          >
            &#9733;
          </span>
        ))}
      </div>

      {/* Review textarea */}
      <div className="game-page-review-container">
        <p>Write a review:</p>
        <textarea value={review} onChange={(e) => setReview(e.target.value)} className="game-page-textarea"/>
      </div>

      {/* Button to submit rating and review */}
      <button onClick={submitRatingAndReview} className="game-page-submit-button">Submit Rating and Review</button>
    </div>
  );
};

export default GamePage;
