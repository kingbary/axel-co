import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Industries from "@/components/home/Industries";
import NeedHelpSection from "@/components/home/NeedHelpSection";
import Services from "@/components/home/Services";
import WhatWeDo from "@/components/home/WhatWeDo";
import { useEffect } from "react";
// import AOS from "aos";

export default function Home() {
  // useEffect(() => {
  //   AOS.init({
  //     offset: 200,
  //     duration: 600,
  //     easing: 'ease-in-sine',
  //     delay: 100,
  //   });
  // })
  return (
    <>
      <header className="hero-bg min-h-screen bg-center">
        <Header />
      </header>
      <main className="bg-dark">
        <WhatWeDo />
        <Industries />
        <Services />
        <NeedHelpSection />
      </main>
      <footer className='bg-dark py-[55px] sm:py-20 px-4 sm:px-10 2xl:px-20'>
        <Footer />
      </footer>
    </>
  );
}
