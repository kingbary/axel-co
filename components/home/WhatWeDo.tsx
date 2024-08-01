import React from 'react'
import SectionHeadings from '../commons/SectionHeadings'

export default function WhatWeDo() {
    return (
        <section className="bg-dark text-sleekWhite py-16 px-4 sm:px-10 2xl:px-20 sm:py-20 2xl:py-[120px]">
            <SectionHeadings heading='WHAT WE DO' subheading='AxelCo is dedicated to empowering businesses for a thriving future through technology-driven solutions, consulting, and digital transformation services for leading African enterprises, with a focus on creating social impact.' />
            <div className='flex flex-col lg:flex-row justify-between gap-4 mt-8 md:mt-16'>
                <div className='bg-purple-gradient bg-[url(/assets/images/ai-driven.png)] bg-cover bg-[50%] flex items-end py-6 md:items-center justify-center text-white text-4xl h-[360px] px-6 w-full lg:w-[416px]'>
                    <div>
                        <p>AI-Driven</p>
                        <p className='text-xl leading-6 md:hidden'>We leverage cutting-edge technology designed to meet your business needs.</p>
                    </div>
                </div>
                <div className='bg-purple-gradient bg-[url(/assets/images/tech-enable.png)] bg-cover bg-[50%] flex items-end py-6 md:items-center justify-center text-white text-4xl h-[360px] px-6 w-full lg:w-[416px]'>
                    <div>
                        <p>Tech-Enable</p>
                        <p className='text-xl leading-6 md:hidden'>Advanced tech solutions designed to enhance your operations. </p>
                    </div>
                </div>
                <div className='bg-purple-gradient bg-[url(/assets/images/socially-driven.png)] bg-cover bg-[50%] flex items-end py-6 md:items-center justify-center text-white text-4xl h-[360px] px-6 w-full lg:w-[416px]'>
                    <div>
                        <p>Socially-Driven</p>
                        <p className='text-xl leading-6 md:hidden'>Dedicated to creating positive social change through innovative solutions.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
