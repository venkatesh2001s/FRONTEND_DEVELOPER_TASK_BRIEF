 "use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[94vh] overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,37,30,.9),rgba(23,37,30,.34)),url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=2200&q=85')] bg-cover bg-center" />
      <div className="absolute inset-0 noise opacity-60" />
      <div className="relative mx-auto flex min-h-[94vh] max-w-7xl flex-col justify-end px-5 pb-14 pt-36 lg:px-8 lg:pb-20">
        <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:.9}}>
          <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[.32em] text-saffron"><span className="h-px w-10 bg-saffron"/>Dehradun · India · Since 2012</p>
          <h1 className="display max-w-5xl text-6xl leading-[.9] tracking-[-.04em] sm:text-7xl lg:text-[8.5rem]">
            The Modern<br/><i className="font-normal text-saffron">Gurukul.</i>
          </h1>
          <div className="mt-9 flex flex-col justify-between gap-8 border-t border-white/20 pt-7 sm:flex-row sm:items-end">
            <p className="max-w-xl text-base leading-7 text-white/75 sm:text-lg">A place where academic excellence meets character, curiosity, sport and the confidence to shape a changing world.</p>
            <div className="flex gap-3">
              <a data-cursor href="#admissions" className="flex items-center gap-3 rounded-full bg-saffron px-6 py-4 font-bold text-ink">Explore TIS <ArrowUpRight size={18}/></a>
              <a data-cursor href="#story" className="grid h-14 w-14 place-items-center rounded-full border border-white/30 hover:bg-white/10" aria-label="Discover story"><Play size={17} fill="currentColor"/></a>
            </div>
          </div>
        </motion.div>
        <a href="#story" className="absolute bottom-7 right-8 hidden items-center gap-2 text-xs uppercase tracking-[.2em] text-white/60 lg:flex"><ArrowDown size={15}/> Scroll to explore</a>
      </div>
    </section>
  );
}
