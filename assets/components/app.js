const startBtn = document.querySelector('.first_page__start-btn');
const chooseDiff = document.getElementsByName('difficult');
const startPage = document.querySelector('.first_page__nav');
const gamePage = document.querySelector('.game_page');
const restartBtn = document.querySelector('.game_page__top-restart-btn');

startBtn.addEventListener('click', () => {
    for (let i = 0; i < chooseDiff.length; i++) {
        if (chooseDiff[i].checked === true) {
            console.log(chooseDiff[i]);
            window.currentDiff = { difficult: chooseDiff[i].id };

            startPage.classList.add('hidden');
            gamePage.classList.remove('hidden');
        }
    }
});

restartBtn.addEventListener('click', () => {
    startPage.classList.remove('hidden');
    gamePage.classList.add('hidden');
});
