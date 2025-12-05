"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

const SignatureCollection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            });

            tl.from(
                ".signature-card",
                {
                    y: 100,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                },
            );
        },
        { scope: containerRef }
    );

    const doors = [
        { id: 1, src: "/aluminiumDoor.jpg", title: "Sliding System", icon: "/icon/aluminium.png" },
        { id: 2, src: "/casementDoor.jpg", title: "Casement System", icon: "/icon/casement.png" },
        { id: 3, src: "/faradesDoor.jpg", title: "Facades", icon: "/icon/facads.png" },
        { id: 4, src: "/foldingDoor.jpg", title: "Folding door", icon: "/icon/fold.png" },
        { id: 5, src: "/interLockDoor.jpg", title: "Interlock System", icon: "/icon/interLock.png" },
        { id: 6, src: "/slidingDoor.jpg", title: "Sliding System", icon: "/icon/sliding.png" },
    ];

    return (
        <section
            ref={containerRef}
            className="w-full    relative"
        >


            {/* Accordion Container */}
            <div className="flex flex-col lg:flex-row gap-4 h-[560px] w-full">
                {doors.map((door) => (
                    <div
                        key={door.id}
                        className="signature-card relative flex-1 hover:flex-[2.5] transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] 
                        rounded-3xl overflow-hidden group cursor-pointer"
                    >
                        <Image
                            src={door.src}
                            alt={door.title}
                            fill
                            className="object-cover transition-transform duration-700 "
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/60 transition-all duration-500" />

                        {/* Centered Button with Slide-in Animation */}
                        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-35 group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:opacity-100 transition-all duration-700 ease-out z-10">
                            <Button className="rounded-full px-6 py-6 bg-white text-black hover:bg-blue-500 hover:text-white transition-colors duration-300 flex items-center gap-2">
                                <span className="text-lg font-medium">View More</span>
                                <ArrowUpRight className="w-5 h-5" />
                            </Button>
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end items-start aspect-560/198">
                            <Image
                                src={door.icon}
                                alt="Door icon"
                                width={52}
                                height={52}
                                className="mb-4 opacity-70 group-hover:opacity-100 transition-opacity"
                            />

                            <h3 className="text-[20px] font-normal leading-[24px] tracking-[0.005em] font-titillium text-white mb-2 whitespace-nowrap opacity-90 group-hover:opacity-100 transition-opacity">
                                {door.title}
                            </h3>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SignatureCollection;
