class Card {
    constructor (suit, face, value) {
        this.suit = suit;
        this.face = face;
        this.value = value;
    }
}

class Deck {
    constructor () {
        this.cards = [];
    }

    createDeck() {
        let suits = ['diamonds', 'hearts', 'spades', 'clubs'];
        let faces = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10,'J', 'Q', 'K'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        //add cards to this.cards array
    
        for (let i = 0; i < suits.length; i++) {
            for (let x = 0; x < faces.length; x++) {
                this.cards.push(new Card(suits[i], faces[x], values[x]));
            }
        }
        //for (let suit in this.suits) {
        //    console.log( "index:", suit, "This is the card suit:",
        //    this.suits[suit]);

        //    for (let face in this.faces) {
        //       console.log( "index:", face, "This is the card face:",
        //        this.faces[face]);

        //        cardDeck.push({
        //            value: this.values[face],
        //            faceValue: this.faces[face] + " of " + this.suits[suit],
        //       });
        //    }
    }

    //shuffle deck
    shuffle() {
        this.cards.sort(() => (Math.random() > 0.5) ? 1: -1);
    }
}

class Player {
    constructor (name) {
        this.playerName = name;
        this.playerCards = [];
        this.points = 0;
    }

}

class Game {
    constructor () {
        this.cards = [];
        this.playerCards = [];
        this.player1 = new Player('Player One');
        this.player2 = new Player('Player Two');
        this.points = 0;
    }

    createDeck() {
        let suits = ['diamonds', 'hearts', 'spades', 'clubs'];
        let faces = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10,'J', 'Q', 'K'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        //add cards to this.cards array
    
        for (let i = 0; i < suits.length; i++) {
            for (let x = 0; x < faces.length; x++) {
                this.cards.push(new Card(suits[i], faces[x], values[x]));
            }
        }
    }
}

let game = new Game();

game.createDeck();

let deck = game.cards
for (let i = 0; i < 52; i++) {
    let tempCard = deck[i];
    let randomIndex = Math.floor(Math.random() * 52);
    deck[i] = deck [randomIndex];
    deck [randomIndex] = tempCard;
}
//split deck into player decks
this.player1.playerCards = deck.slice(0, 26);
this.player2.playerCards = deck.slice(26, 52);

for(let i = 0; i < 26; i++) {
    let winner;
    let round = i + 1;
    console.log(`Player One: ${this.player1.playerCards[i].name} vs Player Two: ${this.player2.playerCards[i].name}`);
       
    if (this.player1.playerCards[i].value > this.player2.playerCards[i].value){
        this.player1.points++;
        console.log('Player One wins the round!');
    } else if (this.player1.playerCards[i].value < this.player2.playerCards[i].value){
        this.player2.points++;
        console.log('Player Two wins the round!');
    } else {
        console.log(`Tie: No points awarded.`);
    }

    console.log(`Player One: ${this.player1.points}, Player Two: ${this.player2.points}`);

    if (this.player1.points > this.player2.points) {
        winner = this.player1;
    } else if (this.player1.points < this.player2.points) {
        winner = this.player2;
    } else {
        console.log('Tied Game');
    }
    
    this.end(winner);
    return winner;
}