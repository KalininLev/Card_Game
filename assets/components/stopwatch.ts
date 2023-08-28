import { endTimerW, endTimerL, timer } from './app';

let minutes = 0;
let seconds = 0;
let interval: any;

// Функция для обновления времени
export function updateTime() {
    seconds++;
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }

    // Выводим время на страницу
    timer.textContent =
        (minutes < 10 ? '0' : '') +
        minutes +
        '.' +
        (seconds < 10 ? '0' : '') +
        seconds;

    endTimerL.textContent =
        (minutes < 10 ? '0' : '') +
        minutes +
        '.' +
        (seconds < 10 ? '0' : '') +
        seconds;

    endTimerW.textContent =
        (minutes < 10 ? '0' : '') +
        minutes +
        '.' +
        (seconds < 10 ? '0' : '') +
        seconds;
}

// Функция для запуска секундомера
export function startTimer() {
    interval = setInterval(updateTime, 1000);
}

// Функция для остановки секундомера
export function stopTimer() {
    clearInterval(interval);
}

// Функция для сброса секундомера
export function resetTimer() {
    minutes = 0;
    seconds = 0;
    timer.textContent = '00.00';
}
