"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, ArrowLeft, ArrowUpLeft, Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        image: "/faq/craftManShip.png",
        title: "Outstanding Quality and Craftsmanship",
        quote: "The quality of Nuvaro's products is truly exceptional. Every corner, hinge, and frame reflects thoughtful engineering and craftsmanship. The materials feel sturdy and premium, and the finish has a level of refinement that stands out instantly.",
        author: "Karan Mehta",
        location: "Kasargod, Kerala",
    },
    {
        id: 2,
        image: "/faq/craftManShip.png",
        title: "Exceptional Service and Design",
        quote: "Nuvaro transformed our home with their stunning designs. The attention to detail is unmatched, and the team was incredibly professional throughout the entire process.",
        author: "Aditi Sharma",
        location: "Kochi, Kerala",
    },
];

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    return (
        <section className="w-full py-16 px-4 md:px-12 lg:px-24 bg-white text-black overflow-hidden relative z-10">
            <div className="max-w-[1440px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div className="space-y-4">
                        <div className="inline-block border border-gray-800 rounded-full px-4 py-1 text-xs font-semibold tracking-wider uppercase">
                            • Our Clients Say
                        </div>
                        <h2 className="text-4xl md:text-5xl font-medium leading-tight">
                            Here’s What <br /> Our Clients Say
                        </h2>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={handlePrev}
                            className="group w-14 h-14 rounded-full bg-[#F3F4F6] flex items-center justify-center transition-all duration-300 hover:bg-gray-200 cursor-pointer text-black"
                            aria-label="Previous testimonial"
                        >
                            <div className="relative w-6 h-6 flex items-center justify-center">
                                <ArrowUpLeft className="absolute transition-all duration-300 opacity-100 group-hover:opacity-0 rotate-0" />
                                <ArrowLeft className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100" />
                            </div>
                        </button>
                        <button
                            onClick={handleNext}
                            className="group w-14 h-14 rounded-full bg-[#F3F4F6] flex items-center justify-center transition-all duration-300 hover:bg-gray-200 cursor-pointer text-black"
                            aria-label="Next testimonial"
                        >
                            <div className="relative w-6 h-6 flex items-center justify-center">
                                <ArrowUpRight className="absolute transition-all duration-300 opacity-100 group-hover:opacity-0 rotate-0" />
                                <ArrowRight className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100" />
                            </div>
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden rounded-4xl bg-gray-50">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {testimonials.map((testimonial, idx) => (
                            <div
                                key={testimonial.id}
                                className="min-w-full grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[500px]"
                            >
                                <div className="relative h-[400px] lg:h-auto w-full bg-gray-200">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.title || "Testimonial"}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        priority={idx === 0}
                                    />
                                </div>

                                <div className="relative bg-[#1a2b3c] text-white p-8 md:p-12 flex flex-col justify-center">
                                    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                                        <Image
                                            src="/faq/background.png"
                                            alt="Pattern"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="relative z-10 space-y-8">
                                        <Quote className="w-10 h-10 text-blue-200/80" />

                                        <div className="space-y-4">
                                            <h3 className="text-xl font-semibold">
                                                {testimonial.title}
                                            </h3>
                                            <p className="text-gray-300 leading-relaxed text-sm md:text-base italic">
                                                “{testimonial.quote}”
                                            </p>
                                        </div>

                                        <div className="pt-4 border-t border-white/10">
                                            <p className="font-medium text-white">
                                                {testimonial.author}
                                            </p>
                                            <p className="text-sm text-gray-400">
                                                {testimonial.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;