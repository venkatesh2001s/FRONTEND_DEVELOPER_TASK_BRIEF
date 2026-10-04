import Reveal from "./Reveal";

const stats = [
  ["22", "acre pollution-free campus"],
  ["16+", "Olympic sports"],
  ["24/7", "medical assistance"],
  ["6:1", "student–teacher ratio"]
];

export default function Stats() {
  return (
    <section className="border-b border-ink/10 bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {stats.map(([value, label], i) => (
          <Reveal key={label} delay={i * .06} className="border-r border-ink/10 p-7 last:border-r-0 sm:p-10 lg:p-12">
            <div className="display text-5xl text-forest sm:text-6xl">{value}</div>
            <div className="mt-2 max-w-[150px] text-xs font-bold uppercase leading-5 tracking-[.15em] text-ink/55">{label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
