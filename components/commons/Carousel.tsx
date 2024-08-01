import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export default function CarouselItems() {
    return (
        <Carousel className='w-full'>
            <CarouselContent>
                <CarouselItem className="basis-4/5 lg:basis-2/3">
                    <div className='flex bg-[url(/assets/images/agriculture.png)] bg-cover bg-[50%] h-[296px] sm:h-[450px] lg:h-[570px] w-full overflow-hidden'>
                    </div>
                    <Link href={"#"} className='flex justify-between mt-3 text-sleekWhite'>
                        <span className='text-2xl'>Agriculture</span>
                        <span className='instrument-sans hidden sm:flex items-center gap-2'>View industry <ArrowUpRight size={18} /></span>
                    </Link>
                </CarouselItem>
                <CarouselItem className="basis-4/5 lg:basis-2/3">
                    <div className='flex bg-[url(/assets/images/infrastructure.png)] bg-cover bg-[50%] h-[296px] sm:h-[450px] lg:h-[570px] w-full overflow-hidden'>
                    </div>
                    <Link href={"#"} className='flex justify-between mt-3 text-sleekWhite'>
                        <span className='text-2xl'>Infrastructure</span>
                        <span className='instrument-sans hidden sm:flex items-center gap-2'>View industry <ArrowUpRight size={18} /></span>
                    </Link>
                </CarouselItem>
                <CarouselItem className="basis-4/5 lg:basis-2/3 pr-4 sm:pr-10">
                    <div className='flex bg-[url(/assets/images/agriculture.png)] bg-cover bg-[50%] h-[296px] sm:h-[450px] lg:h-[570px] w-full overflow-hidden'>
                    </div>
                    <Link href={"#"} className='flex justify-between mt-3 text-sleekWhite'>
                        <span className='text-2xl'>Agriculture</span>
                        <span className='instrument-sans hidden sm:flex items-center gap-2'>View industry <ArrowUpRight size={18} /></span>
                    </Link>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className='size-12 -left-0 lg:-left-[360px] xl:-left-[560px] 2xl:-left-[710px]' />
            <CarouselNext className='size-12 left-16 lg:-left-[300px] xl:-left-[500px] 2xl:-left-[650px]' />
        </Carousel>

    )
}
