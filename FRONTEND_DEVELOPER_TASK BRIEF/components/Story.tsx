import Reveal from "./Reveal";

export default function Story() {
  return (
    <section id="story" className="overflow-hidden bg-cream px-5 py-24 lg:px-8 lg:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <Reveal>
          <p className="mb-5 text-xs font-bold uppercase tracking-[.25em] text-clay">01 — The idea</p>
          <h2 className="display text-5xl leading-[.95] sm:text-7xl">Education should feel <i className="font-normal text-forest">alive.</i></h2>
        </Reveal>
        <Reveal delay={.12}>
          <p className="max-w-2xl text-xl leading-9 text-ink/70">At Tula&apos;s, we believe school is more than a classroom. It is a community that gives every student the room to discover what they care about, build resilience and become the best version of themselves.</p>
          <p className="mt-7 max-w-2xl leading-7 text-ink/55">Our CBSE curriculum prioritises reasoning and analytical thinking, supported by project-based learning, technology, sport, arts and experiences that connect learning to life.</p>
          <a data-cursor href="#academics" className="mt-9 inline-flex border-b border-ink pb-2 text-sm font-bold">Discover our approach →</a>
        </Reveal>
      </div>
    </section>
  );
}
