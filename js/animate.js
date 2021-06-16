var movingLetters = document.querySelector('.ml');
const DURATION = 1000;
const DELAY = 500;
const GROW = 2;
const EASE = "easeOutExpo";
const OPACITY = 0.1
anime.timeline({
        loop: true
    })
    .add({
        targets: '.ml',
        opacity: [1, OPACITY],
        duration: DURATION,
        easing: EASE,
        delay: DELAY
    }).add({
        targets: '.ml',
        opacity: [OPACITY, 1],
        duration: DURATION,
        easing: EASE,
        delay: DELAY
    }).add({
        targets: '.ml',
        rotate: [0, 180],
        duration: DURATION,
        easing: EASE,
        delay: DELAY
    }).add({
        targets: '.ml',
        rotate: [180, 360],
        duration: DURATION,
        easing: EASE,
        delay: DELAY
    }).add({
        targets: '.ml',
        translateX: -1000,
        duration: DURATION,
        easing: EASE,
        delay: DELAY
    }).add({
        targets: '.ml',
        translateX: 0,
        duration: DURATION,
        easing: EASE,
        delay: DELAY
    }).add({
        targets: '.ml',
        scale: [1, GROW],
        duration: DURATION,
        easing: EASE,
        delay: DELAY
    }).add({
        targets: '.ml',
        scale: [GROW, 2 * GROW],
        duration: DURATION,
        easing: EASE,
        delay: DELAY
    })
    .add({
        targets: '.ml',
        scale: [2 * GROW, 1],
        duration: DURATION,
        easing: EASE,
        delay: DELAY
    });