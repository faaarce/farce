import type { FC } from "react";
import { ruleThick, lbl } from "../styles/classNames";
import { stats } from "../data";

const StatsRow: FC = () => (
  <div className={`${ruleThick} py-4`}>
    <div className="grid grid-cols-2 md:grid-cols-4">
      {stats.map((item, i) => (
        <div
          key={item.label}
          className={`${
            i % 2 === 0 ? "md:border-r border-[#b5b0a8]" : ""
          } ${i === 1 ? "md:border-r border-[#b5b0a8]" : ""} ${
            i === 2 ? "md:border-r border-[#b5b0a8]" : ""
          } px-2 md:px-3 py-2 md:py-1 flex items-baseline justify-center gap-2`}
        >
          <div className="text-right">
            <div className={`${lbl} !text-[7px] md:!text-[8px] leading-[1.3]`}>
              {item.sub}
            </div>
            <div className="font-extrabold text-[clamp(11px,2vw,18px)] uppercase text-[#2a2a2a] leading-none">
              {item.label}
            </div>
          </div>
          <div className="font-extrabold text-[clamp(28px,6vw,64px)] text-[#2a2a2a] leading-[0.85]">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default StatsRow;
