gsap.registerPlugin(ScrollTrigger);

// Path: script.js

gsap.from(".first__container", {
    scrollTrigger: {
        trigger: ".first",
        scrub: true,
        pin: true,
        pinSpacing: true,
        markers: true,
    },
    opacity: 0,
    x: -100,
});

// gsap.to(".first__container", {
//     scrollTrigger: {
//         trigger: ".first",
//         scrub: true,
//         pin: true,
//         pinSpacing: true,
//         markers: true,
//     },
//     opacity: 1,
//     x: 0,
// });
