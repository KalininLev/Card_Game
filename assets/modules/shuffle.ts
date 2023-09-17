export const shuffle = (cards: object[]) => {
    return cards.sort(() => Math.random() - 0.5);
};
