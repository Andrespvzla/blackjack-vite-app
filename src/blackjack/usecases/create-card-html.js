export const createCardHTML = (card) => {
    if (!card) throw new Error('Card is necessary.');

    const imgCard = document.createElement('img');
    imgCard.src = `assets/cards/${card}.png`;
    imgCard.classList.add('custom-card');

    return imgCard;
};
