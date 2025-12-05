
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const EASING = {
    DEFAULT: "power3.out",
    SMOOTH: "power2.inOut",
};

export const fadeIn = (element: Element, delay = 0, duration = 1) => {
    return gsap.fromTo(
        element,
        { opacity: 0, y: 20 },
        {
            opacity: 1,
            y: 0,
            duration: duration,
            delay: delay,
            ease: EASING.DEFAULT,
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
        }
    );
};

export const slideInLeft = (element: Element, delay = 0) => {
    return gsap.fromTo(
        element,
        { x: -50, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration: 1,
            delay: delay,
            ease: EASING.DEFAULT,
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
            }
        }
    )
}

export const slideTrack = (track: HTMLElement, xValue: number, duration = 0.8) => {
    return gsap.to(track, {
        x: xValue,
        duration: duration,
        ease: EASING.DEFAULT,
    });
};
