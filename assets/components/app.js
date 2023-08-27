import '../styles/style.css';
import { renderGame } from './game';

const startBtn = document.querySelector('.first_page__start-btn');
const chooseDiff = document.getElementsByName('difficult');
export const startPage = document.querySelector('.first_page__nav');
export const gamePage = document.querySelector('.game_page');
const restartBtn = document.querySelector('.game_page__top-restart-btn');
export const gameDeck = document.querySelector('.cards');

export let userSetting = { time: null, difficulty: null };

startBtn.addEventListener('click', () => {
    for (let i = 0; i < chooseDiff.length; i++) {
        if (chooseDiff[i].checked === true) {
            userSetting.difficulty = chooseDiff[i].id;

            startPage.classList.add('hidden');
            gamePage.classList.remove('hidden');

            renderGame(userSetting, gameDeck);
        }
    }
});

restartBtn.addEventListener('click', () => {
    startPage.classList.remove('hidden');
    gamePage.classList.add('hidden');
});
