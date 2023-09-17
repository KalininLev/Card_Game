/* eslint-disable */
const { expect, it, describe } = require('@jest/globals');
const { randomCards } = require('../modules/randomCards');
const { shuffle } = require('../modules/shuffle');

const suits = ['hearts', 'clubs', 'diamonds', 'spades'];
const ranks = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6'];
const cards = [];

describe('test to check the correct creation of card pairs for different difficulties', () => {
    it('should edit the cards list for easy difficulty', () => {
        cards.length = 3;

        randomCards(suits, ranks, cards);

        expect(cards).toHaveLength(6);
    });

    it('should edit the cards list for medium difficulty', () => {
        cards.length = 6;

        randomCards(suits, ranks, cards);

        expect(cards).toHaveLength(12);
    });

    it('should edit the cards list for hard difficulty', () => {
        cards.length = 9;

        randomCards(suits, ranks, cards);

        expect(cards).toHaveLength(18);
    });
});

describe('check shuffle function', () => {
    it('should shuffle cards list', () => {
        let cards = [
            { suit: 'hearts', value: 'A' },
            { suit: 'diamods', value: '8' },
            { suit: 'spades', value: 'Q' },
            { suit: 'diamods', value: '8' },
            { suit: 'hearts', value: 'A' },
            { suit: 'spades', value: 'Q' },
        ];
        let newCards = [];
        cards.forEach((el) => {
            newCards.push(el);
        });

        const shuffledCards = shuffle(newCards)
            .map((el) => `${el.suit} ${el.value}`)
            .toString();
        cards = cards.map((el) => `${el.suit} ${el.value}`).toString();

        expect(cards === shuffledCards).toBeFalsy();
    });
});
