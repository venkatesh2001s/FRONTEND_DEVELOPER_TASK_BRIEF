import Reveal from "./Reveal";
import { ArrowUpRight } from "lucide-react";

const cards = [
  { n:"01", title:"Learn", text:"CBSE learning shaped around reasoning, projects, creativity and the confidence to ask better questions.", img:"https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85" },
  { n:"02", title:"Play", text:"16+ sports create a culture of discipline, teamwork and joy—from football and cricket to archery and horse riding.", img:"https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85" },
  { n:"03", title:"Belong", text:"A residential community designed to feel like a second home, with pastoral care, friendships and space to grow.", img:"https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85" }
];

export default function Experience() {
  return (
    <section id="life" className="bg-ink px-5 py-24 text-white lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal><p className="mb-5 text-xs font-bold uppercase tracking-[.25em] text-saffron">02 — Campus life</p><h2 className="display max-w-3xl text-5xl leading-none sm:text-7xl">Three ways to <i className="font-normal text-saffron">grow.</i></h2></Reveal>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.n} delay={i*.1}>
              <article className="group relative min-h-[510px] overflow-hidden rounded-[2rem]">
                <div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105" style={{backgroundImage:`linear-gradient(180deg,rgba(23,37,30,.1),rgba(23,37,30,.9)),url(${c.img})`}} />
                <div className="relative flex min-h-[510px] flex-col justify-between p-7">
                  <span className="text-xs tracking-[.2em] text-white/60">{c.n}</span>
                  <div><h3 className="display text-5xl">{c.title}</h3><p className="mt-4 max-w-sm leading-7 text-white/75">{c.text}</p><a data-cursor href="#admissions" className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink transition group-hover:w-28"><ArrowUpRight size={18}/></a></div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
