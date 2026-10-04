 "use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "./Reveal";

export default function Admissions() {
  const [sent, setSent] = useState(false);
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    await fetch("/api/inquiry", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(data) });
    setSent(true); form.reset();
  };
  return (
    <section id="admissions" className="bg-saffron px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_.8fr] lg:items-end">
        <Reveal><p className="mb-5 text-xs font-bold uppercase tracking-[.25em] text-ink/55">04 — Admissions 2027</p><h2 className="display text-6xl leading-[.9] sm:text-8xl">Come see what<br/><i className="font-normal">school can be.</i></h2><p className="mt-8 max-w-lg text-lg leading-8 text-ink/70">Admissions are open for Classes IV–XII. Start a conversation with our admissions team.</p><a data-cursor href="https://admission.tis.edu.in/" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-4 font-bold text-white">Visit admissions <ArrowUpRight size={18}/></a></Reveal>
        <Reveal delay={.12}>
          <form onSubmit={submit} className="rounded-[2rem] bg-cream p-6 shadow-soft sm:p-9">
            {sent ? <div className="py-12 text-center"><div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-forest text-white"><Check/></div><h3 className="display mt-6 text-4xl">We&apos;ll be in touch.</h3><p className="mt-3 text-ink/55">Thank you for your interest in TIS.</p></div> : <>
              <h3 className="display text-3xl">Start here.</h3>
              <div className="mt-7 space-y-4">
                <input required name="name" placeholder="Parent / Guardian name" className="w-full border-b border-ink/15 bg-transparent px-1 py-4 outline-none placeholder:text-ink/40 focus:border-ink"/>
                <input required type="email" name="email" placeholder="Email address" className="w-full border-b border-ink/15 bg-transparent px-1 py-4 outline-none placeholder:text-ink/40 focus:border-ink"/>
                <input required name="phone" placeholder="Mobile number" className="w-full border-b border-ink/15 bg-transparent px-1 py-4 outline-none placeholder:text-ink/40 focus:border-ink"/>
                <select name="grade" className="w-full border-b border-ink/15 bg-cream px-1 py-4 outline-none"><option>Class IV–V</option><option>Class VI–VIII</option><option>Class IX–X</option><option>Class XI–XII</option></select>
              </div>
              <button data-cursor className="mt-8 flex w-full items-center justify-between rounded-full bg-forest px-6 py-4 font-bold text-white">Request a call <ArrowUpRight size={18}/></button>
            </>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
