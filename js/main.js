// mobile menu toggle
let mobileBtn = document.getElementById("mobile-btn");
let headerLinks = document.querySelector(".header-links");
let iconMenu = document.getElementById("icon-menu");
mobileBtn.addEventListener("click", () => {
    headerLinks.classList.toggle("mobile");
    iconMenu.classList.toggle("fa-xmark");
});
// gsap animation for header section
const tl = gsap.timeline();
tl.from(".header-logo", {
    y: -100,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
})
.from(".nav-bar li", {
    y: -100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.15,
    ease: "power3.out"
}, "-=0.3")
.from(".header-btn", {
    x: 100,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out"
}, "-=0.2")
.from(".btn-mobile", {
    x: 100,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out"
}, "-=0.5");
// gsap animation for hero section
const title = document.querySelector(".hero h1");
title.innerHTML = title.innerText
  .split("")
  .map((char, i) => {
    if (char === " ") return `<br>`;
    return `<span class="letter">${char}</span>`;
  })
  .join("");
gsap.from(".letter", {
  y: (i) => i % 2 === 0 ? -180 : 180,
  opacity: 0,
  duration: 1.2,
  stagger: 0.06,
  ease: "power4.out"
});
// lenis smooth scroll
const lenis = new Lenis({
  duration: 4,
  smoothWheel: true,
  smoothTouch: false
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
gsap.registerPlugin(ScrollTrigger);
lenis.on("scroll", ScrollTrigger.update);
// headphone animation
gsap.set(".headphone-wrap", {
  xPercent: -50,
  yPercent: -50,
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1
});
gsap.from(".main-headphone", {
  scale: 0.2,
  y: 300,
  opacity: 0,
  duration: 1.8,
  delay: 1.4,
  ease: "power4.out"
});
const headphoneMove = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    endTrigger: ".topPicks",
    end: "top 10%",
    scrub: 3,
    invalidateOnRefresh: true,
    onLeave: () => {
  gsap.to(".headphone-wrap", {
    opacity: 0,
    duration: 0.4,
    ease: "power2.out"
  });
  gsap.to(".img-hidden", {
    opacity: 1,
    duration: 0.4,
    ease: "power2.out"
  });
},
onEnterBack: () => {
  gsap.to(".headphone-wrap", {
    opacity: 1,
    duration: 0.4,
    ease: "power2.out"
  });
  gsap.to(".img-hidden", {
    opacity: 0,
    duration: 0.4,
    ease: "power2.out"
  });
}
  }
});
headphoneMove
  // Hero -> True Carity empty area
  .to(".headphone-wrap", {
    x: 300,
    y: 0,
    scale: 0.85,
    rotate: 90,
    duration: 0.50,
    ease: "none"
  })
  // True Carity -> center above MasterBeat title
  .to(".headphone-wrap", {
    x: 0,
    y: 0,
    scale: 0.82,
    rotate: 0,
    duration: 0.30,
    ease: "none"
  })
  // MasterBeat center -> right side above text
  .to(".headphone-wrap", {
    x: 260,
    y: 0,
    scale: 0.82,
    rotate: 20,
    duration: 0.30,
    ease: "none"
  })
  // MasterBeat right -> MasterBeat left/video area quickly
  .to(".headphone-wrap", {
    x: -260,
    y: 0,
    scale: 0.85,
    rotate: -20,
    duration: 0.22,
    ease: "none"
  })
  // Image section -> center and big
  .to(".headphone-wrap", {
    x: 0,
    y: 120,
    scale: 1,
    rotate: 0,
    duration: 0.9,
    ease: "none"
  })
  // Top Picks final position
    // Top Picks final position
.to(".headphone-wrap", {
  x: 5,
  y: 35,
  scale: .90,
  rotate: 0,
  duration: 0.25,
  ease: "none"
})
.to(".headphone-wrap", {
  x: 10,
  y: 70,
  scale: 0.80,
  rotate: 0,
  duration: 0.25,
  ease: "none"
})
// Reveal sections on scroll
function revealOnScroll(trigger, elements, start = "top 75%", reverse = true) {
  const items = gsap.utils.toArray(elements);
  gsap.set(items, {
    y: 80,
    opacity: 0
  });
  const tl = gsap.timeline({ paused: true });
  tl.to(items, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.15,
    ease: "power3.out",
    overwrite: true
  });
 ScrollTrigger.create({
  trigger: trigger,
  start: start,
  end: "top 80%",
  onEnter: () => tl.play(),
  onEnterBack: () => {
    if (reverse) tl.reverse();
  }});
}
// Product Info
revealOnScroll(".product-info", ".product-info-text > *");
// Cards
revealOnScroll(".cards", ".cards .card");
// Masterbeat
revealOnScroll(".masterbeat", ".masterbeat-titel, .masterbeat-video, .masterbeat-text");
// Top Picks
revealOnScroll(".topPicks", ".topPicks-titele, .topPicks-item");
// Pure Escape
revealOnScroll(".PureEscape", ".PureEscape-img, .PureEscape-text");
// Footer
revealOnScroll(
  ".footer",
  ".footer-logo, .footer .footer-links .nav-bar li, .footer .footer-btn a",
  "top 95%",
  false
);
// Image section animation
const imageSectionTl = gsap.timeline({
  paused: true
});
imageSectionTl.from(".img-box", {
  scale: 0,
  opacity: 0,
  duration: 2.0,
  stagger: 0.2,
  ease: "back.out(1.7)",
  transformOrigin: "center center"
});
ScrollTrigger.create({
  trigger: ".image-section",
  start: "top 75%",
  onEnter: () => imageSectionTl.play(),
});



