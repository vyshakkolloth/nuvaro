
import React from 'react'
import SignatureCollection from './SignatureCollection'
import { Button } from './ui/button'
import { ArrowRightIcon } from 'lucide-react'

const SolutionSection = () => {
  return (
    <section className="max-w-[1560px] w-full bg-secondary min-h-svh relative mx-auto">
      <div className="h-full pt-[60px] px-6 md:px-[101px] pb-[60px]">
        <div className="flex flex-col items-center mb-12">
          <Button variant="outline" className='rounded-full text-xs md:text-sm' size="sp"> PREMIUM SOLUTIONS </Button>
          <h2 className="text-[32px] md:text-[40px] font-semibold leading-tight text-center mb-4 mt-6">
            The Signature Collection <br />
            <span className="text-gray-600">A ShowCase of Our Finest Creations.</span>
          </h2>
        </div>

        <SignatureCollection />

        <div className="flex flex-col items-center mb-12 my-[60px]">
          <Button variant="outline" className='rounded-full flex items-center gap-2 group' size="lg">
            Explore More product
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SolutionSection