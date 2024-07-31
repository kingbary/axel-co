import Image from 'next/image'
import { Button } from '../ui/button'

export default function NeedHelpSection() {
    return (
        <section className='mt-6 sm:mt-12 bg-[url(/assets/images/curious-section-bg.png)] bg-cover bg-cent bg-[50%] py-[55px] sm:py-20 px-4 sm:px-10 2xl:px-20'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <Image src={"/assets/icons/logo.png"} width={149} height={48} alt='Axel logo' className='mb-6' />
                <div>
                    <h2 className='mb-8 text-sleekWhite text-3xl lg:text-4xl'>Curious how we can help? Get in touch and see the difference.</h2>
                    <Button>Get in touch</Button>
                </div>
            </div>
        </section>
    )
}
