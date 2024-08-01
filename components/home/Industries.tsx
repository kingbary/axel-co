import React from 'react'
import SectionHeadings from '../commons/SectionHeadings'
import CarouselItems from '../commons/Carousel'

export default function Industries() {
    return (
        <section className='mb-[120px] pl-4 sm:pl-10 2xl:pl-20 overflow-hidden'>
            <div className='flex flex-col lg:flex-row'>
                <div className='lg:max-w-[45%] mb-6'>
                    <SectionHeadings heading='INDUSTRY' subheading='With specialized teams for each sector, We offer solutions designed to the unique needs across various industries.' />
                </div>
                <div className='h-[420px] sm:h-[580px] lg:h-[620px] w-full flex gap-10'>
                    <CarouselItems />
                </div>
            </div>
        </section>
    )
}
