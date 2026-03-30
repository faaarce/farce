import type { PortfolioProject } from "../types";

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "cyclouse",
    title: "CYCLOUSE",
    badge: "NEW",
    thumbnail:
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=800&auto=format&fit=crop",
    shortDesc:
      "A cycling e-commerce iOS app built with Swift, RxSwift reactive programming, MVVM architecture, and Core Data management.",
    technologies: ["Swift", "RxSwift", "MVVM", "Core Data", "Alamofire", "UIKit"],
    situation:
      "Cycling enthusiasts in Indonesia lacked a dedicated, well-designed mobile platform to browse and purchase cycling gear. Existing e-commerce apps were generic and didn't cater to the cycling community's specific needs such as bike compatibility filters, component specifications, and community reviews.",
    task:
      "As the sole iOS developer for this bootcamp capstone project at Phincon Academy, I was responsible for architecting and building the entire iOS application from scratch — including UI design, state management, local data persistence, and API integration — within a tight 3-week deadline.",
    action:
      "I adopted MVVM architecture with RxSwift for reactive data binding, ensuring clean separation of concerns. Core Data was implemented for local cart persistence and wishlist functionality. Alamofire handled all networking with custom interceptors for error handling. I built reusable UI components programmatically, including a custom collection view layout for the product catalog with smooth infinite scroll pagination.",
    result:
      "The app was completed ahead of schedule and received top marks from bootcamp mentors. The clean architecture made it easy to extend — adding new features took roughly 40% less time compared to initial estimates. The project demonstrated production-ready iOS patterns and was highlighted as a reference implementation for future cohorts.",
    links: [
      { label: "GitHub", url: "https://github.com/farisarie" },
    ],
  },
  {
    id: "siniar",
    title: "SINIAR",
    badge: "APP",
    thumbnail:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=600&fit=crop",
    shortDesc:
      "Simple Podcast App using iTunes API and AVKit for developing the media player with a clean, intuitive interface.",
    technologies: ["Swift", "AVKit", "iTunes API", "UIKit", "MVC", "URLSession"],
    situation:
      "Podcast consumption was growing rapidly, but many podcast apps were bloated with features and slow to load. There was a need for a lightweight, fast podcast discovery and playback app that focused on simplicity and core functionality — search, browse, and listen.",
    task:
      "I was tasked with building a native iOS podcast app that could search the iTunes catalog, display podcast details and episodes, and play audio content with standard media controls. The app needed to be performant, visually clean, and follow Apple's Human Interface Guidelines.",
    action:
      "I implemented the app using MVC architecture with URLSession for networking against the iTunes Search API. AVKit was integrated for audio playback with background audio support, lock screen controls, and playback progress tracking. I designed a responsive search interface with debounced input, and built a custom mini-player component that persisted across navigation. Image caching was implemented to reduce bandwidth usage.",
    result:
      "The app achieved smooth playback performance with less than 200ms search response times. The minimalist design received positive feedback during code review, and the codebase served as a learning reference for implementing media playback patterns in iOS. The project reinforced best practices in API consumption and audio session management.",
    links: [
      { label: "GitHub", url: "https://github.com/farisarie" },
    ],
  },
  {
    id: "timepad",
    title: "TIMEPAD",
    badge: "APP",
    thumbnail:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=500&fit=crop",
    shortDesc:
      "Time management app implementing Realm for data storing and Chartview library for visualizing user productivity patterns.",
    technologies: ["Swift", "Realm", "Charts", "UIKit", "MVC", "UserNotifications"],
    situation:
      "Students and early-career professionals often struggle with time management and lack awareness of how they actually spend their day. Existing time tracking apps were either overly complex or lacked meaningful visual feedback to help users improve their habits.",
    task:
      "My goal was to create an intuitive time tracking application that allowed users to log activities, categorize their time usage, and visualize productivity patterns through interactive charts — all while keeping the app lightweight and offline-capable.",
    action:
      "I chose Realm as the local database for its speed and simplicity over Core Data. The Charts library was integrated to generate daily, weekly, and monthly productivity visualizations including bar charts and pie charts. I implemented a category system with color coding, local notifications for reminders, and a streak-tracking feature to encourage consistent usage. The UI was built with UIKit using a clean, card-based layout.",
    result:
      "The app successfully demonstrated offline-first architecture patterns. Users could track and visualize their time without any server dependency. The Realm integration proved significantly faster than Core Data for read-heavy operations. The project earned strong feedback for its data visualization approach and practical utility.",
    links: [
      { label: "GitHub", url: "https://github.com/farisarie" },
    ],
  },
  {
    id: "paper-portfolio",
    title: "THE PAPER PORTFOLIO",
    badge: "WEB",
    thumbnail:
      "https://images.unsplash.com/photo-1504711434969-e33886168d1c?w=800&h=500&fit=crop",
    shortDesc:
      "This very website — a newspaper-themed portfolio built with React 19, TypeScript, Tailwind CSS v4, Framer Motion, and Jotai.",
    technologies: ["React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Jotai", "Vite"],
    situation:
      "Developer portfolios often look generic and forgettable. I wanted to create a portfolio that would stand out by combining strong visual identity with modern web technologies — something that would be memorable to recruiters and clients while showcasing real technical skills.",
    task:
      "Design and build a single-page portfolio website with a unique newspaper/editorial aesthetic, smooth animations, responsive layout, and optimized performance. The site needed to effectively communicate my skills, experience, and projects following industry-standard portfolio best practices.",
    action:
      "I chose a newspaper theme using PP Editorial New typography for visual distinctiveness. React 19 with TypeScript provided type safety, Tailwind CSS v4 handled responsive styling, and Framer Motion powered the entrance animation and scroll reveals. Jotai managed global state for animation phases and the contact form. I implemented mobile-first responsive design, semantic HTML for accessibility, lazy-loaded images, and scroll-triggered animations via Intersection Observer.",
    result:
      "The final product achieved a cohesive editorial look that stands out from typical developer portfolios. The responsive design works across all device sizes, entrance animations create a memorable first impression, and the modular component architecture makes content updates straightforward. PageSpeed scores were optimized through lazy loading and reduced animation complexity.",
    links: [
      { label: "Live Site", url: "https://farisarie.dev" },
      { label: "GitHub", url: "https://github.com/farisarie" },
    ],
  },
];
