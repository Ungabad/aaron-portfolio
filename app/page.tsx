"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Clients from "@/components/Clients";
import Experiance from "@/components/Experiance";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className='relative dark:text-white dark:bg-black-100 bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip'>
      <div className='max-w-7xl w-full'>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experiance />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
