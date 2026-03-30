import type { FC } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useAtom } from "jotai";
import { selectedProjectAtom } from "../store";
import { SERIF_FONT, lbl, just, rule, imgB } from "../styles/classNames";

const PortfolioDetail: FC = () => {
  const [project, setProject] = useAtom(selectedProjectAtom);

  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-start justify-center bg-[#1a1a1a]/70 backdrop-blur-sm overflow-y-auto py-8 px-4"
          onClick={() => setProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} project details`}
        >
          <motion.article
            initial={{ y: 40, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#d5d0c9] w-full max-w-[720px] relative"
            style={{ fontFamily: SERIF_FONT }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-[#2a2a2a] px-5 py-3 flex items-center justify-between">
              <h2 className="font-extrabold text-[#d5d0c9] text-lg tracking-[2px] uppercase">
                {project.title}
              </h2>
              <button
                onClick={() => setProject(null)}
                className="text-[#d5d0c9] text-xl leading-none bg-transparent border-none cursor-pointer hover:text-white"
                aria-label="Close project details"
              >
                ✕
              </button>
            </div>

            <div className="px-5 md:px-8 py-6">
              {/* Thumbnail */}
              <img
                src={project.thumbnail}
                alt={`${project.title} screenshot`}
                className={`${imgB} w-full aspect-video object-cover mb-5`}
                loading="lazy"
              />

              {/* Tech stack */}
              <div className={`${lbl} mb-2`}>TECHNOLOGIES USED</div>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#2a2a2a] text-[#d5d0c9] text-[9px] px-2.5 py-1 font-extrabold tracking-[0.5px] uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className={rule} />

              {/* STAR sections */}
              {[
                { key: "SITUATION", content: project.situation },
                { key: "TASK", content: project.task },
                { key: "ACTION", content: project.action },
                { key: "RESULT", content: project.result },
              ].map((section, i) => (
                <div key={section.key} className={`py-4 ${i < 3 ? rule : ""}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#c0392b] text-white text-[8px] w-5 h-5 flex items-center justify-center font-extrabold rounded-[1px]">
                      {section.key[0]}
                    </span>
                    <h3 className="font-extrabold text-[12px] uppercase text-[#2a2a2a] tracking-[1.5px]">
                      {section.key}
                    </h3>
                  </div>
                  <p
                    className={`${just} text-sm text-[#333] leading-[1.7]`}
                  >
                    {section.content}
                  </p>
                </div>
              ))}

              {/* Links */}
              {project.links && project.links.length > 0 && (
                <div className="pt-4 border-t-2 border-[#2a2a2a] flex items-center gap-4">
                  <span className={`${lbl} !text-[8px]`}>VIEW PROJECT</span>
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[12px] text-[#2a2a2a] underline hover:text-[#666] transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PortfolioDetail;
