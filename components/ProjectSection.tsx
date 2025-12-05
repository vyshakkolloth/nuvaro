"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const projects = [
    {
        id: 1,
        title: "Premium Casement Window",
        category: "RESIDENTIAL",
        location: "Kerala, 2025",
        image: "/projects/premiumCasementWindow.jpg",
    },
    {
        id: 2,
        title: "Sliding Folding Door",
        category: "RESIDENTIAL",
        location: "Kerala, 2025",
        image: "/projects/SlideFolding.jpg",
    },
    {
        id: 3,
        title: "Premium Interlock",
        category: "RESIDENTIAL",
        location: "Kerala, 2025",
        image: "/projects/interLock.jpg",
    },
    {
        id: 4,
        title: "Cascade Project",
        category: "COMMERCIAL",
        location: "Kerala, 2025",
        image: "/projects/casadeProject.jpg",
    },
    {
        id: 5,
        title: "Sliding Folding Window",
        category: "RESIDENTIAL",
        location: "Kerala, 2025",
        image: "/projects/slideFoldingWindow.jpg",
    },
];

const ProjectSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const { contextSafe } = useGSAP({ scope: containerRef });

    const handleNext = contextSafe(() => {
        if (currentIndex < projects.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        }
    });

    const handlePrev = contextSafe(() => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    });

    useEffect(() => {
        if (trackRef.current) {
            const cardWidth = trackRef.current.children[0]?.clientWidth || 0;
            const gap = 24;
            const x = -(currentIndex * (cardWidth + gap));

            gsap.to(trackRef.current, {
                x: x,
                duration: 0.8,
                ease: "power3.out",
            });
        }
    }, [currentIndex]);

    return (
        <section ref={containerRef} className="py-[70px] max-w-[1440px] mx-auto bg-white overflow-hidden">
            <div className="container px-[101px] mx-auto md:px-8 ">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                    <div className="max-w-2xl">
                        <div className="inline-block px-4 py-1.5 rounded-full border border-gray-300 text-xs font-medium tracking-wider mb-6">
                            ✦ OUR PROJECTS
                        </div>
                        <h2 className="text-4xl md:text-5xl font-medium text-black leading-tight">
                            Creative Projects That <br /> Define Our Style
                        </h2>
                    </div>

                    <div className="flex gap-4 mt-8 md:mt-0">
                        <button
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            className={`w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center group transition-colors duration-300 ${currentIndex === 0
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-gray-50 cursor-pointer"
                                }`}
                        >
                            <ArrowUpRight
                                className="w-6 h-6 text-gray-700 transition-transform duration-300 transform -rotate-90 group-hover:-rotate-135"
                            />
                        </button>

                        <button
                            onClick={handleNext}
                            disabled={currentIndex >= projects.length - 2}
                            className={`w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center group transition-colors duration-300 ${currentIndex >= projects.length - 2
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-gray-50 cursor-pointer"
                                }`}
                        >
                            <ArrowUpRight
                                className="w-6 h-6 text-gray-700 transition-transform duration-300 group-hover:rotate-45"
                            />
                        </button>
                    </div>
                </div>

                <div className="relative w-full overflow-hidden">
                    <div
                        ref={trackRef}
                        className="flex gap-6"
                    >
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="relative w-[85vw] md:w-[calc(50%-12px)] h-[300px] md:h-[400px] rounded-2xl overflow-hidden group shrink-0"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-80" />

                                <div className="absolute top-6 left-6">
                                    <span className="px-3 py-1 rounded-full border border-white/30 text-white text-[10px] tracking-widest uppercase backdrop-blur-sm">
                                        {project.category}
                                    </span>
                                </div>

                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-xl md:text-2xl font-medium mb-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-white/80">{project.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex items-center justify-between relative">
                    <button className="px-8 py-3 bg-[#1A2333] text-white rounded-full flex items-center gap-2 text-sm font-medium hover:bg-black transition-colors duration-300 group">
                        View All Projects
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>

                    <div className="flex gap-2 absolute left-1/2 transform -translate-x-1/2">
                        {projects.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-[#1A2333]' : 'w-1.5 bg-gray-300'}`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
