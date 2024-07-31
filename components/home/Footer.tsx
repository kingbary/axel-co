import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='md:max-w-[45%] p-0 md:pr-10'>
                    <h3 className='text-sleekWhite text-3xl lg:text-4xl mb-7'>Subscribe to our newsletter for industry insights and company news!</h3>
                    <form action="" method='post'>
                        <div className='flex w-full md:w-5/6 gap-3'>
                            <div className='w-full'>
                                <label htmlFor="emailAddress"></label>
                                <input type="email" id='emailAddress' name='emailAddress' className='instrument-sans bg-dark/80 text-sleekWhite w-full h-12 p-3 rounded-sm outline-none border border-sleekWhite' placeholder='Enter your email address' />
                            </div>
                            <Button>Subscribe</Button>
                        </div>
                    </form>
                </div>
                <div className='md:w-3/5 grid grid-cols-1 sm:grid-cols-3 text-sleekWhite/70'>
                    <div>
                        <h5 className='text-xl md:text-2xl my-6 md:m-0'>Capabilities</h5>
                        <div className='instrument-sans flex flex-col gap-2'>
                            <Link href={"#"}>Analytics & Research</Link>
                            <Link href={"#"}>Product Development</Link>
                            <Link href={"#"}>Training</Link>
                            <Link href={"#"}>Procurement</Link>
                            <Link href={"#"}>Infrastructure Support</Link>
                            <Link href={"#"}>Digital Transformation</Link>
                        </div>
                    </div>
                    <div>
                        <h5 className='text-xl md:text-2xl my-6 md:m-0'>Industries</h5>
                        <div className='instrument-sans flex flex-col gap-2'>
                            <Link href={"#"}>Agro</Link>
                            <Link href={"#"}>Renewable energy</Link>
                            <Link href={"#"}>Healthcare</Link>
                            <Link href={"#"}>Infrastructure</Link>
                            <Link href={"#"}>Media</Link>
                        </div>
                    </div>
                    <div>
                        <h5 className='text-xl md:text-2xl my-6 md:m-0'>Company</h5>
                        <div className='instrument-sans flex flex-col gap-2'>
                            <Link href={"#"}>About us</Link>
                            <Link href={"#"}>Contact</Link>
                            <Link href={"#"}>Blog</Link>
                            <Link href={"#"}>Privacy policy</Link>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div >
            <div className='flex items-center justify-between mt-14 text-sleekWhite/70'>
                <small className='text-base'>Copyright © 2024 AXEL CO. - All rights reserved.</small>
                <div className='flex gap-3'>
                    <Link href={"#"}>
                        <Image src={"/assets/icons/linkedin-icon.svg"} width={32} height={32} alt='' />
                    </Link>
                    <Link href={"#"}>
                        <Image src={"/assets/icons/x-icon.svg"} width={32} height={32} alt='' />
                    </Link>
                    <Link href={"#"}>
                        <Image src={"/assets/icons/facebook-icon.svg"} width={32} height={32} alt='' />
                    </Link>
                    <Link href={"#"}>
                        <Image src={"/assets/icons/youtube-icon.svg"} width={32} height={32} alt='' />
                    </Link>
                </div>
            </div>
        </>
    )
}
