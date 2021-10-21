import React, {useState, useEffect, useCallback, useRef} from "react";
import Card from "./Card";
import axios from "axios";

const api = "http://deckofcardsapi.com/api/deck"

function CardDeck() {
    const [cardDeck, setCardDeck] = useState(null);
    const [cardDrawn, setCardDrawn] = useState([]);
    const [autoDraw, setAutoDraw] = useState(false);
    const timerRef = useRef(null);

    const drawCard = useCallback(async() => {
        let {deck_id} = cardDeck;
        let drawRes = await axios.get(`${api}/${deck_id}/draw/?count=1`);
        setCardDrawn(drawRes.data);
        if(drawRes.data.remaining === 0) {
            setAutoDraw(false);
        }
    }, [cardDeck, setCardDrawn]);

    useEffect(() => {
        async function getData() {
            let deck = await axios.get(`${api}/new/shuffle/`);
            setCardDeck(deck.data);
        } 
        getData();
    }, [setCardDeck]);

    useEffect(() => {
        if(!timerRef.current && autoDraw) {
            timerRef.current = setInterval(drawCard, 1000)
        }
        return () => clearInterval(timerRef.current)
    }, [autoDraw, autoDraw])

    useEffect(() => {
        console.log("Drew card", cardDrawn);
    }, [cardDrawn])

    const cards = cardDrawn.map(card => (
        <Card key={card.id} image={card.image} name={card.name} />
    ));

    return (
        <div className="CardDeck">
            {cardDeck ? (
                <button className="drawNewCard" onClick={drawCard}>Draw New Card!</button>
            ) : null}
            <div class="cards">{cards}</div>
        </div>
    )
}

export default CardDeck