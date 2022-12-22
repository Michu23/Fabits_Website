gsap.registerPlugin(ScrollTrigger);

// Path: script.js



// const tl = gsap.timeline();
// const tl2 = gsap.timeline();
// const tl3 = gsap.timeline();
// const tl4 = gsap.timeline();
// const tl5 = gsap.timeline();
// const tl6 = gsap.timeline();


// tl.from(".firstcontent", {
//     x: 400,
//     opacity: 0,
// })
// .to(".firstcontent", {
//     x: 0,
// })
// .to(".firstcontent", {
//     x: -400,
//     opacity: 0,
// })


// tl2.from(".f__slide", {
//     x: 400,
//     opacity: 0,
// })
// .to(".f__slide", {
//     x: 0,
// })
// .to(".f__slide", {

//     x: -400,
//     opacity: 0,
// })

// tl3.from(".secondcontent", {
//     x: 400,
//     opacity: 0,
// })
// .to(".secondcontent", {
//     x: 0,
// })
// .to(".secondcontent", {
//     x: -400,
//     opacity: 0,
// })

// tl4.from(".s__slide", {
//     x: 400,
//     opacity: 0,
// })
// .to(".s__slide", {
//     x: 0,
// })
// .to(".s__slide", {
//     x: -400,
//     opacity: 0,
// })

// tl5.from(".thirdcontent", {
//     x: 400,
//     opacity: 0,
// })
// .to(".thirdcontent", {
//     x: 0,
// })
// .to(".thirdcontent", {
//     x: -400,
//     opacity: 0,
// })








// .from(".secondcontent", {
//     x: 800,
//     opacity: 0,
// })
// to(".secondcontent", {
//     x: 0,
// })
// .to(".secondcontent", {
//     x: -800,
//     opacity: 0,

// })
// .from(".thirdcontent", {
//     x: 400,
//     opacity: 0,

// })
// to(".thirdcontent", {
//     x: 0,
// })
// .to(".thirdcontent", {
//     x: -550,
//     opacity: 0,

// });




// ScrollTrigger.create({
//     animation: tl,
//     trigger: ".first",
//     start: "top top",
//     end: "+=2500",
//     scrub: 1,
//     pin: true,
//     pinSpacing: true,
//     markers: true,
//     anticipatePin: 1,
// });

// ScrollTrigger.create({
//     animation: tl2,
//     trigger: ".first",
//     start: "top top",
//     end: "+=2500",
//     scrub: 1,
//     pin: true,
//     pinSpacing: true,
//     markers: true,
//     anticipatePin: 1,
// });

// ScrollTrigger.create({
//     animation: tl3,
//     trigger: ".first",
//     start: "+=2500 top",
//     end: "+=5000",
//     scrub: 1,
//     pin: true,
//     pinSpacing: true,
//     markers: true,
//     anticipatePin: 1,
// });

// ScrollTrigger.create({
//     animation: tl4,
//     trigger: ".first",
//     start: "+=2500 top",
//     end: "+=5000",
//     scrub: 1,
//     pin: true,
//     pinSpacing: true,
//     markers: true,
//     anticipatePin: 1,
// });

// ScrollTrigger.create({
//     animation: tl5,
//     trigger: ".first",
//     start: "+=5000 top",
//     end: "+=7500",
//     scrub: 1,
//     pin: true,
//     pinSpacing: true,
//     markers: true,
//     anticipatePin: 1,
// });

// ScrollTrigger.create({
//     animation: tl6,
//     trigger: ".first",
//     start: "+=5000 top",
//     end: "+=7500",
//     scrub: 1,
//     pin: true,
//     pinSpacing: true,
//     markers: true,
//     anticipatePin: 1,
// });






// gsap.from(".f__slide", {
//     scrollTrigger: {
//         trigger: ".first__slide",
//     },
//     opacity: 0,
//     x: 100,
// });

// gsap.from(".first__container", {
//     scrollTrigger: {
//         trigger: ".first__slide",
//         markers: true,
//         pin: true,
//         pinSpacing: true,
        
//     },
//     opacity: 0,
//     x: 100,
// });

// gsap.from(".second", {
//     scrollTrigger: {
//         trigger: ".first",
//         // markers: true,
//         pin: true,
//         pinSpacing: true,
//         start: "bottom bottom",
//         end: "bottom bottom",
//     },

//     opacity: 0,
//     x: -100,
// });


gsap.from(".g1", {
    scrollTrigger: {
        trigger: ".gift__section",
        // markers: true,
        scrub: 1,
        start: "top center",
        end: "bottom bottom",
       
    },

    opacity: 0,
    x: -300,
});

gsap.from(".g3", {
    scrollTrigger: {
        trigger: ".gift__section",
        // markers: true,
        scrub: 1,
   
        start: "top center",
        end: "bottom bottom",
    },
    opacity: 0,
    x: 300,
});


gsap.from(".handimg", {
    scrollTrigger: {
        trigger: ".hand__section__dd",
        markers: true,
        scrub: 1,
        start: "top center",
        end: "bottom bottom",
    },
    opacity: 0,
    x: 300,
    scale : 0.5,
});


gsap.from(".handp", {
    scrollTrigger: {
        trigger: ".hand__section__dd",
        markers: true,
        scrub: 1,
        start: "top center",
        end: "bottom bottom",
    },
    opacity: 0,
    y: 50,
    scale : 0.7,
});

gsap.from(".handh", {
    scrollTrigger: {
        trigger: ".hand__section__dd",
        markers: true,
        scrub: 1,
        start: "top center",
        end: "bottom bottom",
    },
    opacity: 1,
    y: -50,
    // scale : 0,
});







