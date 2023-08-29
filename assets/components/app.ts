import '../styles/style.css';
import { renderGame } from './game';
import { resetTimer, stopTimer } from './stopwatch';

const startBtn = document.querySelector(
    '.first_page__start-btn',
) as HTMLElement;
const chooseDiff = document.getElementsByName(
    'difficult',
) as NodeListOf<HTMLInputElement>;
export const startPage = document.querySelector(
    '.first_page__nav',
) as HTMLElement;
export const gamePage = document.querySelector('.game_page') as HTMLElement;
const restartBtn = document.querySelector(
    '.game_page__top-restart-btn',
) as HTMLElement;
export const gameDeck = document.querySelector('.cards') as HTMLElement;
export const winPage = document.querySelector('.win') as HTMLElement;
export const losePage = document.querySelector('.lose') as HTMLElement;
const playAgainBtnL = document.querySelector('.btn-lose') as HTMLElement;
const playAgainBtnW = document.querySelector('.btn-win') as HTMLElement;
export const timer = document.querySelector(
    '.game_page__top-counter',
) as HTMLElement;
export const endTimerL = document.querySelector('.timer-lose') as HTMLElement;
export const endTimerW = document.querySelector('.timer-win') as HTMLElement;

export const userSetting = { time: '', difficulty: '' };

interface userSetting {
    time: string;
    difficulty: string;
}

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
    stopTimer();
    resetTimer();
    startPage.classList.remove('hidden');
    gamePage.classList.add('hidden');
});

playAgainBtnL.addEventListener('click', () => {
    stopTimer();
    resetTimer();
    losePage.classList.add('hidden');
    startPage.classList.remove('hidden');
});

playAgainBtnW.addEventListener('click', () => {
    stopTimer();
    resetTimer();
    winPage.classList.add('hidden');
    startPage.classList.remove('hidden');
});
