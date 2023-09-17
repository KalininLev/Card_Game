import { shuffle } from './shuffle';

export const randomCards = (
    suits: string[],
    ranks: string[],
    cards: object[],
) => {
    for (let i = 0; i < cards.length; i++) {
        cards[i] = {
            suit: suits[Math.floor(Math.random() * (3 - 0 + 1))],
            rank: ranks[Math.floor(Math.random() * (8 - 0 + 1))],
        };
    }
    cards.forEach((element) => {
        cards.push(element);
    });

    shuffle(cards);
};
