import React from 'react'
import Headings from '../commons/Headings'
import { Button } from '../ui/button'

export default function Services() {
    return (
        <section className='pl-4 sm:pl-10 2xl:pl-20 py-[53px] sm:py-[187px] bg-[url(/assets/images/services-bg.png)] bg-black/70 bg-cover bg-center'>
            <div className='flex flex-col gap-12 sm:max-w-[55%]'>
                <Headings heading='SERVICES' subheading='AxelCo is dedicated to providing a diverse set of capabilities tailored to meet the unique needs of businesses operating across different industries.' />
                <Button className='w-fit'>All services</Button>
            </div>
        </section>
    )
}
