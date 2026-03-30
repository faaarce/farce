export interface Stat {
  sub: string;
  label: string;
  value: string;
}

export interface Experience {
  quote: string;
  name: string;
  role: string;
  date: string;
}

export interface Skill {
  title: string;
  items: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  badge: string;
  thumbnail: string;
  shortDesc: string;
  technologies: string[];
  situation: string;
  task: string;
  action: string;
  result: string;
  links?: { label: string; url: string }[];
}

export type AnimationPhase =
  | "initial"
  | "sliding"
  | "rotating"
  | "zooming"
  | "expanded";
