import type { FC } from "react";
import { rule, imgB } from "../styles/classNames";
import { IMAGES } from "../data";

const WebsiteBanner: FC = () => (
  <div className={`${rule} grid grid-cols-1 md:grid-cols-[2.2fr_1fr]`}>
    <div className="bg-[#2a2a2a] py-[clamp(16px,3.5vw,44px)] px-4 md:px-6 flex items-center justify-center md:justify-start">
      <h2 className="text-[clamp(40px,11vw,160px)] font-extrabold text-[#d5d0c9] uppercase -tracking-[0.03em] leading-[0.85]">
        WEBSITE
      </h2>
    </div>
    <div className="border-t md:border-t-0 md:border-l border-[#b5b0a8] px-5 py-4 flex flex-row md:flex-col items-center justify-center gap-3 md:gap-0">
      <div
        className={`${imgB} w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-sm md:mb-2 overflow-hidden shrink-0`}
      >
        <img
          src={IMAGES.portrait}
          alt="Faris profile stamp"
          loading="lazy"
          width={60}
          height={60}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center md:text-center">
        <div className="text-base italic text-[#555] mb-1">~ Faris ~</div>
        <div className="text-[9px] text-[#888] tracking-[1px]">
          NAME: <span className="font-extrabold">Mohammad Faris</span>
        </div>
        <div className="text-[9px] text-[#888] tracking-[1px] mt-0.5">
          UNIV: <span className="font-extrabold">Padjadjaran</span>
        </div>
      </div>
    </div>
  </div>
);

export default WebsiteBanner;
