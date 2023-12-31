(() => {
    'use strict';
    var e = {
        d: (t, n) => {
            for (var c in n)
                e.o(n, c) &&
                    !e.o(t, c) &&
                    Object.defineProperty(t, c, { enumerable: !0, get: n[c] });
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    };
    function t(e) {
        return new Promise(function (t) {
            return setTimeout(t, e);
        });
    }
    e.d(
        {},
        {
            aU: () => E,
            W9: () => M,
            _y: () => _,
            iD: () => k,
            HT: () => b,
            O5: () => L,
        },
    );
    var n,
        c = 0,
        a = 0;
    function i() {
        60 == ++a && (c++, (a = 0)),
            (b.textContent =
                (c < 10 ? '0' : '') + c + '.' + (a < 10 ? '0' : '') + a),
            (E.textContent =
                (c < 10 ? '0' : '') + c + '.' + (a < 10 ? '0' : '') + a),
            (M.textContent =
                (c < 10 ? '0' : '') + c + '.' + (a < 10 ? '0' : '') + a);
    }
    function s() {
        clearInterval(n);
    }
    function d() {
        (c = 0), (a = 0), (b.textContent = '00.00');
    }
    var r = ['hearts', 'clubs', 'diamonds', 'spades'],
        o = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6'],
        l = [],
        u = function (e, t, n) {
            for (var c = 0; c < n.length; c++)
                n[c] = {
                    suit: e[Math.floor(4 * Math.random())],
                    rank: t[Math.floor(9 * Math.random())],
                };
            n.forEach(function (e) {
                n.push(e);
            }),
                n.sort(function () {
                    return Math.random() - 0.5;
                });
        },
        v = function (e) {
            return e
                .map(function (e) {
                    return '<div class="scene scene--card">\n            <div data-card="'
                        .concat(e.rank, '-')
                        .concat(
                            e.suit,
                            '" class="card-flip">\n                <div class="card__face card__face--front">\n                <div class="card">\n                        <div class="card-left">\n                            <div class="card-name">',
                        )
                        .concat(
                            e.rank,
                            '</div>\n                            <div class="card-suit card-suit_small"><img width="9px" src="./assets/img/',
                        )
                        .concat(
                            e.suit,
                            '.png" alt=""></div>\n                        </div>\n                        <div class="card-suit"><img src="./assets/img/',
                        )
                        .concat(
                            e.suit,
                            '.png" alt=""></div>\n                        <div class="card-right">\n                            <div class="card-name">',
                        )
                        .concat(
                            e.rank,
                            '</div>\n                            <div class="card-suit card-suit_small"><img width="9px" src="./assets/img/',
                        )
                        .concat(
                            e.suit,
                            '.png" alt=""></div>\n                        </div>\n                </div>          \n                </div>\n                <div class="card__face card__face--back"></div>\n            </div>\n        </div>',
                        );
                })
                .join('');
        };
    function m(e, c) {
        switch (e.difficulty) {
            case 'easy':
                (l.length = 3),
                    u(r, o, l),
                    (c.innerHTML =
                        '<div class="cards-container cards-container_easy">'.concat(
                            v(l),
                            '</div>',
                        ));
                break;
            case 'medium':
                (l.length = 6),
                    u(r, o, l),
                    (c.innerHTML =
                        '<div class="cards-container cards-container_medium">'.concat(
                            v(l),
                            '</div>',
                        ));
                break;
            case 'hard':
                (l.length = 9),
                    u(r, o, l),
                    (c.innerHTML =
                        '<div class="cards-container cards-container_hard">'.concat(
                            v(l),
                            '</div>',
                        ));
        }
        var a, d;
        (a = []),
            (d = document.querySelectorAll('.card-flip')),
            v(l),
            t(5e3).then(function () {
                d.forEach(function (e) {
                    e.classList.toggle('is-flipped');
                }),
                    (n = setInterval(i, 1e3)),
                    d.forEach(function (e) {
                        e.addEventListener('click', function () {
                            e.classList.toggle('is-flipped'),
                                t(1e3).then(function () {
                                    e instanceof HTMLElement &&
                                        a.push(e.dataset.card),
                                        a.length % 2 == 0 &&
                                            (a[0] === a[1] &&
                                            a[2] === a[3] &&
                                            a[4] === a[5] &&
                                            a[6] === a[7] &&
                                            a[8] === a[9] &&
                                            a[10] === a[11] &&
                                            a[12] === a[13] &&
                                            a[14] === a[15] &&
                                            a[16] === a[17]
                                                ? console.log()
                                                : (s(),
                                                  k.classList.remove('hidden'),
                                                  _.classList.add('hidden')),
                                            a.length === l.length &&
                                                (s(),
                                                L.classList.remove('hidden'),
                                                _.classList.add('hidden')));
                                });
                        });
                    });
            });
    }
    var f = document.querySelector('.first_page__start-btn'),
        h = document.getElementsByName('difficult'),
        g = document.querySelector('.first_page__nav'),
        _ = document.querySelector('.game_page'),
        p = document.querySelector('.game_page__top-restart-btn'),
        y = document.querySelector('.cards'),
        L = document.querySelector('.win'),
        k = document.querySelector('.lose'),
        q = document.querySelector('.btn-lose'),
        S = document.querySelector('.btn-win'),
        b = document.querySelector('.game_page__top-counter'),
        E = document.querySelector('.timer-lose'),
        M = document.querySelector('.timer-win'),
        w = { time: '', difficulty: '' };
    f.addEventListener('click', function () {
        for (var e = 0; e < h.length; e++)
            !0 === h[e].checked &&
                ((w.difficulty = h[e].id),
                g.classList.add('hidden'),
                _.classList.remove('hidden'),
                m(w, y));
    }),
        p.addEventListener('click', function () {
            s(), d(), g.classList.remove('hidden'), _.classList.add('hidden');
        }),
        q.addEventListener('click', function () {
            s(), d(), k.classList.add('hidden'), g.classList.remove('hidden');
        }),
        S.addEventListener('click', function () {
            s(), d(), L.classList.add('hidden'), g.classList.remove('hidden');
        });
})();
