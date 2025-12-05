
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { Eye, Award, Radar, Building2 } from "lucide-react"
import GsapSlider from './GsapSlider'

const AboutSection = () => {
    const card = [
        { name: "Our History", logo: Building2, describistion: "Born to redefine living with German engineering and Indian excellence." },
        { name: "Our Vision", logo: Eye, describistion: "We deliver sustainable solutions that improve homes and save energy." },
        { name: "Our Mission", logo: Radar, describistion: "Durable, eco-friendly windows in premium uPVC and aluminium." },
        { name: "Our Value", logo: Award, describistion: "NUVARO: Sustainable windows and doors for modern living." }
    ]

    return (
        <section className="max-w-[1560px] w-full min-h-svh mx-auto relative overflow-hidden">
            <Image
                src="/AboutStruture.png"
                alt="About Nuvaro"
                className="object-cover absolute -z-10"
                fill
                quality={80}
                sizes="(max-width: 768px) 100vw, 100vw"
            />

            <div className="h-full pt-[80px] md:pt-[100px] pb-[80px] md:pb-[100px] px-6 md:px-[104px]">
                <div className="mb-10">
                    <Button variant="outline" className='text-black bg-white hover:bg-gray-100' size="sp">• ABOUT NUVARO </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-10 lg:gap-1.5">

                    <div className="flex flex-col justify-between">
                        <h2 className="text-[32px] md:text-[40px] font-semibold leading-tight text-white md:text-black shadow-black md:shadow-none drop-shadow-md md:drop-shadow-none">
                            Windows and doors built on<br />
                            trust, designed to protect<br />
                            your future.
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 md:mt-[69px] mb-8">
                            {card.map((item) => (
                                <div key={item.name} className="rounded-[12px] p-6 bg-secondary/90 md:bg-secondary flex flex-col gap-4">
                                    <div className=""><item.logo className="w-8 h-8" /></div>
                                    <h3 className="text-[20px] md:text-[24px] font-semibold leading-7">{item.name}</h3>
                                    <p className="text-[16px] md:text-[18px] leading-relaxed opacity-80">{item.describistion}</p>
                                </div>
                            ))}
                        </div>

                        <div className="">
                            <Button variant="secondary" size="sp">
                                • READ MORE
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col lg:pl-[65px] gap-8">
                        <p className="text-[16px] md:text-[18px] leading-7 text-white md:text-black">
                            Whether it’s your home, office, or a
                            commercial project, we are always dedicated to bringing your vision to life. Our numbers speak better than words
                        </p>
                        <GsapSlider />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection