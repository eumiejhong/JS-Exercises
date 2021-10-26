import React, { useState, useEffect } from "react";
import uuid from "uuid";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import { useAxios } from "./hooks";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [deck, drawCard] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/");
  const {cards} = deck;

  useEffect(() => {
    drawCard();
  }, []);

  useEffect(() => {
    console.log({deck});
  }, [deck])
  
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={drawCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards && cards.map(cardData => (
          <PlayingCard key={cardData.code} front={cardData.image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
