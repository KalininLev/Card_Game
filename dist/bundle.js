(() => {
    const e = document.querySelector('.first_page__start-btn'),
        t = document.getElementsByName('difficult'),
        d = document.querySelector('.first_page__nav'),
        c = document.querySelector('.game_page'),
        n = document.querySelector('.game_page__top-restart-btn');
    e.addEventListener('click', () => {
        for (let e = 0; e < t.length; e++)
            !0 === t[e].checked &&
                (console.log(t[e]),
                (window.currentDiff = { difficult: t[e].id }),
                d.classList.add('hidden'),
                c.classList.remove('hidden'));
    }),
        n.addEventListener('click', () => {
            d.classList.remove('hidden'), c.classList.add('hidden');
        });
})();
