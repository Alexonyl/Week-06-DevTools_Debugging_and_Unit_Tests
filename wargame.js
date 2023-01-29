class Card {
    constructor (suits, faces, values) {
        this.suits = suits;
        this.faces = faces;
        this.values = values;
    }

}

class Deck {
    constructor () {
        this.cards = [];
    }
        //create deck
        createDeck() {
            let suits = ['diamonds', 'hearts', 'spades', 'clubs'];
            let faces = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'J', 'Q', 'K'];
            let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

            for (let i = 0; i < suits.length; i++) {
                for (let x = 0; x < faces.length; x++) {
                    this.cards.push(new Card(suits[i], faces[x], values[x]));
                }
            }
        }
}

class Game {
    constructor () {
        this.cardsInMiddle = [];
        this.players = [];
    }
        //let deck = new Deck();
        //deck.createDeck();

        //shuffle deck
        shuffleDeck() {
            //for 1000 turns
            //switch the values of two random cards
            for (let i = 0; i < 1000; i++) {
                let location1 = Math.floor ((Math.random()
                    * this.cards.length));
                let location2 = Math.floor ((Math.random()
                    * this.cards.length));
                tmp = this.cards[location1];
                this.cards[location1] = this.cards[location2];
                this.cards[location2] = tmp;
            }
        }
    start(playerOneName, playerTwoName) {
        this.players.push(new Player(playerOneName));
        this.players.push(new Player(playerTwoName));
        let deck = new Deck();
        deck.createDeck();
        deck.shuffleDeck();
        this.players[0].playerCards = deck.cards.slice(0, 26);
        this.players[1].playerCards =  deck.cards.slice(26, 52);
    }
}

class Player {
    constructor (name) {
        this.playerName = name;
        this.playerCards = [];
    }

}

let Game = new Game();
Game.start('Player 1', 'Player 2');

console.log(Game.players);