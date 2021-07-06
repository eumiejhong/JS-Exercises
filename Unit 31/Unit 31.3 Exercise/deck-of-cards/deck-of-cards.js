const DECK_API = "https://deckofcardsapi.com/api/deck";
async function getCard(deckID = 'new') {
    const {data} = await axios.get(`${DECK_API}/${deckID}/draw/?count=1`);
    if (data.cards.length > 0){    
        let {suit, value} = data.cards[0];
        //console.log(`${value} of ${suit}`);
    }
    return data;
}

async function getNewDeck() {
    const {data} = await axios.get(`${DECK_API}/new/shuffle/?deck_count=1`);
    console.log(data)
    return data;
}

async function getTwoCards() {
    const firstCard = getCard();
    const secondCard = getCard(firstCard.deck_id);
}

function generateCard(card) {
    return `<img src="${card.cards[0].image}" />`
}

$(function() {
    const $cardArea = $("#card-deck");
    let currentDeckID = null;
    
    $("#draw-card").on("click", async function(evt){
        evt.preventDefault();
        if (!currentDeckID) {
            let newDeck = await getNewDeck();
            currentDeckID = newDeck.deck_id;
        }
        nextCard = await getCard(currentDeckID);
        console.log(nextCard);
        let newCard = generateCard(nextCard);
        $cardArea.append(newCard);
    });
})