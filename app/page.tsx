import Header from "@/components/home/Header";
import NeedHelpSection from "@/components/home/NeedHelpSection";
import Services from "@/components/home/Services";
import WhatWeDo from "@/components/home/WhatWeDo";

export default function Home() {
  return (
    <main className="bg-dark">
      <Header />
      <WhatWeDo />
      <Services />
      <NeedHelpSection />
    </main>
  );
}
