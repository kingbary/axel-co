import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import DropDown from "../commons/DropDown";

export default function Header() {
    return (
        <div className="h-screen pb-8 overflow-hidden">
            <div className="w-full p-4 flex items-center justify-between sm:px-10 2xl:px-20 md:py-5">
                <div className="instrument-sans flex items-center gap-16 text-white font-medium text-lg">
                    <Link href={"/"} className="hover:opacity-80">
                        <Image src={"/assets/icons/logo.png"} width={129} height={42} alt="Axel logo" />
                    </Link>
                    <div className="hidden lg:block">
                        <ul className="flex gap-[38px]">
                            <li>
                                <DropDown />
                            </li>
                            <li>
                                <Link href={"/capability"} className="flex items-center">Capabilities</Link>
                            </li>
                            <li>
                                <Link href={"/portfolio"} className="flex items-center">Portfolio</Link>
                            </li>
                            <li>
                                <Link href={"/about-us"} className="flex items-center">About us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Button className="hidden lg:block">Get in touch</Button>
                <button className="lg:hidden"><Image src={"/assets/icons/hamburger.png"} width={24} height={24} alt="hambuger" /> </button>
            </div>
            <div className="flex items-center h-full pb-8 -mt-4">
                <div className="text-white px-4 sm:px-10 2xl:px-20 sm:max-w-[70%] lg:max-w-[60%]">
                    <h1 className="text-[44px] sm:text-6xl lg:text-[80px] tracking-tight leading-[110%] font-normal">Driving Innovation For a Better Future</h1>
                    <p className="instrument-sans sm:max-w-[80%] lg:max-w-[60%] mt-5 2xl:text-xl">At AxelCo, we bring transformation across African industries with AI-driven innovation, tech-enabled solutions, and a commitment to social impact.</p>
                    <div className="mt-12">
                        <Button>Get in touch</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
