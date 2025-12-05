'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServiceSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const leftColRef = useRef<HTMLDivElement>(null);
    const rightColRef = useRef<HTMLDivElement>(null);
    const centerImgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const leftCol = leftColRef.current;
        const rightCol = rightColRef.current;
        const centerImg = centerImgRef.current;

        if (!section || !leftCol || !rightCol || !centerImg) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                centerImg,
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top bottom',
                        end: 'center center',
                        scrub: 1,
                    },
                }
            );

            gsap.fromTo(
                leftCol.children,
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top bottom',
                        end: 'center center',
                        scrub: 1,
                    },
                }
            );

            gsap.fromTo(
                rightCol.children,
                { x: 50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top bottom',
                        end: 'center center',
                        scrub: 1,
                    },
                }
            );
        }, section);

        return () => ctx.revert();
    }, []);

    const servicesLeft = [
        {
            title: 'Energy Efficient',
            desc: 'Helps you save energy without sacrificing comfort.',
            icon: '/service/EnergyEfficient.png',
        },
        {
            title: 'Custom Designs',
            desc: 'Tailored to fit your style, space, and vision.',
            icon: '/service/CustomDesign.png',
        },
        {
            title: 'Superior Quality',
            desc: 'Unmatched durability, precision, and finish.',
            icon: '/service/SuperiorQuality.png',
        },
    ];

    const servicesRight = [
        {
            title: 'Professional Installation',
            desc: 'Expertly installed for perfect fit and lasting performance.',
            icon: '/service/professionalInstallation.png',
        },
        {
            title: 'Premium Logistics & Delivery',
            desc: 'Reliable, on-time delivery with care at every step.',
            icon: '/service/PremiumLogistics.png',
        },
        {
            title: 'Extended Warranty Programs',
            desc: 'Comprehensive coverage that lasts well beyond installation.',
            icon: '/service/Warranty.png',
        },
    ];

    return (
        <section
            ref={sectionRef}
            className='relative w-full min-h-screen flex flex-col justify-center py-12 lg:py-0 overflow-hidden bg-[#F0F6FC]'
        >
            {/* Background Image */}
            <div className='absolute inset-0 w-full h-full z-0 pointer-events-none'>
                <Image
                    src='/service/NuvaroServicesBackground.png'
                    alt='Background'
                    fill
                    quality={90}
                    priority
                    className='object-cover opacity-60'
                />
            </div>

            <div className='relative z-10 container mx-auto max-w-[1560px] px-6 md:px-[104px]'>
                <div className='flex flex-col md:flex-row justify-between items-start mb-8 lg:mb-12 gap-6'>
                    <div className='max-w-xl'>
                        <div className='inline-block px-4 py-1.5 rounded-full border border-slate-400/50 text-xs font-bold uppercase tracking-wider mb-4 text-slate-700 bg-white/40 backdrop-blur-sm'>
                            • Our Commitment
                        </div>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 leading-[1.1]'>
                            Why Choose <br className='hidden md:block' /> NUVARO Services?
                        </h2>
                    </div>
                    <div className='max-w-md mt-2 md:mt-8 text-slate-600 text-sm md:text-base leading-relaxed'>
                        At NUVARO, we go beyond distribution. Our comprehensive service
                        ecosystem ensures that every project receives end-to-end
                        support, from selection and logistics to installation and
                        after-sales service.
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-8 items-center'>
                    {/* Left Column */}
                    <div
                        ref={leftColRef}
                        className='col-span-1 md:col-span-3 lg:col-span-3 space-y-8 lg:space-y-10'
                    >
                        {servicesLeft.map((service, idx) => (
                            <div
                                key={idx}
                                className='flex flex-col items-start text-left group'
                            >
                                <div className='mb-3 lg:mb-4 relative w-12 h-12 lg:w-14 lg:h-14 transition-transform duration-300 group-hover:scale-110'>
                                    <Image
                                        src={service.icon}
                                        alt={service.title}
                                        width={56}
                                        height={56}
                                        className='object-contain'
                                    />
                                </div>
                                <h3 className='text-lg md:text-xl font-bold text-slate-900 mb-2'>
                                    {service.title}
                                </h3>
                                <p className='text-sm text-slate-600 leading-relaxed'>
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Center Image */}
                    <div
                        ref={centerImgRef}
                        className='col-span-1 md:col-span-6 lg:col-span-6 flex justify-center relative py-6 md:py-0'
                    >
                        <div className='relative w-full h-[300px] md:h-[500px] lg:h-[600px] flex items-center justify-center'>
                            <Image
                                src='/service/AluminumDoor.png'
                                alt='Nuvaro Aluminum Door'
                                width={800}
                                height={800}
                                className='object-contain drop-shadow-2xl h-full w-auto'
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div
                        ref={rightColRef}
                        className='col-span-1 md:col-span-3 lg:col-span-3 space-y-8 lg:space-y-10'
                    >
                        {servicesRight.map((service, idx) => (
                            <div
                                key={idx}
                                className='flex flex-col items-start text-left group'
                            >
                                <div className='mb-3 lg:mb-4 relative w-12 h-12 lg:w-14 lg:h-14 transition-transform duration-300 group-hover:scale-110'>
                                    <Image
                                        src={service.icon}
                                        alt={service.title}
                                        width={56}
                                        height={56}
                                        className='object-contain'
                                    />
                                </div>
                                <h3 className='text-lg md:text-xl font-bold text-slate-900 mb-2'>
                                    {service.title}
                                </h3>
                                <p className='text-sm text-slate-600 leading-relaxed'>
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='mt-10 lg:mt-12 text-center'>
                    <button className='bg-[#111827] text-white px-8 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-slate-800 transition-all duration-300 hover:scale-105 shadow-lg text-sm md:text-base'>
                        Get a Quote <ArrowUpRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;