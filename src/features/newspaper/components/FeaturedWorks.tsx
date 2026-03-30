import type { FC } from "react";
import { useSetAtom } from "jotai";
import { selectedProjectAtom } from "../store";
import { portfolioProjects } from "../data";
import { rule, lbl, just, imgB, badge } from "../styles/classNames";

const FeaturedWorks: FC = () => {
  const setProject = useSetAtom(selectedProjectAtom);

  const cyclouse = portfolioProjects.find((p) => p.id === "cyclouse")!;
  const siniar = portfolioProjects.find((p) => p.id === "siniar")!;

  return (
    <section id="works" aria-labelledby="works-heading">
      <div className={`${rule} pt-5`}>
        <div className={`${lbl} mb-3`} id="works-heading">
          FEATURED WORKS
        </div>
      </div>

      <div className={`${rule} grid grid-cols-1 md:grid-cols-3`}>
        {/* Cyclouse */}
        <article className="md:border-r border-[#b5b0a8] pr-0 md:pr-[18px] pt-4 pb-5">
          <button
            type="button"
            onClick={() => setProject(cyclouse)}
            className="w-full text-left bg-transparent border-none cursor-pointer p-0"
            aria-label={`View ${cyclouse.title} details`}
          >
            <img
              src={cyclouse.thumbnail}
              alt="Cyclouse — cycling e-commerce iOS app screenshot"
              loading="lazy"
              width={400}
              height={300}
              className={`${imgB} w-full aspect-[4/3] object-cover block mb-2.5 hover:opacity-90 transition-opacity`}
            />
          </button>
          <h3 className="font-extrabold text-sm uppercase text-[#2a2a2a] mb-[3px]">
            CYCLOUSE <span className={badge}>NEW</span>
          </h3>
          <p className={`${just} text-[11px] text-[#666] leading-[1.55] mb-2`}>
            {cyclouse.shortDesc}
          </p>
          <button
            type="button"
            onClick={() => setProject(cyclouse)}
            className={`${lbl} !text-[8px] underline cursor-pointer bg-transparent border-none p-0 hover:text-[#2a2a2a] transition-colors`}
          >
            READ FULL CASE STUDY →
          </button>
        </article>

        {/* Center */}
        <div className="md:border-r border-[#b5b0a8] flex flex-col items-center justify-center text-center px-0 md:px-[18px] py-4 border-t md:border-t-0">
          <h2 className="font-extrabold text-[clamp(22px,3vw,36px)] uppercase text-[#2a2a2a] leading-none mb-2.5 -tracking-[0.01em]">
            ALL WORK!
          </h2>
          <div className="w-10 h-px bg-[#b5b0a8] mb-2.5" aria-hidden="true" />
          <p className="text-sm italic text-[#555] leading-[1.45] mb-3 max-w-[220px]">
            A featured selection of the latest work — spanning the last years.
          </p>
          <p className={`${lbl} !text-[8px]`}>
            CLICK IMAGES FOR FULL CASE STUDY
          </p>
        </div>

        {/* Siniar */}
        <article className="pl-0 md:pl-[18px] pt-4 pb-5 border-t md:border-t-0">
          <button
            type="button"
            onClick={() => setProject(siniar)}
            className="w-full text-left bg-transparent border-none cursor-pointer p-0"
            aria-label={`View ${siniar.title} details`}
          >
            <img
              src={siniar.thumbnail}
              alt="Siniar — podcast app using iTunes API"
              loading="lazy"
              width={400}
              height={300}
              className={`${imgB} w-full aspect-[4/3] object-cover block mb-2.5 hover:opacity-90 transition-opacity`}
            />
          </button>
          <h3 className="font-extrabold text-sm uppercase text-[#2a2a2a] mb-[3px]">
            SINIAR <span className={badge}>APP</span>
          </h3>
          <p className={`${just} text-[11px] text-[#666] leading-[1.55] mb-2`}>
            {siniar.shortDesc}
          </p>
          <button
            type="button"
            onClick={() => setProject(siniar)}
            className={`${lbl} !text-[8px] underline cursor-pointer bg-transparent border-none p-0 hover:text-[#2a2a2a] transition-colors`}
          >
            READ FULL CASE STUDY →
          </button>
        </article>
      </div>
    </section>
  );
};

export default FeaturedWorks;
