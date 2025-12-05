
import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'
import { Button } from './ui/button'

const HeroSection = () => {
  return (
    <section className="max-w-[1560px] w-full h-svh m-auto relative">
      <Image
        src="/hero_backgroud.jpg"
        alt="Engineering Precision, Framing Tomorrow"
        className="object-cover absolute -z-10"
        fill
        priority
        quality={90}
        sizes="100vw"
      />
      <div className="-z-2 absolute inset-0 bg-linear-to-r from-black via-black/50 to-black/0"></div>

      <Navbar />

      <div className="px-6 md:px-[104px] flex items-center justify-center h-full pt-20 md:pt-0">
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col gap-6 justify-center text-center md:text-left items-center md:items-start">
            <h1 className="font-titillium font-semibold text-[40px] md:text-[56px] leading-tight md:leading-[74px] tracking-tighter text-white">
              Engineering Precision,<br /> Framing Tomorrow.
            </h1>
            <p className="font-titillium font-medium text-[16px] md:text-[18px] leading-[25px] text-white/90 max-w-lg">
              Precision-engineered aluminum solutions for modern architecture.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 mt-4">
              <Button variant="outline" size="sp" className="w-full sm:w-auto">Explore our Products</Button>
              <Button variant="outline" size="sp" className="w-full sm:w-auto">View our Projects</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection