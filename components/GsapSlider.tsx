"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function GsapSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const images = [
    "/door1.png",
    "/door2.png",
    "/door3.png",
    "/door4.png",
  ];


  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const slides = slider.querySelectorAll(".slide");

    const total = slides.length;
    const slideWidth = slider.offsetWidth;

    // Stack slides horizontally
    gsap.set(slides, {
      x: (i) => i * slideWidth,
    });

    // Timeline for infinite sliding
    const tl = gsap.timeline({ repeat: -1 });

    for (let i = 0; i < total; i++) {
      tl.to(slides, {
        x: `-=${slideWidth}`,       // move left
        duration: 2.2,
        ease: "power2.inOut",      // ease-in-out smoothing
      })
        .set(slides[i], {
          x: (total - 1) * slideWidth, // move old slide to the right end
        });
    }

  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl" ref={sliderRef}>
      {images.map((src, i) => (
        <div key={i} className="slide absolute top-0 left-0 w-full h-full">
          <Image
            src={src}
            alt={`slide-${i}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
