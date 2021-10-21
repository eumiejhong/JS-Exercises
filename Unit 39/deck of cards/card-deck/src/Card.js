import React from "react";

function Card({key, image, name}) {
    return 
        <img className="Card" 
            key={key}
            src={image}
            alt={name}
        />;
}

export default Card;