 "use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./ClientUI";

const links = [
  ["Story", "#story"],
  ["Life", "#life"],
  ["Academics", "#academics"],
  ["Admissions", "#admissions"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <a href="#" className="group flex items-center gap-3 text-white" data-cursor>
          <span className="grid h-11 w-11 place-items-center rounded-full border border-white/40 text-lg font-bold">T</span>
          <span className="leading-none"><b className="block tracking-[.22em]">TULA&apos;S</b><small className="text-[9px] tracking-[.24em] text-white/70">INTERNATIONAL SCHOOL</small></span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => <a data-cursor key={label} href={href} className="text-sm text-white/85 transition hover:text-white">{label}</a>)}
          <a data-cursor href="#admissions" className="flex items-center gap-2 rounded-full bg-saffron px-5 py-3 text-sm font-bold text-ink">Enquire <ArrowUpRight size={16}/></a>
          <ThemeToggle />
        </div>
        <button data-cursor className="rounded-full border border-white/30 p-2 text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Open menu">{open ? <X/> : <Menu/>}</button>
      </nav>
      {open && <div className="mx-4 rounded-3xl border border-white/15 bg-ink/95 p-5 backdrop-blur-xl md:hidden">
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 text-white">{label}</a>)}
        <a href="#admissions" onClick={() => setOpen(false)} className="mt-4 block rounded-full bg-saffron px-5 py-3 text-center font-bold">Start a conversation</a>
      </div>}
    </header>
  );
}
