import type { FC } from "react";
import { MARQUEE_REPEAT_COUNT, SOCIAL_LINKS } from "../data";

const Marquee: FC = () => (
  <div className="bg-[#2a2a2a] overflow-hidden py-3 md:py-[18px] -mx-4 md:-mx-7">
    <div className="flex gap-8 md:gap-12 whitespace-nowrap animate-marquee-scroll">
      {[...Array(MARQUEE_REPEAT_COUNT)].map((_, i) => (
        <span
          key={i}
          className="font-extrabold text-[clamp(18px,4.5vw,48px)] text-[#d5d0c9] flex items-center gap-3 md:gap-5 shrink-0"
        >
          Let&apos;s create something together
          <a
            href={SOCIAL_LINKS.email}
            className="bg-[#d5d0c9] text-[#2a2a2a] text-[clamp(8px,1.5vw,16px)] px-3 md:px-5 py-1.5 md:py-2 font-extrabold tracking-[2px] uppercase no-underline hover:bg-white transition-colors"
          >
            EMAIL ME
          </a>
          <span className="text-[#666] text-sm">★</span>
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
