export default function Footer() {
  return (
    <footer className="bg-ink px-5 py-14 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_.8fr]">
        <div><div className="display text-4xl">Tula&apos;s.</div><p className="mt-4 max-w-sm leading-7 text-white/50">The Modern Gurukul. A co-educational residential school in Dehradun, Uttarakhand.</p></div>
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-saffron">Explore</p><a href="#story" className="mt-5 block text-white/70 hover:text-white">Our story</a><a href="#life" className="mt-3 block text-white/70 hover:text-white">Campus life</a><a href="#academics" className="mt-3 block text-white/70 hover:text-white">Academics</a></div>
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-saffron">Talk to us</p><a href="tel:+919837983791" className="mt-5 block text-white/70 hover:text-white">+91 98379 83791</a><a href="mailto:info@tis.edu.in" className="mt-3 block text-white/70 hover:text-white">info@tis.edu.in</a><p className="mt-3 leading-6 text-white/50">Dhoolkot, P.O. Selaqui,<br/>Chakrata Road, Dehradun</p></div>
      </div>
      <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/35">© 2026 Tula&apos;s International School. Concept redesign for frontend evaluation.</div>
    </footer>
  );
}
