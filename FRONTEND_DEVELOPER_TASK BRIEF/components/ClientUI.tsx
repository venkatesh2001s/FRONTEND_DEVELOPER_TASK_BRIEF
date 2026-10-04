 "use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return <motion.div className="fixed left-0 top-0 z-[90] h-[3px] origin-left bg-saffron" style={{ scaleX: scrollYProgress, width: "100%" }} />;
}

export function CustomCursor() {
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 35 });
  const sy = useSpring(y, { stiffness: 500, damping: 35 });

  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setActive(Boolean(target.closest("a,button,[data-cursor]")));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  return <>
    <motion.div className="cursor-ring" style={{ left: sx, top: sy }} animate={{ scale: active ? 1.25 : 1 }} />
    <motion.div className="cursor-dot" style={{ left: sx, top: sy }} />
  </>;
}

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);
  return (
    <button
      data-cursor
      aria-label="Toggle theme"
      onClick={() => setDark(v => !v)}
      className="rounded-full border border-white/30 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md hover:bg-white/10"
    >
      {dark ? "LIGHT" : "DARK"}
    </button>
  );
}
