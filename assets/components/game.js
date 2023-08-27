import { gamePage, startPage } from './app.js';
import { delay } from './delay.js';

const suits = ['hearts', 'clubs', 'diamonds', 'spades'];
const ranks = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6'];
const cards = [];

const randomCards = (suits, ranks, cards) => {
    for (let i = 0; i < cards.length; i++) {
        cards[i] = {
            suit: suits[Math.floor(Math.random() * (3 - 0 + 1))],
            rank: ranks[Math.floor(Math.random() * (8 - 0 + 1))],
        };
    }
    cards.forEach((element) => {
        cards.push(element);
    });

    cards.sort(() => Math.random() - 0.5);
};

const renderFrontCard = (cards) => {
    let cardHtml = '';
    cardHtml = cards
        .map((card) => {
            return `<div class="scene scene--card">
            <div data-card="${card.rank}-${card.suit}" class="card-flip">
                <div class="card__face card__face--front">
                <div class="card">
                        <div class="card-left">
                            <div class="card-name">${card.rank}</div>
                            <div class="card-suit card-suit_small"><img width="9px" src="./assets/img/${card.suit}.png" alt=""></div>
                        </div>
                        <div class="card-suit"><img src="./assets/img/${card.suit}.png" alt=""></div>
                        <div class="card-right">
                            <div class="card-name">${card.rank}</div>
                            <div class="card-suit card-suit_small"><img width="9px" src="./assets/img/${card.suit}.png" alt=""></div>
                        </div>
                </div>          
                </div>
                <div class="card__face card__face--back"></div>
            </div>
        </div>`;
        })
        .join('');

    return cardHtml;
};

export function renderGame(userSetting, gameDeck) {
    switch (userSetting.difficulty) {
        case 'easy':
            cards.length = 3;
            randomCards(suits, ranks, cards);
            gameDeck.innerHTML = `<div class="cards-container cards-container_easy">${renderFrontCard(
                cards,
            )}</div>`;
            break;
        case 'medium':
            cards.length = 6;
            randomCards(suits, ranks, cards);
            gameDeck.innerHTML = `<div class="cards-container cards-container_medium">${renderFrontCard(
                cards,
            )}</div>`;
            break;
        case 'hard':
            cards.length = 9;
            randomCards(suits, ranks, cards);
            gameDeck.innerHTML = `<div class="cards-container cards-container_hard">${renderFrontCard(
                cards,
            )}</div>`;
            break;
    }

    const playGame = () => {
        const cardsToCompare = [];
        const cardsList = document.querySelectorAll('.card-flip');
        renderFrontCard(cards);
        delay(5000).then(() => {
            flipAllCards(cardsList);
            cardsList.forEach((card) => {
                card.addEventListener('click', () => {
                    flipCard(card);
                    delay(1000).then(() => {
                        cardsToCompare.push(card.dataset.card);

                        if (cardsToCompare.length % 2 === 0) {
                            if (
                                cardsToCompare[0] === cardsToCompare[1] &&
                                cardsToCompare[2] === cardsToCompare[3] &&
                                cardsToCompare[4] === cardsToCompare[5] &&
                                cardsToCompare[6] === cardsToCompare[7] &&
                                cardsToCompare[8] === cardsToCompare[9] &&
                                cardsToCompare[10] === cardsToCompare[11] &&
                                cardsToCompare[12] === cardsToCompare[13] &&
                                cardsToCompare[14] === cardsToCompare[15] &&
                                cardsToCompare[16] === cardsToCompare[17]
                            ) {
                                console.log();
                            } else {
                                alert('YOU LOSE!');
                                startPage.classList.remove('hidden');
                                gamePage.classList.add('hidden');
                            }

                            if (cardsToCompare.length === cards.length) {
                                alert('YOU WIN!');
                                startPage.classList.remove('hidden');
                                gamePage.classList.add('hidden');
                            }
                        }
                    });
                });
            });
        });
    };

    const flipCard = (cardElement) => {
        cardElement.classList.toggle('is-flipped');
    };

    const flipAllCards = (cardsElement) => {
        cardsElement.forEach((card) => {
            card.classList.toggle('is-flipped');
        });
    };

    playGame();
}
