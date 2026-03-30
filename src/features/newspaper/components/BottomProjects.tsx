import type { FC } from "react";
import { useSetAtom } from "jotai";
import { selectedProjectAtom } from "../store";
import { portfolioProjects } from "../data";
import { rule, lbl, just, imgB, badgeSm } from "../styles/classNames";

const BottomProjects: FC = () => {
  const setProject = useSetAtom(selectedProjectAtom);

  const timepad = portfolioProjects.find((p) => p.id === "timepad")!;
  const paperPortfolio = portfolioProjects.find(
    (p) => p.id === "paper-portfolio"
  )!;

  return (
    <section aria-label="More projects">
      <div className="pt-1">
        <div className={`${lbl} mb-2.5`}>MORE FROM THE ARCHIVE</div>
      </div>

      <div
        className={`${rule} grid grid-cols-1 md:grid-cols-[1fr_1.2fr_1fr]`}
      >
        <article className="md:border-r border-[#b5b0a8] pr-0 md:pr-[18px] pb-5">
          <button
            type="button"
            onClick={() => setProject(paperPortfolio)}
            className="w-full text-left bg-transparent border-none cursor-pointer p-0"
            aria-label={`View ${paperPortfolio.title} details`}
          >
            <img
              src={paperPortfolio.thumbnail}
              alt="The Paper Portfolio website"
              loading="lazy"
              width={400}
              height={225}
              className={`${imgB} w-full aspect-video object-cover block mb-2.5 hover:opacity-90 transition-opacity`}
            />
          </button>
          <h3 className="font-extrabold text-[13px] uppercase text-[#2a2a2a] mb-[3px]">
            THE PAPER PORTFOLIO <span className={badgeSm}>WEB</span>
          </h3>
          <p className={`${just} text-[11px] text-[#666] leading-[1.55] mb-2`}>
            {paperPortfolio.shortDesc}
          </p>
          <button
            type="button"
            onClick={() => setProject(paperPortfolio)}
            className={`${lbl} !text-[8px] underline cursor-pointer bg-transparent border-none p-0 hover:text-[#2a2a2a] transition-colors`}
          >
            READ FULL CASE STUDY →
          </button>
        </article>

        <div className="md:border-r border-[#b5b0a8] flex flex-col items-center justify-center text-center px-0 md:px-[18px] py-5 md:py-2.5 border-t md:border-t-0">
          <h3 className="font-extrabold text-[clamp(22px,3vw,34px)] uppercase text-[#2a2a2a] leading-none mb-2">
            ALL WORK!
          </h3>
          <div
            className="w-[30px] h-px bg-[#b5b0a8] mb-2"
            aria-hidden="true"
          />
          <p className="text-sm italic text-[#444] leading-[1.45] mb-2.5 max-w-[240px]">
            Handpicked highlights — spanning the last few years.
          </p>
          <p className={`${lbl} !text-[8px]`}>
            CLICK IMAGES FOR FULL CASE STUDY
          </p>
        </div>

        <article className="pl-0 md:pl-[18px] pb-5 border-t md:border-t-0">
          <button
            type="button"
            onClick={() => setProject(timepad)}
            className="w-full text-left bg-transparent border-none cursor-pointer p-0"
            aria-label={`View ${timepad.title} details`}
          >
            <img
              src={timepad.thumbnail}
              alt="Timepad app"
              loading="lazy"
              width={400}
              height={225}
              className={`${imgB} w-full aspect-video object-cover block mb-2.5 hover:opacity-90 transition-opacity`}
            />
          </button>
          <h3 className="font-extrabold text-[13px] uppercase text-[#2a2a2a] mb-[3px]">
            TIMEPAD <span className={badgeSm}>APP</span>
          </h3>
          <p className={`${just} text-[11px] text-[#666] leading-[1.55] mb-2`}>
            {timepad.shortDesc}
          </p>
          <button
            type="button"
            onClick={() => setProject(timepad)}
            className={`${lbl} !text-[8px] underline cursor-pointer bg-transparent border-none p-0 hover:text-[#2a2a2a] transition-colors`}
          >
            READ FULL CASE STUDY →
          </button>
        </article>
      </div>
    </section>
  );
};

export default BottomProjects;
