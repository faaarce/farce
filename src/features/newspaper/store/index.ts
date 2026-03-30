import { atom } from "jotai";
import type { AnimationPhase, PortfolioProject } from "../types";

// ── Animation state ──
export const animationPhaseAtom = atom<AnimationPhase>("initial");
export const isExpandedAtom = atom(
  (get) => get(animationPhaseAtom) === "expanded"
);

// ── Contact form state ──
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const contactFormAtom = atom<ContactFormData>({
  name: "",
  email: "",
  message: "",
});

export const contactSubmittedAtom = atom(false);

// ── Navigation / active section ──
export const activeSectionAtom = atom<string>("hero");

// ── Portfolio detail modal ──
export const selectedProjectAtom = atom<PortfolioProject | null>(null);
