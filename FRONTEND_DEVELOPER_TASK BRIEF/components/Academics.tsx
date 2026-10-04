import Reveal from "./Reveal";

const items = ["CBSE curriculum", "Project-based learning", "Digital classrooms & VR", "Olympiad preparation", "IIT-JEE / NEET preparation", "Arts, music & theatre"];

export default function Academics() {
  return (
    <section id="academics" className="bg-[#e8e2d6] px-5 py-24 lg:px-8 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.85fr_1.15fr]">
        <Reveal><p className="mb-5 text-xs font-bold uppercase tracking-[.25em] text-clay">03 — Academics</p><h2 className="display text-5xl leading-none sm:text-7xl">Curiosity is the <i className="font-normal text-forest">curriculum.</i></h2></Reveal>
        <div>
          <Reveal><p className="max-w-2xl text-xl leading-9 text-ink/65">TIS follows the CBSE course structure while putting reasoning, analytical thinking and skill-based learning at the centre. Technology and experiential learning turn concepts into things students can explore.</p></Reveal>
          <div className="mt-12 grid border-t border-ink/15 sm:grid-cols-2">
            {items.map((item, i) => <Reveal key={item} delay={i*.04}><div className="border-b border-ink/15 py-5 pr-5 text-lg">{String(i+1).padStart(2,"0")} <span className="ml-5 text-ink/45">{item}</span></div></Reveal>)}
          </div>
        </div>
      </div>
    </section>
  );
}
