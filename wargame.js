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
        let faces = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        this.cards.name = 'faces[x] of suits[i]'

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
        d3.shuffle(this.cards);
        return this.cards;
        //this.cards.sort(() => (Math.random() > 0.5) ? 1: -1);
    }

    //for (let i = 0; i < 52; i++) {
        //let tempCard = deck[i];
        //let randomIndex = Math.floor(Math.random() * 52);
        //deck[i] = deck [randomIndex];
        //deck [randomIndex] = tempCard;
    //}

    //split deck into player decks
    add2Deck() {
        this.player1.deck(this.cards.slice(0, 26));
        this.player2.deck(this.cards.slice(26, 52));
    }
}

class Player {
    constructor (name) {
        this.playerName = name;
        this.deck = [];
        this.deck.name = 'faces[x] of suits[i]'
        this.points = 0;
    }
}

class Game {
    constructor () {
        this.cards = [];
        this.player1 = new Player('Player One');
        this.player2 = new Player('Player Two');
        this.points = 0;
    }

    play () {
        for(let i = 0; i < 26; i++) {
            let round = i + 1;
            console.log(`Player One: ${this.player1.deck[i].name} vs Player Two: ${this.player2.deck[i].name}`);

            if (this.player1.deck[i].value > this.player2.deck[i].value){
             this.player1.points++;
                console.log('Player One wins the round!');
            } else if (this.player1.deck[i].value < this.player2.[i].value){
                this.player2.points++;
                console.log('Player Two wins the round!');
            } else {
                console.log('Tie: No points awarded.');
            }
    
        }

        console.log(`Player One: ${this.player1.points}, Player Two: ${this.player2.points}`);
    }

    declareWinner() {
        let winner;
        if (this.player1.points > this.player2.points) {
            winner = this.player1;
            console.log('Player One wins the game!');
        } else if (this.player1.points < this.player2.points) {
            winner = this.player2;
            console.log('Player Two wins the game!');
        } else {
            console.log('Tied Game');
        }
    }
}

let game = new Game();
game.play();