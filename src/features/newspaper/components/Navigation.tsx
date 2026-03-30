import { useState, useEffect, type FC } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SERIF_FONT } from "../styles/classNames";

const NAV_ITEMS = [
  { id: "hero", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "works", label: "WORKS" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "skills", label: "SKILLS" },
  { id: "contact", label: "CONTACT" },
];

const Navigation: FC = () => {
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    for (const item of NAV_ITEMS) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-50 bg-[#d5d0c9]/95 backdrop-blur-sm border-b border-[#b5b0a8] shadow-sm"
          style={{ fontFamily: SERIF_FONT }}
          aria-label="Main navigation"
        >
          <div className="max-w-[1200px] mx-auto px-4 md:px-7 flex items-center justify-between h-11">
            <button
              onClick={() => scrollTo("hero")}
              className="font-extrabold text-sm text-[#2a2a2a] uppercase tracking-[1px] cursor-pointer bg-transparent border-none"
            >
              FARIS
            </button>

            <div className="hidden md:flex items-center gap-5">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-[9px] tracking-[2px] uppercase transition-colors cursor-pointer bg-transparent border-none ${
                    activeId === item.id
                      ? "text-[#2a2a2a] font-extrabold"
                      : "text-[#888] hover:text-[#2a2a2a]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile: show only active section name */}
            <span className="md:hidden text-[9px] tracking-[2px] uppercase text-[#888]">
              {NAV_ITEMS.find((n) => n.id === activeId)?.label}
            </span>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
