import { gsap } from "gsap";

export function animateRopePull(target) {
  if (!target) return;
  gsap.fromTo(target, { y: 0 }, { y: 18, duration: 0.14, yoyo: true, repeat: 1, ease: "power2.out" });
}
