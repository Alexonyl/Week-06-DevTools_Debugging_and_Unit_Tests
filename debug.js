var expect = chai.expect;

describe('MyFunctions', function() {
    describe('add cards to array', function() {
        it('should add cards to this.cards array', function() {
            for (let i = 0; i < suits.length; i++) {
                for (let x = 0; x < faces.length; x++) {
                    this.cards.push(new Card(suits[i], faces[x], values[x]));
                }
            }
        });
    });
});