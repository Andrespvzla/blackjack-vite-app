import { askForCard, cardValue, createCardHTML } from './';

// This function recreates computer turn in the game.
export const computerTurn = (minPoints, pointsHTML, divComputerCards, deck = []) => {
    if (!minPoints) throw new Error('Minimum points are necessary.');
    if (!pointsHTML) throw new Error('pointsHTML are necessary.');

    let computerPoints = 0;

    do {
        const card = askForCard(deck);

        computerPoints = computerPoints + cardValue(card);
        pointsHTML[1].innerText = computerPoints;

        // const imgCard = document.createElement('img');
        // imgCard.src = `assets/cards/${card}.png`;
        // imgCard.classList.add('custom-card');

        const imgCard = createCardHTML(card);

        divComputerCards.append(imgCard);

        if (minPoints > 21) {
            break;
        }
    } while (computerPoints < minPoints && minPoints <= 21);

    setTimeout(() => {
        if (computerPoints === minPoints) {
            alert('No one wins.');
        } else if (minPoints > 21) {
            alert('Computer Wins');
        } else if (computerPoints > 21) {
            alert('Player Wins');
        } else {
            alert('Computer Wins');
        }
    }, 100);
};
