'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';

const QueriesSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: 'What products does NUVARO offer?',
            answer: 'NUVARO specializes in premium doors and windows, including sliding, casement, bi-fold, and façade systems.',
        },
        {
            question: 'Do you provide installation services?',
            answer: 'Yes, we provide professional installation services to ensure your products are set up correctly and efficiently.',
        },
        {
            question: 'Where are NUVARO outlets located?',
            answer: 'We have outlets in major cities. Please check our website or contact us for the nearest location.',
        },
        {
            question: 'Can NUVARO handle large commercial projects?',
            answer: 'Absolutely. We have extensive experience in handling large-scale commercial projects with customized solutions.',
        },
        {
            question: 'How can I request a quote?',
            answer: 'You can request a quote by visiting our website, calling our support line, or visiting one of our showrooms.',
        },
    ];

    return (
        <section className='relative w-full py-16 md:py-24 bg-white overflow-hidden'>
            {/* Background Image */}
            <div className='absolute inset-0 w-full h-full z-0 pointer-events-none'>
                <Image
                    src='/AboutStruture.png'
                    alt='Background'
                    fill
                    className='object-cover opacity-40'
                    priority
                />
            </div>

            <div className='relative z-10 container mx-auto max-w-[1560px] px-6 md:px-[104px]'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24'>
                    {/* Left Column */}
                    <div className='flex flex-col items-start'>
                        <div className='mb-6'>
                            <span className='inline-block px-5 py-2 rounded-full border border-gray-300 text-xs font-bold uppercase tracking-wider text-slate-700 bg-white/80 backdrop-blur-sm'>
                                • Popular Queries
                            </span>
                        </div>

                        <h2 className='text-3xl md:text-5xl font-semibold text-slate-900 leading-[1.1] mb-16'>
                            Quick and clear answers to your key questions
                        </h2>

                        <div className=' backdrop-blur-sm p-0 rounded-xl mt-auto'>
                            <h3 className='text-xl md:text-xl font-semibold text-slate-900 mb-2'>
                                You have different questions?
                            </h3>
                            <p className='text-slate-600 mb-6 text-sm leading-relaxed max-w-xs'>
                                Our team will answer all your questions, we ensure a quick response.
                            </p>

                            <div className='text-slate-900 font-medium text-sm'>
                                Call us : <span className='font-bold'>+91 9037 259393</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Accordion */}
                    <div className='flex flex-col space-y-4'>
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`border rounded-2xl transition-all duration-300 ${openIndex === index
                                    ? 'bg-slate-50/90 border-gray-200'
                                    : 'bg-white/90 border-gray-100 hover:border-gray-200'
                                    } backdrop-blur-sm`}
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className='w-full flex items-center justify-between p-6 md:p-6 text-left'
                                >
                                    <span className='text-lg md:text-xl font-semibold text-slate-900 pr-8'>
                                        {faq.question}
                                    </span>
                                    <div className='shrink-0'>
                                        {openIndex === index ? (
                                            <div className='w-8 h-8 md:w-10 md:h-10 rounded-full border border-slate-900 flex items-center justify-center transition-transform duration-300 rotate-0'>
                                                <Minus size={20} className="text-slate-900" />
                                            </div>
                                        ) : (
                                            <div className='w-8 h-8 md:w-10 md:h-10 rounded-full border border-slate-300 flex items-center justify-center transition-transform duration-300 rotate-0 hover:border-slate-900'>
                                                <Plus size={20} className="text-slate-900" />
                                            </div>
                                        )}
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className='px-6 md:px-8 pb-6 md:pb-8 pt-0 text-slate-600 leading-relaxed border-t border-gray-200 mx-6 md:mx-8 mt-2'>
                                        <div className="pt-4">
                                            {faq.answer}
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

export default QueriesSection;