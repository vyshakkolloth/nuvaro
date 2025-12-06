
import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const BlogSection = () => {
    const featuredPost = {
        title: 'Key Features of Regal Neo Windows & Doors',
        date: '25 August 2025',
        description: 'Your choice of windows and doors matters when it comes to creating a beautiful and functional home.',
        image: '/blogs/RegalNeo.png',
        link: '#'
    };

    const sidePosts = [
        {
            title: 'Maximizing Natural Light in Modern Spaces',
            date: '25 August 2025',
            description: 'Design strategies and technical insights for creating bright, energy-efficient interiors with advanced glazing.',
            image: '/blogs/NaturalLight.png',
            link: '#'
        },
        {
            title: 'Aluminium Systems: Engineering Excellence',
            date: '25 August 2025',
            description: 'Understanding the precision technology and manufacturing processes behind premium window and door systems.',
            image: '/blogs/AluminumSystem.png',
            link: '#'
        }
    ];

    return (
        <section className='w-full py-16 md:py-24 bg-[#F0F6FC]'>
            <div className='container mx-auto max-w-[1560px] px-6 md:px-[104px]'>
                <div className='flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6'>
                    <div>
                        <div className='mb-4'>
                            <span className='inline-block px-4 py-1.5 rounded-full border border-gray-400 text-xs font-bold uppercase tracking-wider text-slate-700'>
                                • BLOGS
                            </span>
                        </div>
                        <h2 className='text-3xl md:text-[36px] font-semibold text-slate-900 leading-[1.1] max-w-2xl'>
                            Take A look At Our Latest <br /> Blog & Articles.
                        </h2>
                    </div>

                    <Link href="#" className='bg-[#111827] text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-slate-800 transition-all duration-300'>
                        View More <ArrowUpRight size={18} />
                    </Link>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
                    <div className='flex flex-col group cursor-pointer'>
                        <div className='relative w-full h-[300px] md:h-[349px] lg:h-[349px] rounded-3xl overflow-hidden mb-6 aspect-[1.7335/1]'>
                            <Image
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                fill
                                className='object-cover transition-transform duration-500 group-hover:scale-105'
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>

                        <div className='space-y-3'>
                            <span className='text-sm text-slate-500 font-medium'>{featuredPost.date}</span>
                            <h3 className='text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors'>
                                {featuredPost.title}
                            </h3>
                            <p className='text-slate-600 leading-relaxed max-w-lg'>
                                {featuredPost.description}
                            </p>
                            <div className='pt-2'>
                                <span className='inline-flex items-center gap-2 text-slate-900 font-semibold text-sm group-hover:gap-3 transition-all'>
                                    Read More <ArrowUpRight size={16} className='bg-slate-900 text-white rounded-full p-0.5 w-5 h-5' />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-8'>
                        {sidePosts.map((post, index) => (
                            <div key={index} className='flex flex-col md:flex-row gap-6 group cursor-pointer items-start'>
                                <div className='relative w-full md:w-[280px] h-[200px] md:h-[180px] shrink-0 rounded-2xl overflow-hidden'>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className='object-cover transition-transform duration-500 group-hover:scale-105'
                                        sizes="(max-width: 768px) 100vw, 30vw"
                                    />
                                </div>

                                <div className='flex flex-col justify-center space-y-2 py-2'>
                                    <span className='text-sm text-slate-500 font-medium'>{post.date}</span>
                                    <h3 className='text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-900 transition-colors'>
                                        {post.title}
                                    </h3>
                                    <p className='text-sm text-slate-600 leading-relaxed line-clamp-2'>
                                        {post.description}
                                    </p>
                                    <div className='pt-2'>
                                        <span className='inline-flex items-center gap-2 text-slate-900 font-semibold text-sm group-hover:gap-3 transition-all'>
                                            Read More <ArrowUpRight size={16} className='bg-slate-900 text-white rounded-full p-0.5 w-5 h-5' />
                                        </span>
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

export default BlogSection;