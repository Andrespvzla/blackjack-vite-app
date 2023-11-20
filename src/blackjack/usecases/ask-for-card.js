// This function allows you to get one card from deck.
export const askForCard = (deck) => {
    if (deck.length === 0) {
        throw 'No more cards in deck.';
    }
    const card = deck.pop();
    return card;
};
