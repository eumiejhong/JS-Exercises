//PART TWO: DECK OF CARDS
//Make a Request for Single Card
let url = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";
let firstPromise = axios.get(url);

firstPromise
    .then(response => {
        let {suit, value} = response.data.cards[0];
        console.log(`${value} of ${suit}`)
    });

//Make a request to deck of cards API
let deck = "https://deckofcardsapi.com/api/deck";

axios
    .get(`${deck}/new/draw/?count=1`)
    .then(response => {
        let {suit, value} = response.data.cards[0];
        console.log(`${suit} of ${value}`)
        let deckID = response.data.deck_id
        return axios.get(`${deck}/${deckID}/draw/?count=1`)
    })
    .then(nextResponse => {
        let {suit, value} = nextResponse.data.cards[0];
        console.log(`${suit} of ${value}`)
    })

//Build an HTML page to draw cards from deck
$(function(){
    let deckID = null;
    let $btn = $('button');
    let $cardArea = $('#card-deck');
    let deck = "https://deckofcardsapi.com/api/deck";
    axios
        .get(`${deck}/new/shuffle/?deck_count=1`)
        .then(response => {
            console.log(response.data)
            deckID = response.data.deck_id;
            console.log(deckID)
        })
    $btn.on("click", function(evt){
        evt.preventDefault();
        axios
            .get(`${deck}/${deckID}/draw/?count=1`)
            .then(response => {
                let cardImage = response.data.cards[0].image;
                let remaining = response.data.remaining
                console.log(remaining)
                $cardArea.append(
                    $('<img>', {src: cardImage})
                )
                let {suit, value} = response.data.cards[0]
                console.log(`${suit} of ${value}`)
                if(remaining <= 0) {
                    alert('You have no more cards!')
                    $btn.remove();
                }
            })

    })
});