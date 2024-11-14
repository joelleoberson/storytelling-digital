import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// debut paralaxe

var tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".parallax-container",
      start: "top top",
      end: "+=200%",
      scrub: 1,
      pin: true,
    },
  })
  .from(
    "#element-1",
    {
      bottom: "0", // À la fin, le haut de l'image est visible
    },
    0
  );

// debut scroll horisontal

gsap.to(".slider-container", {
  x: "-85%",
  duration: 2,
  scrollTrigger: {
    trigger: ".slider-mask",
    start: "bottom bottom ",
    end: "+=600%",
    scrub: 1,
    pin: true,
  },
});

// fin scroll horisonta
