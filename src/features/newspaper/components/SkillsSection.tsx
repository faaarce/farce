import type { FC } from "react";
import { ruleThick, lbl } from "../styles/classNames";
import { skills } from "../data";

const SkillsSection: FC = () => (
  <section id="skills" aria-labelledby="skills-heading">
    <div className="pt-1">
      <div className={`${lbl} mb-1`} id="skills-heading">
        TECHNICAL INDEX
      </div>
      <div className="border-t-2 border-[#2a2a2a]" />
    </div>

    <div className={`${ruleThick} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`}>
      {skills.map((cat, i) => (
        <div
          key={cat.title}
          className={`${
            i < 3 ? "lg:border-r border-[#b5b0a8]" : ""
          } ${i % 2 === 0 && i < 3 ? "sm:border-r sm:lg:border-r" : ""} py-3.5 px-0 sm:px-3.5 ${
            i === 0 ? "sm:!pl-0" : ""
          } ${i > 0 ? "border-t sm:border-t-0" : ""} ${
            i >= 2 ? "sm:border-t lg:border-t-0" : ""
          }`}
        >
          <h4 className="font-extrabold text-[11px] uppercase text-[#2a2a2a] mb-1.5 tracking-[1px]">
            {cat.title}
          </h4>
          <div className="w-5 h-px bg-[#b5b0a8] mb-1.5" />
          <p className="text-[10.5px] text-[#666] leading-[1.65]">
            {cat.items}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
