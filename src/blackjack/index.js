import _ from 'underscore';

import { askForCard, cardValue, createDeck, computerTurn, createCardHTML } from './usecases';

let deck = [];
const types = ['C', 'D', 'H', 'S'];
const specials = ['A', 'J', 'Q', 'K'];

let playerPoints = 0,
    computerPoints = 0;

// HTML References
const btnAskForCard = document.querySelector('#btnAskForCard');
const btnStop = document.querySelector('#btnStop');
const btnNewGame = document.querySelector('#btnNewGame');

const divPlayerCards = document.querySelector('#player-cards');
const divComputerCards = document.querySelector('#computer-cards');

const pointsHTML = document.querySelectorAll('small');

deck = createDeck(types, specials);

// Player events in the game.
btnAskForCard.addEventListener('click', () => {
    const card = askForCard(deck);

    playerPoints = playerPoints + cardValue(card);
    pointsHTML[0].innerText = playerPoints;

    const imgCard = createCardHTML(card);

    divPlayerCards.append(imgCard);

    if (playerPoints > 21) {
        console.warn('Im sorry you lose');
        btnAskForCard.disabled = true;
        btnStop.disabled = true;
        computerTurn(playerPoints, pointsHTML, divComputerCards, deck);
    } else if (playerPoints === 21) {
        console.warn('You got 21, you win!');
        btnAskForCard.disabled = true;
        btnStop.disabled = true;
        computerTurn(playerPoints, pointsHTML, divComputerCards, deck);
    }
});

btnStop.addEventListener('click', () => {
    btnAskForCard.disabled = true;
    btnStop.disabled = true;

    computerTurn(playerPoints, pointsHTML, divComputerCards, deck);
});

btnNewGame.addEventListener('click', () => {
    console.clear();
    deck = [];
    deck = createDeck(types, specials);

    playerPoints = 0;
    computerPoints = 0;

    pointsHTML[0].innerText = 0;
    pointsHTML[1].innerText = 0;

    divComputerCards.innerHTML = '';
    divPlayerCards.innerHTML = '';

    btnAskForCard.disabled = false;
    btnStop.disabled = false;
});
