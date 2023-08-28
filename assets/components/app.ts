import '../styles/style.css';
import { renderGame } from './game';
import { resetTimer, stopTimer } from './stopwatch';

const startBtn: any = document.querySelector('.first_page__start-btn');
const chooseDiff = document.getElementsByName(
    'difficult',
) as NodeListOf<HTMLInputElement>;
export const startPage: any = document.querySelector('.first_page__nav');
export const gamePage: any = document.querySelector('.game_page');
const restartBtn: any = document.querySelector('.game_page__top-restart-btn');
export const gameDeck: any = document.querySelector('.cards');
export const winPage: any = document.querySelector('.win');
export const losePage: any = document.querySelector('.lose');
const playAgainBtnL: any = document.querySelector('.btn-lose');
const playAgainBtnW: any = document.querySelector('.btn-win');
export const timer: any = document.querySelector('.game_page__top-counter');
export const endTimerL: any = document.querySelector('.timer-lose');
export const endTimerW: any = document.querySelector('.timer-win');

export let userSetting = { time: '', difficulty: '' };

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
