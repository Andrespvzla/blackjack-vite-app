import _ from 'underscore';

// This function creates a new deck of cards.

export const createDeck = (typesOfCards, specialsTypes) => {
    if (!typesOfCards || typesOfCards.lenght === 0)
        throw new Error('Types of cards are required and has to be an Array of string');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let type of typesOfCards) {
            deck.push(i + type);
        }
    }

    for (let type of typesOfCards) {
        for (let esp of specialsTypes) {
            deck.push(esp + type);
        }
    }
    deck = _.shuffle(deck);
    return deck;
};
