import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PartnersSection = () => {
    return (
        <section className="relative w-full overflow-hidden text-white">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    {/* Lazy load video source after 3 seconds */}
                    <source src="https://res.cloudinary.com/dwyliypig/video/upload/v1764932018/BG_VIDEO_nv3u19.mp4" type="video/mp4" />
                </video>
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full px-[104px] py-[158px]">
                <div className="max-w-[600px]">
                    {/* Label */}
                    <div className="inline-block border border-white/30 rounded-full px-4 py-1.5 mb-6">
                        <span className="text-xs tracking-wider uppercase flex items-center gap-2">
                            <span className="w-1 h-1 bg-white rounded-full"></span>
                            PARTNERS
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-5xl font-bold mb-6">
                        Only Trusted Partners
                    </h2>

                    {/* Description */}
                    <p className="text-gray-200 text-lg leading-relaxed mb-12">
                        NUVARO works with leading global suppliers and studios to deliver premium doors, windows, and fittings ensuring every project meets the highest standards.
                    </p>

                    {/* Logos */}
                    <div className="flex items-center gap-8 mb-12">
                        <div className="relative h-12 w-32">
                            <Image
                                src="/icon/AluPure.png"
                                alt="AluPure"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <div className="relative h-12 w-40">
                            <Image
                                src="/projects/komerling.png"
                                alt="Kommerling"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                    </div>

                    {/* Button */}
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-2 border border-white/30 rounded-full px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300 group"
                    >
                        <span>Explore More Products</span>
                        <svg
                            className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 17L17 7M17 7H7M17 7V17"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default PartnersSection