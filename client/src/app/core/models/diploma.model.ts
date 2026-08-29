export type DiplomaCategory = 'software' | 'data' | 'design' | 'cyber' | 'mobile';

export interface CurriculumModule {
  moduleNumber: number;
  titleEn: string;
  titleAr: string;
  sessionsCount?: number;
  hoursCount?: number;
  descEn?: string;
  descAr?: string;
  topics: string[];
  projectTitleEn?: string;
  projectTitleAr?: string;
}

export interface ProjectRoadmapItem {
  num: number;
  titleEn: string;
  titleAr: string;
  levelEn: string;
  levelAr: string;
  descEn?: string;
  descAr?: string;
}

export interface Diploma {
  id: string;
  category: DiplomaCategory;
  categoryLabelEn: string;
  categoryLabelAr: string;
  titleEn: string;
  titleAr: string;
  taglineEn: string;
  taglineAr: string;
  descEn: string;
  descAr: string;
  durationEn: string;
  durationAr: string;
  totalSessions?: number;
  totalHours: number;
  sessionDurationEn?: string;
  sessionDurationAr?: string;
  sessionsPerWeekEn: string;
  sessionsPerWeekAr: string;
  levelEn: string;
  levelAr: string;
  isFeatured?: boolean;
  featuredBadgeEn?: string;
  featuredBadgeAr?: string;
  highlights: string[];
  projectsCountEn: string;
  projectsCountAr: string;
  priceEgp: number;
  earlyBirdPriceEgp?: number;
  isFoundingBatch: boolean;
  foundingBatchBadgeEn: string;
  foundingBatchBadgeAr: string;
  schedulingNoteEn?: string;
  schedulingNoteAr?: string;
  tools: string[];
  careerOutcomesEn: string[];
  careerOutcomesAr: string[];
  curriculumModules: CurriculumModule[];
  projectRoadmap?: ProjectRoadmapItem[];
}

export const DIPLOMAS_DATA: Diploma[] = [
  // 1. PROFESSIONAL FRONT-END DEVELOPMENT DIPLOMA (FEATURED - REACT-FOCUSED)
  {
    id: 'frontend-development',
    category: 'software',
    categoryLabelEn: 'SOFTWARE ENGINEERING',
    categoryLabelAr: 'هندسة وتطوير البرمجيات',
    titleEn: 'Professional Front-End Development Diploma (React-Focused)',
    titleAr: 'دبلومة تطوير الواجهات الأمامية والـ React المحترفة (Front-End & Next.js)',
    taglineEn: 'React-Focused Masterclass: 200 Hours, 50 Sessions, 35+ Projects, TypeScript, Next.js & Production Capstone.',
    taglineAr: 'دبلومة محترفة شاملة 200 ساعة • 50 جلسة تفاعلية • 35+ مشروعاً تطبيقياً • React • Next.js • TypeScript • مشروع تخرج كامل.',
    descEn: 'A comprehensive, hands-on Front-End Development Diploma designed to take learners from web fundamentals to production-ready React and Next.js applications. The curriculum emphasizes practical implementation, modern frontend engineering, reusable architecture, APIs, testing, performance, deployment, AI-assisted development, and portfolio-quality projects.',
    descAr: 'دبلومة عمليّة تطبيقية شاملة 200 ساعة تدريبية مصممة لنقلك من أساسيات الويب إلى احتراف بناء تطبيقات React و Next.js الجاهزة للإنتاج والتوظيف. يركز المنهج على التطبيق الهندسي الحديث، المعماريات القابلة لإعادة الاستخدام، ربط الـ APIs، اختبار الأكواد، تحسين الأداء، وتطوير الأكواد بذكاء الاصطناعي مع بناء 35+ مشروعاً وبورتفوليو احترافي.',
    durationEn: '4 Months (16 Teaching Weeks / 50 Sessions)',
    durationAr: '4 أشهر (16 أسبوعاً تدريسياً | 50 جلسة تفاعلية)',
    totalSessions: 50,
    totalHours: 200,
    sessionDurationEn: '4 Hours / Session',
    sessionDurationAr: '4 ساعات لكل جلسة',
    sessionsPerWeekEn: '3 Sessions / Wk',
    sessionsPerWeekAr: '3 جلسات أسبوعياً',
    levelEn: 'Beginner → Advanced Frontend Engineer',
    levelAr: 'من المبتدئ إلى مهندس واجهات أمامي محترف',
    isFeatured: true,
    featuredBadgeEn: 'MOST POPULAR - REACT FOCUSED',
    featuredBadgeAr: 'الأكثر طلباً - مسار React & Next.js',
    highlights: [
      'HTML5 & Modern CSS3 / Flexbox / Grid',
      'JavaScript ES6+ & Web APIs Mastery',
      'TypeScript & Clean Frontend Architecture',
      'Tailwind CSS, Bootstrap 5 & Sass BEM',
      'React 18+, Context API, Redux Toolkit & TanStack Query',
      'Next.js App Router, SSR, SSG & SEO',
      'AI-Powered Workflow (Copilot & Prompt Engineering)',
      'Testing (Vitest/RTL), Performance & Security'
    ],
    projectsCountEn: '35+ Practical Projects & Event Booking Capstone',
    projectsCountAr: '35+ مشروعاً عملياً ومشروع تخرج مؤسسي متكامل',
    priceEgp: 10000,
    isFoundingBatch: true,
    foundingBatchBadgeEn: 'Founding Batch Offer: 10,000 EGP',
    foundingBatchBadgeAr: 'خصم الدفعة التأسيسية: 10,000 ج.م شامل الـ 35 مشروعاً والشهادة والبورتفوليو',
    schedulingNoteEn: '200 Total Training Hours delivered across 50 sessions (4 hours per session, 3 sessions per week). 16 teaching weeks (~4 months) with continuous code reviews, live debugging, and deployment.',
    schedulingNoteAr: 'ملاحظة المواعيد: 200 ساعة تدريبية معتمدة مقسمة على 50 جلسة حية (4 ساعات لكل جلسة | 3 جلسات أسبوعياً | 16 أسبوعاً تدريسياً ~4 أشهر)، مع مراجعة كود فورية والنشر التلقائي للمشاريع.',
    tools: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript ES6+',
      'Redux Toolkit',
      'TanStack Query',
      'Tailwind CSS',
      'shadcn/ui',
      'Bootstrap 5',
      'Sass',
      'Vite',
      'Git & GitHub',
      'Vitest & RTL',
      'Vercel & Netlify',
      'VS Code & Copilot'
    ],
    careerOutcomesEn: [
      'Front-End Web Developer',
      'React.js Software Engineer',
      'Next.js Full-Stack Frontend Engineer',
      'UI Web Application Specialist',
      'TypeScript Frontend Developer',
      'Freelance Web App Developer'
    ],
    careerOutcomesAr: [
      'مطور واجهات أمامية محترف (Front-End Web Developer)',
      'مهندس برمجيات React.js',
      'مطور تطبيقات Next.js & TypeScript',
      'متخصص واجهات مستخدم وتطبيقات SPA',
      'مطور ويب فرونت إند للمشاريع المستقلة (Freelancer)'
    ],
    curriculumModules: [
      {
        moduleNumber: 1,
        titleEn: 'Web Fundamentals & Modern HTML5',
        titleAr: 'أساسيات الويب وهيكلة المواقع الحديثة bـ HTML5',
        sessionsCount: 2,
        hoursCount: 8,
        descEn: 'Sessions 1–2: HTTP/HTTPS protocols, browser rendering engines, HTML5 semantic structure, forms, validation, tables, multimedia, WCAG Accessibility (ARIA), and SEO best practices.',
        descAr: 'الجلسات 1-2: فهم كيفية عمل الويب وبروتوكولات HTTP/HTTPS، بناء الهيكل الدلالي Semantic HTML5، النماذج والـ Validation، إتاحة الوصول ARIA، وإعداد المواقع لمحركات البحث SEO.',
        topics: ['How the Web Works & HTTP/HTTPS Protocols', 'HTML5 Semantic Elements & Page Structure', 'Advanced Forms, Validation & Controls', 'Accessibility Standards (WCAG & ARIA)', 'SEO-Friendly Markup & Best Practices'],
        projectTitleEn: 'Personal Portfolio, University Registration & Tech Conference Site',
        projectTitleAr: 'بناء 3 تطبيقات: البورتفوليو الشخصي، صفحة تسجيل الجامعة، وموقع المؤتمر التقني'
      },
      {
        moduleNumber: 2,
        titleEn: 'CSS3 & Modern UI Styling Systems',
        titleAr: 'احتراف CSS3 وتنسيق الواجهات والتصميم التكيفي (Flexbox & Grid)',
        sessionsCount: 4,
        hoursCount: 16,
        descEn: 'Sessions 3–6: CSS selectors, Box model, Positioning, Flexbox, CSS Grid, Responsive Mobile-First design, Media queries, Transitions, Animations, CSS Variables, and Browser debugging.',
        descAr: 'الجلسات 3-6: إتقان التنسيقات والـ Box Model، أنظمة التوزيع المرنة Flexbox و CSS Grid، التصميم المستجيب للهواتف Mobile-First، المؤثرات الحركية Animations، والـ CSS Variables.',
        topics: ['CSS Box Model, Selectors & Specificity', 'Flexbox Layouts & Alignment', 'CSS Grid Architecture & Responsive Layouts', 'Mobile-First Media Queries & Breakpoints', 'Transitions, Keyframe Animations & CSS Variables'],
        projectTitleEn: 'FitCore Gym, DJI Mavic Landing Page, UX Review & Mudabbir Dashboard',
        projectTitleAr: 'بناء 5 مشاريع: منصة FitCore، landing page لـ DJI Mavic، الـ UX Review، وداشبورد Mudabbir'
      },
      {
        moduleNumber: 3,
        titleEn: 'Bootstrap 5 & Responsive Component Design',
        titleAr: 'إطار العمل Bootstrap 5 والتصميم التكيفي السريع',
        sessionsCount: 2,
        hoursCount: 8,
        descEn: 'Sessions 7–8: Bootstrap grid system, Breakpoints, Utility classes, Navbars, Cards, Forms, Modals, Responsive layouts, and Component customization.',
        descAr: 'الجلسات 7-8: استخدام شبكة Bootstrap Grid، المكونات الجاهزة (Navbars, Cards, Modals)، وتخصيص الواجهات لتناسب كافة الأجهزة بسرعة ودقة عالية.',
        topics: ['Bootstrap 5 Grid System & Breakpoints', 'Typography & Utility Classes', 'Navbars, Modals, Cards & Forms', 'Responsive Layout Customization'],
        projectTitleEn: 'Games Arena, Elite Home & Travel Explorer',
        projectTitleAr: 'بناء 3 تطبيقات: Games Arena، موقع Elite Home، ودليل السفر Travel Explorer'
      },
      {
        moduleNumber: 4,
        titleEn: 'JavaScript Core Fundamentals',
        titleAr: 'أساسيات برمجة JavaScript ES6+ والتفكير المنطقي',
        sessionsCount: 6,
        hoursCount: 24,
        descEn: 'Sessions 9–14: Variables, Data types, Conditions, Loops, Functions, Closures, Array methods, Destructuring, Spread/Rest, ES6+ features, Higher-Order Functions, OOP, LocalStorage, and Clean Code.',
        descAr: 'الجلسات 9-14: المتغيرات، الدوال والـ Closures، دوال المصفوفات المتقدمة (map, filter, reduce)، مميزات ES6+، البرمجة كائنية التوجه، والتخزين المحلي LocalStorage.',
        topics: ['Variables, Scope & Closures', 'ES6+ Syntax, Destructuring & Rest/Spread', 'Array Higher-Order Methods (map, filter, reduce)', 'Objects, Prototypes & OOP in JS', 'LocalStorage, SessionStorage & JSON', 'Clean Code Practices & Error Handling'],
        projectTitleEn: 'JS Challenges, What\'s For Dinner, ContactHub, Expense Tracker & Kanban App',
        projectTitleAr: 'بناء 6 تطبيقات: تحديات JS، تطبيق الوجبات، ContactHub، حاسبة المصاريف، وتطبيقات Kanban'
      },
      {
        moduleNumber: 5,
        titleEn: 'Advanced JavaScript & Asynchronous Web APIs',
        titleAr: 'البرمجة اللا تزامنية والـ DOM وربط الـ REST APIs',
        sessionsCount: 5,
        hoursCount: 20,
        descEn: 'Sessions 15–19: DOM manipulation, Event delegation, AJAX, Fetch API, REST APIs, Promises, Async/Await, Event Loop (Microtasks/Macrotasks), Dynamic UI rendering, and API loading states.',
        descAr: 'الجلسات 15-19: التفاعل الحقيقي مع الـ DOM، البرمجة اللا تزامنية بـ Promises و Async/Await، فهم الـ Event Loop، واستدعاء بيانات الخوادم وربط الـ REST APIs.',
        topics: ['DOM Manipulation & Event Delegation', 'AJAX, Fetch API & HTTP Methods', 'Promises & Async/Await Workflows', 'Event Loop, Call Stack & Microtasks', 'Dynamic UI Rendering & API Error Handling'],
        projectTitleEn: 'Cosmos Dashboard, Weather App, Movie Explorer, GitHub Explorer & E-Commerce',
        projectTitleAr: 'بناء 5 تطبيقات APIs: داشبورد Fضاء Cosmos، تطبيق الطقس، سينما الأفلام، ومكتشف GitHub'
      },
      {
        moduleNumber: 6,
        titleEn: 'TypeScript for Frontend Engineers',
        titleAr: 'لغة TypeScript وكتابة كود واجهات قوية (Type-Safe UI)',
        sessionsCount: 3,
        hoursCount: 12,
        descEn: 'Sessions 20–22: Primitive types, Interfaces, Type Aliases, Union/Intersection types, Generics, Utility types, Type narrowing, Classes, and React TypeScript integration.',
        descAr: 'الجلسات 20-22: إتقان TypeScript، كتابة الـ Interfaces والـ Types، استخدام الـ Generics والـ Utility Types لضمان خلو الأكواد من أخطاء الـ Runtime.',
        topics: ['TypeScript Setup & Primitive Types', 'Interfaces vs. Type Aliases', 'Union, Intersection & Type Narrowing', 'Generics & Utility Types', 'OOP in TypeScript'],
        projectTitleEn: 'TypeSafe Kanban & NutriPlan Application',
        projectTitleAr: 'تطبيق إدارة المهام TypeSafe Kanban وتطبيق التغذية NutriPlan'
      },
      {
        moduleNumber: 7,
        titleEn: 'Sass Preprocessor & CSS Architecture (BEM)',
        titleAr: 'معالج التنسيقات Sass ومعمارية BEM لبناء أنظمة التصميم',
        sessionsCount: 2,
        hoursCount: 8,
        descEn: 'Sessions 23–24: Sass variables, Nesting, Mixins, Functions, Partials, BEM methodology, Scalable CSS architecture, and Reusable design systems.',
        descAr: 'الجلسات 23-24: استخدام Sass/SCSS للتحكم المتطور بالتنسيقات (Mixins, Functions)، واتباع منهجية BEM لبناء أنظمة تصميم قابلة للتوسع.',
        topics: ['Sass Mixins, Functions & Variables', 'Partials & File Organization', 'BEM Naming Methodology', 'Scalable Design System Architecture'],
        projectTitleEn: 'Mini Design System Project',
        projectTitleAr: 'مشروع بناء نظام تصميم مصغر Mini Design System'
      },
      {
        moduleNumber: 8,
        titleEn: 'Tailwind CSS & Utility-First Architecture',
        titleAr: 'إطار العمل الحديث Tailwind CSS والتصميم الفوري',
        sessionsCount: 2,
        hoursCount: 8,
        descEn: 'Sessions 25–26: Utility-first CSS, Responsive utilities, Flexbox & Grid, Dark mode, Interactive states, Custom Tailwind configuration, and Design tokens.',
        descAr: 'الجلسات 25-26: كتابة التنسيقات فورياً بـ Tailwind CSS، دعم الوضع الداكن Dark Mode، تخصيص الـ Config والـ Design Tokens لبناء واجهات عصرية فائقة السرعة.',
        topics: ['Utility-First Philosophy & Syntax', 'Responsive Classes & Dark Mode States', 'Flexbox & Grid in Tailwind', 'Custom Theme Config & Design Tokens'],
        projectTitleEn: 'SaaS Analytics Dashboard',
        projectTitleAr: 'لوحة تحليلات البرمجيات SaaS Analytics Dashboard'
      },
      {
        moduleNumber: 9,
        titleEn: 'Git, GitHub & Developer Productivity Tools',
        titleAr: 'إدارة النسخ Git و GitHub وأدوات المطور الاحترافية',
        sessionsCount: 2,
        hoursCount: 8,
        descEn: 'Sessions 27–28: Git branching, Commits, Merging, Conflict resolution, Pull Requests, Code reviews, GitHub Issues, Chrome DevTools debugging, and Environment variables.',
        descAr: 'الجلسات 27-28: إدارة مشاريع الفريق بـ Git و GitHub، حل التعارضات Merge Conflicts، فحص الأداء بـ Chrome DevTools، والتعامل مع متغيرات البيئة `.env`.',
        topics: ['Git Branching, Merging & Conflicts', 'Pull Requests & GitHub Project Workflows', 'Chrome DevTools & Performance Profiling', 'Environment Variables & VS Code Workflows'],
        projectTitleEn: 'Team GitHub Workflow & Deployment Project',
        projectTitleAr: 'مشروع العمل الجماعي وإدارة الفروع على GitHub'
      },
      {
        moduleNumber: 10,
        titleEn: 'AI-Powered Frontend Development',
        titleAr: 'التطوير البرمجي المدعوم بالذكاء الاصطناعي (AI Workflow)',
        sessionsCount: 2,
        hoursCount: 8,
        descEn: 'Sessions 29–30: Prompt engineering for frontend developers, GitHub Copilot, ChatGPT/Claude for UI generation, AI-assisted debugging, refactoring, test generation, and verification.',
        descAr: 'الجلسات 29-30: استغلال أدوات الذكاء الاصطناعي (Copilot, ChatGPT) لإنشاء وتوليد مكونات الواجهات، تسريع الـ Refactoring، كتابة التوثيق، واختبار جودة الكود المولد.',
        topics: ['Prompt Engineering for UI/UX Code', 'GitHub Copilot & AI Coding Assistants', 'AI-Assisted Debugging & Code Refactoring', 'Verifying AI Code & Preventing Vulnerabilities'],
        projectTitleEn: 'AI-Assisted Refactoring & Quality Improvement Project',
        projectTitleAr: 'مشروع إعادة هيكلة وتطوير واجهة بكود الذكاء الاصطناعي'
      },
      {
        moduleNumber: 11,
        titleEn: 'React.js Core & State Management Mastery',
        titleAr: 'احتراف إطار العمل React 18+ وإدارة الحالات المتقدمة',
        sessionsCount: 10,
        hoursCount: 40,
        descEn: 'Sessions 31–40: React architecture & Vite, JSX, Props, State, Hooks (useState, useEffect, useRef, useMemo, useCallback, Custom Hooks), React Router, Context API, Redux Toolkit, TanStack Query, and Tailwind + shadcn/ui.',
        descAr: 'الجلسات 31-40: دراسة React 18+ بالكامل بـ Vite، المكونات، الـ Hooks الأساسية والمتقدمة، الملاحة بـ React Router، إدارة الحالات العالمية بـ Context API و Redux Toolkit، جلب البيانات السحابية بـ TanStack Query، وتنسيق الواجهات بـ shadcn/ui.',
        topics: ['JSX, Component Composition & Props', 'useState, useEffect, useRef & Custom Hooks', 'React Router v6 & Protected Auth Routes', 'Context API & Global State Management', 'Redux Toolkit (Slices, Thunks, Selectors)', 'TanStack Query (React Query) for Server State', 'Tailwind CSS & shadcn/ui Component Integration'],
        projectTitleEn: 'Adasa, Recipe Finder, Task App, Route Posts (Social Media), Admin Dashboard & Fresh Cart',
        projectTitleAr: 'بناء 6 تطبيقات React ضخمة: Adasa، منصة الوصفات، Route Posts، متجر Fresh Cart، والداشبورد'
      },
      {
        moduleNumber: 12,
        titleEn: 'Advanced React & Next.js App Router Architecture',
        titleAr: 'معمارية React المتقدمة وإطار العمل Next.js (SSR & SEO)',
        sessionsCount: 3,
        hoursCount: 12,
        descEn: 'Sessions 41–43: Feature-based architecture, Custom hooks, Error boundaries, Code splitting, Lazy loading, Next.js App Router, Server/Client Components, SSR, SSG, ISR, and Metadata/SEO.',
        descAr: 'الجلسات 41-43: بناء معمارية الواجهات Feature-Based، تقسيم الأكواد بـ Code Splitting، احتراف Next.js بـ App Router، التقديم السحابي SSR & SSG للظهور الممتاز في محركات البحث SEO.',
        topics: ['Feature-Based Architecture & Design Patterns', 'React Suspense, Code Splitting & Lazy Loading', 'Next.js App Router & Server/Client Components', 'SSR, SSG, ISR & Metadata Optimization'],
        projectTitleEn: 'Real-Time Chat, Project Management, Booking Platform, SEO Blog & Next.js Store',
        projectTitleAr: 'بناء 5 تطبيقات متقدمة: الشات اللحظي، منصة الحجز، مدونة SEO Next.js ومتجر أونلاين'
      },
      {
        moduleNumber: 13,
        titleEn: 'Testing, Performance & Frontend Security',
        titleAr: 'اختبار الواجهات (Vitest/RTL)، تحسين الأداء (Lighthouse) والأمان',
        sessionsCount: 2,
        hoursCount: 8,
        descEn: 'Sessions 44–45: Unit & Integration testing with Vitest and React Testing Library, Core Web Vitals, Lighthouse profiling, Image/Bundle optimization, Memoization, and XSS/CSRF security.',
        descAr: 'الجلسات 44-45: كتابة اختبارات الـ Unit & Component بـ Vitest و React Testing Library، قياس السرعة بـ Lighthouse، ضغط الصور والأكواد، وتأمين التوكنز وضد ثغرات XSS.',
        topics: ['Vitest & React Testing Library (RTL)', 'Core Web Vitals & Lighthouse Optimization', 'Bundle Size Optimization & Memoization', 'XSS & CSRF Prevention & Token Security'],
        projectTitleEn: 'Testing Challenge, Performance Optimization & Security Challenge',
        projectTitleAr: '3 تحديات هندسية: اختبار الواجهات، تحسين السرعة، وتأمين الـ Frontend'
      },
      {
        moduleNumber: 14,
        titleEn: 'Deployment & Production DevOps',
        titleAr: 'النشر التلقائي للإنتاج والـ CI/CD (Vercel & Netlify)',
        sessionsCount: 1,
        hoursCount: 4,
        descEn: 'Session 46: Production build optimization, Environment variables, Vercel & Netlify deployment workflows, Custom domain configuration, and CI/CD automation.',
        descAr: 'الجلسة 46: تجهيز نسخة الإنتاج Production Build، النشر التلقائي أونلاين على Vercel و Netlify، ربط الدومين الخاص، وإعداد أتمتة النشر CI/CD.',
        topics: ['Production Build Generation & Tree Shaking', 'Vercel & Netlify Automatic Deployment', 'Custom Domains & SSL Configuration', 'CI/CD Automated Deployment Workflows'],
        projectTitleEn: 'Live Production Deployment of Portfolio & React Projects',
        projectTitleAr: 'نشر كافة المشاريع السابقة حية أونلاين على Vercel و Netlify'
      },
      {
        moduleNumber: 15,
        titleEn: 'Career Preparation & Portfolio Workshop',
        titleAr: 'التأهيل المهني وبناء السيرة الذاتية والـ Portfolio',
        sessionsCount: 1,
        hoursCount: 4,
        descEn: 'Session 47: Frontend developer portfolio building, GitHub profile optimization, LinkedIn optimization, ATS-friendly CV drafting, Technical interview preparation, and Freelancing fundamentals.',
        descAr: 'الجلسة 47: إعداد البورتفوليو الشخصي للمطور، صياغة الـ CV المعتمد ATS-Friendly، تحسين بروفايل LinkedIn، والتحضير للمقابلات التقنية والـ Code Reviews.',
        topics: ['ATS-Friendly Frontend Developer CV Writing', 'GitHub & LinkedIn Profile Optimization', 'Technical Interview Q&A & Live Coding Prep', 'Freelancing Fundamentals & Project Pricing'],
        projectTitleEn: 'Portfolio & Career Readiness Package',
        projectTitleAr: 'إعداد حزمة التقديم لسوق العمل (Portfolio + ATS CV + LinkedIn)'
      },
      {
        moduleNumber: 16,
        titleEn: 'Final Enterprise Graduation Capstone Project',
        titleAr: 'مشروع التخرج النهائي المؤسسي المتكامل',
        sessionsCount: 5,
        hoursCount: 20,
        descEn: 'Sessions 48–50: Product planning, UI implementation, React + TypeScript architecture, Auth & protected routes, API integration, Search/Filters/Pagination, Booking & Checkout workflow, Testing, Security, and Live Defense.',
        descAr: 'الجلسات 48-50: بناء منصة حجز وتذاكر حية ومكتملة (Production-Level Event Booking Platform) بـ React و TypeScript و Tailwind، تجمع التوثيق، السلة، الدفع، البحث، والاختبارات والنشر الحي.',
        topics: ['Full Product Architecture & Requirements', 'React + TypeScript Production Implementation', 'Protected Auth, Search, Filters & Checkout', 'Vitest Testing, Performance & Vercel Deployment', 'Live Graduation Defense & Code Review'],
        projectTitleEn: 'Production-Level Event Booking Platform (Graduation Capstone)',
        projectTitleAr: 'منصة حجز الفعاليات والتذاكر المتكاملة (مشروع التخرج النهائي)'
      }
    ],
    projectRoadmap: [
      { num: 1, titleEn: 'Personal Portfolio & Tech Conference Site', titleAr: 'موقع البورتفوليو وموقع المؤتمر التقني (HTML5 & Accessibility)', levelEn: 'Beginner', levelAr: 'مبتدئ' },
      { num: 2, titleEn: 'FitCore Gym & DJI Mavic Landing Page', titleAr: 'منصة FitCore وموقع DJI Mavic (CSS Grid & Flexbox)', levelEn: 'Beginner', levelAr: 'مبتدئ' },
      { num: 3, titleEn: 'Games Arena & Travel Explorer (Bootstrap 5)', titleAr: 'تطبيقات Games Arena ودليل السفر (Bootstrap 5)', levelEn: 'Beginner', levelAr: 'مبتدئ' },
      { num: 4, titleEn: 'ContactHub, Expense Tracker & Kanban App', titleAr: 'تطبيقات JS: ContactHub وحاسبة المصاريف والـ Kanban', levelEn: 'Intermediate', levelAr: 'متوسط' },
      { num: 5, titleEn: 'Cosmos Dashboard & Weather API Explorer', titleAr: 'داشبورد الفضاء وتطبيق الطقس وسينما الأفلام (Web APIs)', levelEn: 'Intermediate', levelAr: 'متوسط' },
      { num: 6, titleEn: 'TypeSafe Kanban & NutriPlan TypeScript App', titleAr: 'تطبيقات TypeSafe Kanban و NutriPlan (TypeScript)', levelEn: 'Intermediate', levelAr: 'متوسط' },
      { num: 7, titleEn: 'SaaS Analytics Dashboard (Tailwind CSS)', titleAr: 'لوحة تحليلات SaaS Analytics (Tailwind CSS & Dark Mode)', levelEn: 'Intermediate', levelAr: 'متوسط' },
      { num: 8, titleEn: 'Route Posts Social Platform & Admin Panel', titleAr: 'شبكة التواصل الاجتماعي Route Posts وداشبورد الأدمن (React)', levelEn: 'Advanced', levelAr: 'متقدم' },
      { num: 9, titleEn: 'Fresh Cart Production E-Commerce (React)', titleAr: 'متجر Fresh Cart المتكامل مع التوكنز والسلة (React)', levelEn: 'Advanced', levelAr: 'متقدم' },
      { num: 10, titleEn: 'SEO-Optimized Next.js Blog & Product Store', titleAr: 'مدونة وسوق منتجات متوافق مع محركات البحث (Next.js App Router)', levelEn: 'Advanced', levelAr: 'متقدم' },
      { num: 11, titleEn: 'Real-Time Chat & Booking Platform', titleAr: 'تطبيق المحادثات اللحظية ومنصة الحجز التفاعلية', levelEn: 'Advanced', levelAr: 'متقدم' },
      { num: 12, titleEn: 'Vitest Testing & Lighthouse Performance Audit', titleAr: 'تحدي الاختبارات Vitest وتحسين سرعة الواجهات Lighthouse', levelEn: 'Advanced', levelAr: 'متقدم' },
      { num: 13, titleEn: 'Portfolio & ATS CV Career Package', titleAr: 'حزمة البورتفوليو والسيرة الذاتية وبروفايل LinkedIn', levelEn: 'Career', levelAr: 'تأهيل مهني' },
      { num: 14, titleEn: 'Production Event Booking Platform (Capstone)', titleAr: 'منصة حجز الفعاليات والتذاكر المؤسسية (مشروع التخرج النهائي)', levelEn: 'Capstone', levelAr: 'مشروع تخرج' }
    ]
  },

  // 2. PROFESSIONAL BACKEND DEVELOPMENT DIPLOMA
  {
    id: 'backend-development',
    category: 'software',
    categoryLabelEn: 'SOFTWARE ENGINEERING',
    categoryLabelAr: 'هندسة وتطوير البرمجيات',
    titleEn: 'Professional Backend Development Diploma',
    titleAr: 'دبلومة تطوير الخوادم وهندسة الـ Backend المحترفة (Node.js & NestJS)',
    taglineEn: 'Project-Based Backend Engineering: Node.js, Express, MongoDB, SQL, NestJS, TypeScript, Microservices & Docker.',
    taglineAr: 'هندسة الخوادم بالأنظمة الواقعية • Node.js • Express • SQL & NoSQL • TypeScript • NestJS • Microservices • Docker.',
    descEn: 'A hands-on backend engineering diploma built around progressive projects, labs, challenges, and production-style systems. Learners move from web and Node.js fundamentals to databases, REST APIs, security, real-time systems, TypeScript, NestJS, architecture, microservices, Docker, testing, CI/CD, and career preparation with 34+ practical projects and 3 major graduation capstones.',
    descAr: 'دبلومة هندسية تطبيقية شاملة 200+ ساعة تدريبية معتمدة مصممة لبناء مهندس خوادم احترافي (Backend Engineer). تنتقل بك من الأساسيات و Node.js إلى احتراف قواعد البيانات SQL و NoSQL، حماية الخوادم، الأنظمة اللحظية Real-time، لغة TypeScript، إطار NestJS، المعماريات المتقدمة Clean Architecture، الخدمات الدقيقة Microservices مع RabbitMQ، وتجهيز البيئات بـ Docker وحاويات النشر، مع بناء 34 مشروعاً حياً و3 مشاريع تخرج مؤسسية.',
    durationEn: 'Approximately 4–5 Months (50+ Sessions / 200+ Hours)',
    durationAr: 'حوالي 4–5 أشهر (200+ ساعة تدريبية معتمدة)',
    totalSessions: 50,
    totalHours: 200,
    sessionDurationEn: '4 Hours / Session',
    sessionDurationAr: '4 ساعات لكل جلسة',
    sessionsPerWeekEn: '3 Sessions / Wk',
    sessionsPerWeekAr: '3 جلسات أسبوعياً',
    levelEn: 'Beginner → Advanced Professional',
    levelAr: 'من المبتدئ إلى مهندس خوادم احترافي',
    highlights: [
      'Node.js & Express Architecture',
      'SQL (PostgreSQL/MySQL) & MongoDB',
      'TypeScript & NestJS Framework',
      'Real-Time WebSockets & Redis Caching',
      'Event-Driven Microservices & RabbitMQ',
      'Docker Containerization & CI/CD',
      '3 Major Production Capstones'
    ],
    projectsCountEn: '34+ Projects, Labs & 3 Major Capstones',
    projectsCountAr: '34+ مشروعاً ومعملاً و3 مشاريع تخرج مؤسسية',
    priceEgp: 10000,
    isFoundingBatch: true,
    foundingBatchBadgeEn: 'Founding Batch Offer: 10,000 EGP',
    foundingBatchBadgeAr: 'خصم الدفعة التأسيسية: 10,000 ج.م شامل كافة المشاريع والمعامل والشهادة',
    schedulingNoteEn: '200+ Total Training Hours delivered over 50 sessions (4 hours per session, 3 sessions per week). 4–5 months target duration with hands-on labs integrated into every module.',
    schedulingNoteAr: 'ملاحظة المواعيد: 200+ ساعة تدريبية معتمدة مقسمة على 50 جلسة (4 ساعات لكل جلسة | 3 جلسات أسبوعياً | 4-5 أشهر)، مع دمج المشاريع والمعامل الحية داخل كل موديول.',
    tools: [
      'Node.js',
      'Express.js',
      'TypeScript',
      'NestJS',
      'MongoDB & Mongoose',
      'PostgreSQL & MySQL',
      'Sequelize & Prisma',
      'Redis',
      'Socket.IO',
      'RabbitMQ',
      'Docker & Docker Compose',
      'Jest & Supertest',
      'Git & GitHub',
      'Postman & Swagger',
      'AWS S3 & EC2'
    ],
    careerOutcomesEn: [
      'Backend Software Engineer',
      'Node.js / Express Developer',
      'NestJS & TypeScript Engineer',
      'API & Database Systems Architect',
      'Microservices & DevOps Backend Specialist',
      'Full-Stack Backend Specialist'
    ],
    careerOutcomesAr: [
      'مهندس خوادم ونظم (Backend Software Engineer)',
      'مطور تطبيقات Node.js & Express',
      'مهندس برمجيات TypeScript & NestJS',
      'مهندس واجهات برمجية وقواعد بيانات (APIs & Database Architect)',
      'مهندس خدمات دقيقة ونشر (Microservices & DevOps Engineer)',
      'مطور باك إند محترف لسوق العمل والمشاريع المستقلة'
    ],
    curriculumModules: [
      {
        moduleNumber: 1,
        titleEn: 'Web & Backend Foundations',
        titleAr: 'أساسيات الويب والبرمجة اللا تزامنية و Node.js Runtime',
        sessionsCount: 4,
        hoursCount: 16,
        descEn: 'Web & HTTP/HTTPS fundamentals, DNS, TCP/IP, JS ES6+ (Promises, Async/Await), Node.js architecture (V8, Event Loop, Thread Pool), and CommonJS vs ES Modules.',
        descAr: 'فهم بروتوكولات الويب HTTP/HTTPS، لغة JS ES6+ المتقدمة (Promises & Async/Await)، البنية الداخلية لـ Node.js والـ Event Loop والـ Thread Pool.',
        topics: ['HTTP/HTTPS Methods, Headers & Status Codes', 'DNS & TCP/IP Network Basics', 'ES6+ Asynchronous JavaScript', 'Node.js Architecture (V8 Engine & Event Loop)', 'Thread Pool & Non-Blocking I/O', 'CommonJS vs. ES Modules'],
        projectTitleEn: 'CLI Task Manager & HTTP Request Analyzer Lab',
        projectTitleAr: 'تطبيق إدارة المهام التفاعلي عبر الـ CLI ومعمل تحليل طلبات الـ HTTP'
      },
      {
        moduleNumber: 2,
        titleEn: 'Git & GitHub Portfolio Workflows',
        titleAr: 'إدارة النسخ الاحترافية بـ Git ودورة عمل GitHub',
        sessionsCount: 2,
        hoursCount: 8,
        descEn: 'Git fundamentals, GitHub workflow, Feature branching, Pull Requests, Code reviews, Issue tracking, Releases, Clean commit history, and Open-Source basics.',
        descAr: 'احتراف استخدام Git و GitHub، إدارة الفروع Feature Branches، طلبات الدمج Pull Requests، حل التعارضات Merge Conflicts، وبناء بروفايل احترافي.',
        topics: ['Git Core Commands & Architecture', 'Feature Branching Strategy & PRs', 'Resolving Merge Conflicts', 'GitHub Releases, Issues & Markdown README', 'Clean Commit History Best Practices'],
        projectTitleEn: 'Professional GitHub Portfolio Repository',
        projectTitleAr: 'مستودع البورتفوليو الهندسي الموثق على GitHub'
      },
      {
        moduleNumber: 3,
        titleEn: 'Node.js Core Modules & Express.js Framework',
        titleAr: 'موديولات Node.js الأساسية وإطار العمل Express.js',
        sessionsCount: 5,
        hoursCount: 20,
        descEn: 'Node.js core modules (FS, Path, OS, Events, Buffers, Streams, HTTP), Express architecture, Routers, Controllers, Services, Custom Middlewares, File Handling, Streams & EJS.',
        descAr: 'إتقان الموديولات المدمجة بـ Node.js، التعامل مع الملفات والـ Streams والـ Buffers، بناء الخوادم بـ Express.js، تصميم الـ Routers والـ Middlewares ومعالجة الأخطاء.',
        topics: ['FS, Path, OS & Event Emitter Modules', 'Buffers, Readable/Writable Streams', 'Express.js Routing & Middleware Pipeline', 'MVC Pattern (Controllers & Services)', 'File Upload & Download Streaming', 'Global Error Handling Middlewares'],
        projectTitleEn: 'Blog REST API, File Management API & URL Shortener',
        projectTitleAr: 'بناء 3 تطبيقات: Blog API، نظام إدارة الملفات، ومختصر الروابط'
      },
      {
        moduleNumber: 4,
        titleEn: 'Database Engineering (SQL, NoSQL, ORMs & Aggregations)',
        titleAr: 'هندسة قواعد البيانات (SQL & NoSQL & Mongoose & Sequelize)',
        sessionsCount: 6,
        hoursCount: 24,
        descEn: 'SQL (MySQL & PostgreSQL), DDL/DML queries, Normalization, JOINs, Indexes, Transactions, Sequelize ORM, MongoDB Atlas, Mongoose Schemas, Aggregations, ACID & CAP Theorem.',
        descAr: 'تصميم وبناء قواعد البيانات العلاقاتية SQL والـ NoSQL، الاستعلامات المتقدمة JOINs، الفهارس Indexes، التوثيق بـ Mongoose، استخدام Sequelize ORM، ودراسة ACID و CAP Theorem.',
        topics: ['SQL Queries, JOINs, Indexes & Transactions', 'MySQL & PostgreSQL Relational Design', 'Sequelize ORM & Migrations', 'MongoDB Atlas & Mongoose Schema Design', 'Mongoose Aggregation Pipeline & Population', 'ACID Properties, CAP Theorem & SQL vs. NoSQL'],
        projectTitleEn: 'Inventory Management API, Library System & SQL E-Commerce DB',
        projectTitleAr: '3 مشاريع: API إدارة المخزون، نظام المكتبة، وقاعدة بيانات متجر إلكتروني SQL'
      },
      {
        moduleNumber: 5,
        titleEn: 'REST APIs & Backend Engineering Standards',
        titleAr: 'معايير بناء الـ REST APIs والتأمين والتحقق Validation',
        sessionsCount: 5,
        hoursCount: 20,
        descEn: 'REST principles, API versioning, Authentication (bcrypt & JWT), Refresh Tokens, Role-Based Access Control (RBAC), Validation (Joi/Zod), Pagination, Rate Limiting, and Swagger/OpenAPI.',
        descAr: 'تصميم الـ RESTful APIs بحرفية، التوثيق بـ JWT والـ Refresh Tokens، نظام الصلاحيات RBAC، فحص البيانات بـ Joi/Zod، تقسيم الصفحات Pagination، وتوثيق الـ APIs بـ Swagger.',
        topics: ['REST Architecture & API Versioning', 'Password Hashing (bcrypt) & JWT Auth', 'Refresh Tokens & Logout Strategies', 'Role-Based Access Control (RBAC)', 'Request Validation with Joi / Zod', 'Pagination, Searching, Sorting & Filtering', 'Swagger / OpenAPI Documentation'],
        projectTitleEn: 'Authentication API, E-Commerce API Part 1 & Booking System',
        projectTitleAr: '3 مشاريع: API التوثيق والأمان، API المتجر الإلكتروني، ونظام حجز الفعاليات'
      },
      {
        moduleNumber: 6,
        titleEn: 'Backend Security & OWASP Defense',
        titleAr: 'حماية الخوادم والـ OWASP Top 10 والأمان التشفيري',
        sessionsCount: 4,
        hoursCount: 16,
        descEn: 'OWASP Top 10 vulnerabilities, CIA Triad, Helmet.js security headers, CORS, Rate Limiting, Cryptography (Symmetric/Asymmetric), Hashing, Node Crypto, OTP, and Security Auditing.',
        descAr: 'دراسة أشهر ثغرات OWASP (SQLi, NoSQLi, XSS, CSRF, Brute Force)، حماية الخادم بـ Helmet و CORS، التشفير والتوقيع الرقمي بـ Node Crypto، وتأمين العمليات البنكية.',
        topics: ['OWASP Top 10 Vulnerabilities & Defense', 'SQL & NoSQL Injection Prevention', 'XSS, CSRF & Brute-Force Hardening', 'Security Headers (Helmet) & CORS Policies', 'Symmetric & Asymmetric Cryptography', 'OTP Generation & Password Reset Workflows'],
        projectTitleEn: 'Secure Banking API & Vulnerable API Security Audit Lab',
        projectTitleAr: 'مشروع Banking API الآمن ومعمل اختراق واكتشاف ثغرات الـ Backend'
      },
      {
        moduleNumber: 7,
        titleEn: 'Advanced Backend Features (Cloud, Payments, CRON & OAuth)',
        titleAr: 'الخدمات المتقدمة: التخزين السحابي، المدفوعات، والمهام المجدولة',
        sessionsCount: 5,
        hoursCount: 20,
        descEn: 'Email verification (Nodemailer), Cloud Storage (Multer + Cloudinary / AWS S3), OAuth 2.0 (Google Social Login), Payment Gateway Integration (Stripe / Paymob Webhooks), Scheduled Jobs (node-cron), and Logging (Winston).',
        descAr: 'ربط الخدمات الخارجية: إرسال الإيميلات، التخزين السحابي بـ Cloudinary و AWS S3، تسجيل الدخول بـ Google OAuth، بوابات الدفع Paymob و Stripe مع الـ Webhooks، والمهام المجدولة CRON.',
        topics: ['Nodemailer & Responsive HTML Emails', 'Cloud Storage Integration (Cloudinary & AWS S3)', 'Google OAuth 2.0 & Account Linking', 'Stripe / Paymob Payment Lifecycle & Webhooks', 'Automated Scheduled Jobs (node-cron)', 'Structured Logging with Winston & Morgan'],
        projectTitleEn: 'Email Auth, Cloud Storage, Social Auth, Payments & Ticket System',
        projectTitleAr: '6 مشاريع: البريد السحابي، التخزين، OAuth، بوابات الدفع، والمهام المجدولة'
      },
      {
        moduleNumber: 8,
        titleEn: 'Real-Time WebSockets & Redis Caching Performance',
        titleAr: 'التطبيقات اللحظية بـ WebSockets وتسريع الأداء بـ Redis',
        sessionsCount: 4,
        hoursCount: 16,
        descEn: 'Redis Caching (TTL, Invalidation, Hit/Miss), WebSockets & Socket.IO (Rooms, Namespaces, Event-driven communication), Query Optimization, Database Indexing, and Connection Pooling.',
        descAr: 'استخدام Redis كطبقة كاش لتسريع الاستجابة 10x، بناء تطبيقات التواصل اللحظي بـ Socket.IO والغرف التفاعلية Rooms، تحسين استعلامات قواعد البيانات والدوال الفهرسية.',
        topics: ['Redis In-Memory Caching & TTL Invalidation', 'Socket.IO Architecture, Rooms & Namespaces', 'Real-Time Event-Driven Communication', 'Database Query Optimization & Indexing', 'Connection Pooling & Performance Tuning'],
        projectTitleEn: 'Real-Time Chat App, Notification System & Redis Challenge',
        projectTitleAr: '3 مشاريع: شات لحظي، نظام إشعارات فوري، وتحدي تسريع Redis'
      },
      {
        moduleNumber: 9,
        titleEn: 'TypeScript & NestJS Framework Mastery',
        titleAr: 'احتراف لغة TypeScript وإطار العمل المتقدم NestJS',
        sessionsCount: 4,
        hoursCount: 16,
        descEn: 'TypeScript for Backend (Generics, Interfaces, Utility Types, DTOs), NestJS Architecture (Modules, Controllers, Providers, Dependency Injection, Pipes, Guards, Interceptors, Filters).',
        descAr: 'تحويل المشاريع إلى TypeScript لضمان قوة الأنواع Type-Safety، إتقان إطار العمل NestJS وهيكلته المؤسسية Modules, Controllers, Services, Dependency Injection, Guards, Pipes.',
        topics: ['TypeScript Generics, Interfaces & DTOs', 'NestJS Architecture & Dependency Injection', 'Modules, Controllers & Service Providers', 'Guards (Auth & Roles) & Validation Pipes', 'Interceptors & Global Exception Filters'],
        projectTitleEn: 'TypeScript REST API, NestJS CRM Backend & NestJS Blog API',
        projectTitleAr: '3 مشاريع: API بـ TypeScript، نظام CRM بـ NestJS، و Blog API بـ NestJS'
      },
      {
        moduleNumber: 10,
        titleEn: 'Backend Architecture, Clean Code & Design Patterns',
        titleAr: 'معمارية الخوادم (Clean Architecture & System Design)',
        sessionsCount: 4,
        hoursCount: 16,
        descEn: 'Refactoring legacy code, Layered Architecture, MVC, Service Layer, Repository Pattern, Clean Architecture (Domain, Application, Infrastructure), System Design (Scalability, Load Balancing, Caching).',
        descAr: 'إعادة هيكلة الأكواد القديمة Refactoring، تطبيق نمط Clean Architecture وفصل الطبقات (Domain, Application, Infrastructure)، ودراسة تصميم النظم المتقدمة System Design والتحمل العالي.',
        topics: ['Refactoring Code & Coupling Reduction', 'Layered Architecture & Repository Pattern', 'Clean Architecture (Domain/Infra Separation)', 'System Design: Horizontal vs. Vertical Scaling', 'Stateless Services & API Gateways'],
        projectTitleEn: 'Legacy Refactoring Challenge & Clean Architecture API',
        projectTitleAr: 'مشروع إعادة هيكلة كود قديم وتطبيق Clean Architecture API'
      },
      {
        moduleNumber: 11,
        titleEn: 'Event-Driven Microservices & RabbitMQ',
        titleAr: 'الخدمات الدقيقة (Microservices) والمراسلات بـ RabbitMQ',
        sessionsCount: 3,
        hoursCount: 12,
        descEn: 'Monolith vs Microservices, Service Boundaries, API Gateways, Database per Service, Event-Driven Architecture, RabbitMQ (Producers, Consumers, Exchanges, Queues, Routing, Acknowledgments).',
        descAr: 'التحول من Monolith إلى Microservices، تقسيم الخدمات، التواصل اللا تزامني عبر الرسائل بـ RabbitMQ (Exchanges, Queues, Routing)، وإدارة المعاملات عبر الخدمات.',
        topics: ['Monolith vs. Microservices Architecture', 'Service Boundaries & Database-per-Service', 'RabbitMQ Architecture (Exchanges & Queues)', 'Producer/Consumer Event-Driven Messaging', 'API Gateway & Inter-Service Security'],
        projectTitleEn: 'Order Processing Microservices System with RabbitMQ',
        projectTitleAr: 'نظام معالجة الطلبات الدقيق المعتمد على الرسائل بـ RabbitMQ'
      },
      {
        moduleNumber: 12,
        titleEn: 'Docker Containerization, DevOps & CI/CD Pipelines',
        titleAr: 'حفظ البيئات بـ Docker والنشر التلقائي (DevOps & CI/CD)',
        sessionsCount: 3,
        hoursCount: 12,
        descEn: 'Docker basics (Images, Containers, Volumes, Networks), Docker Compose multi-container setups (Node + Mongo + Redis), GitHub Actions CI/CD pipelines, AWS EC2 & Cloud deployment.',
        descAr: 'تغليف التطبيقات بـ Docker، إعداد Docker Compose للبيئات المتعددة (Backend + DB + Redis)، أتمتة النشر والاختبار بـ GitHub Actions CI/CD، والنشر على خوادم AWS و Cloud.',
        topics: ['Dockerfiles, Image Building & Containers', 'Docker Compose Multi-Container Orchestration', 'Environment Variables & Secrets Management', 'GitHub Actions CI/CD Automated Pipelines', 'AWS EC2, S3 & Cloud Deployment Best Practices'],
        projectTitleEn: 'Containerized Backend Setup & Automated CI/CD Pipeline',
        projectTitleAr: 'تطبيق حاويات Docker الكاملة وأتمتة النشر أونلاين بـ CI/CD'
      },
      {
        moduleNumber: 13,
        titleEn: 'Testing, Quality & Code Reviews (Jest & Supertest)',
        titleAr: 'اختبارات البرمجيات (Unit & Integration Testing) وجودة الكود',
        sessionsCount: 4,
        hoursCount: 16,
        descEn: 'Unit testing, Integration testing, API testing with Jest & Supertest, Mocking & Stubbing, Code Coverage, Static Analysis (ESLint, Prettier), and Professional Code Reviews.',
        descAr: 'كتابة اختبارات الوحدة Integration & Unit Tests بـ Jest و Supertest، عمل Mocks للخدمات، التغطية البرمجية Coverage، فحص الأكواد بـ ESLint، ومراجعات الكود Code Review.',
        topics: ['Unit Testing with Jest Framework', 'Integration & API Testing with Supertest', 'Mocking, Stubbing & Test Databases', 'Code Coverage Reports & Quality Metrics', 'ESLint, Prettier & Code Review Standards'],
        projectTitleEn: 'Backend Automated Testing Challenge & Code Review Audit',
        projectTitleAr: 'تحدي الأتمتة البرمجية واختبار الـ APIs ومراجعة الكود'
      },
      {
        moduleNumber: 14,
        titleEn: 'Development Tools & AI-Assisted Engineering Workshop',
        titleAr: 'أدوات المطور والذكاء الاصطناعي في هندسة الباك إند',
        sessionsCount: 1,
        hoursCount: 4,
        descEn: 'Tooling Workshop (VS Code, Postman, Compass), AI-assisted development (ChatGPT, Claude, Gemini, GitHub Copilot), AI debugging, code reviews, prompting, and security considerations.',
        descAr: 'ورشة عمل الأدوات والذكاء الاصطناعي (ChatGPT, Claude, Copilot) للتطوير والسبر، كتابة الـ Prompts الهندسية، تسريع اكتشاف الأخطاء، وتجنب ثغرات الكود المولد بـ AI.',
        topics: ['Advanced Postman & MongoDB Compass Workflows', 'GitHub Copilot & AI Code Generation', 'AI-Assisted Debugging & Code Refactoring', 'Prompt Engineering for Backend Developers', 'Avoiding AI Security Risks & Hallucinations'],
        projectTitleEn: 'AI-Enhanced Development & Tooling Workflow Lab',
        projectTitleAr: 'معمل تسريع وتطوير الخوادم بأدوات الذكاء الاصطناعي'
      },
      {
        moduleNumber: 15,
        titleEn: 'Career Preparation & 3 Major Graduation Capstones',
        titleAr: 'التأهيل المهني وبناء البورتفوليو ومشاريع التخرج الثلاثة',
        sessionsCount: 3,
        hoursCount: 12,
        descEn: 'Professional Backend Portfolio, ATS CV writing, LinkedIn optimization, System Design interview prep, Take-Home challenges, and 3 Enterprise Graduation Capstones.',
        descAr: 'إعداد ملف البورتفوليو الهندسي، كتابة الـ CV المعتمد، التحضير لمقابلات الـ System Design، وإتمام 3 مشاريع تخرج مؤسسية ضخمة.',
        topics: ['ATS-Friendly Backend CV Writing', 'LinkedIn & GitHub Engineering Portfolio', 'System Design & Technical Interview Prep', 'Take-Home Coding Challenge Strategies', 'Graduation Projects Live Defense'],
        projectTitleEn: '3 Major Graduation Capstones (Saraha, Social Media, E-Commerce Microservices)',
        projectTitleAr: 'إنجاز 3 مشاريع تخرج مؤسسية (منصة صراحة، شبكة تواصل، ومتجر Microservices)'
      }
    ],
    projectRoadmap: [
      { num: 1, titleEn: 'CLI Task Manager & HTTP Analyzer', titleAr: 'مدير المهام عبر الـ CLI ومعمل تحليل طلبات الـ HTTP', levelEn: 'Beginner', levelAr: 'مبتدئ' },
      { num: 2, titleEn: 'Blog REST API & File Management API', titleAr: 'API مدونة ونظام رفع وإدارة الملفات بـ Streams', levelEn: 'Beginner', levelAr: 'مبتدئ' },
      { num: 3, titleEn: 'URL Shortener with Analytics & Expiration', titleAr: 'تطبيق مختصر الروابط مع الإحصائيات وانتهاء الصلاحية', levelEn: 'Beginner', levelAr: 'مبتدئ' },
      { num: 4, titleEn: 'SQL E-Commerce & Library Management DB', titleAr: 'قاعدة بيانات متجر SQL العلاقاتية ونظام إدارة المكتبة', levelEn: 'Intermediate', levelAr: 'متوسط' },
      { num: 5, titleEn: 'Inventory Management API (Pagination & Search)', titleAr: 'API إدارة المخزون والمستودعات مع البحث والصفحات', levelEn: 'Intermediate', levelAr: 'متوسط' },
      { num: 6, titleEn: 'Secure Authentication & RBAC Booking API', titleAr: 'نظام توثيق آمن بـ JWT والـ RBAC ونظام حجز الفعاليات', levelEn: 'Intermediate', levelAr: 'متوسط' },
      { num: 7, titleEn: 'Secure Banking API & OWASP Audit Lab', titleAr: 'API البنك الآمن ومعمل اكتشاف ثغرات الـ OWASP', levelEn: 'Intermediate', levelAr: 'متوسط' },
      { num: 8, titleEn: 'Cloud Storage, Stripe Payments & OAuth API', titleAr: 'التخزين السحابي، مدفوعات Stripe/Paymob، و Google OAuth', levelEn: 'Intermediate', levelAr: 'متوسط' },
      { num: 9, titleEn: 'Real-Time Chat & Redis Caching Performance', titleAr: 'تطبيق محادثة لحظية بـ Socket.IO ومحرك كاش Redis', levelEn: 'Advanced', levelAr: 'متقدم' },
      { num: 10, titleEn: 'TypeScript REST API & NestJS CRM Backend', titleAr: 'تطبيق REST بـ TypeScript ونظام CRM مؤسسي بـ NestJS', levelEn: 'Advanced', levelAr: 'متقدم' },
      { num: 11, titleEn: 'RabbitMQ Microservices & Dockerized CI/CD', titleAr: 'خدمات دقيقة بـ RabbitMQ وحاويات Docker مع CI/CD', levelEn: 'Advanced', levelAr: 'متقدم' },
      { num: 12, titleEn: 'Graduation 1: Saraha Anonymous Platform', titleAr: 'مشروع تخرج 1: منصة صراحة والرسائل المجهولة', levelEn: 'Capstone', levelAr: 'مشروع تخرج' },
      { num: 13, titleEn: 'Graduation 2: Social Media Backend API', titleAr: 'مشروع تخرج 2: شبكة تواصل اجتماعي بـ TypeScript و WebSockets', levelEn: 'Capstone', levelAr: 'مشروع تخرج' },
      { num: 14, titleEn: 'Graduation 3: Production E-Commerce Microservices', titleAr: 'مشروع تخرج 3: منصة متجر إلكتروني Microservices بـ NestJS & Docker', levelEn: 'Capstone', levelAr: 'مشروع تخرج' }
    ]
  },

  // 3. PROFESSIONAL MOBILE APPLICATION DEVELOPMENT DIPLOMA (FLUTTER / CROSS-PLATFORM)
  {
    id: 'mobile-app-development',
    category: 'mobile',
    categoryLabelEn: 'MOBILE ENGINEERING',
    categoryLabelAr: 'هندسة وتطوير تطبيقات المحمول',
    titleEn: 'Professional Mobile Application Development Diploma (Flutter / Cross-Platform)',
    titleAr: 'دبلومة تطوير تطبيقات المحمول المحترفة (Flutter / Cross-Platform)',
    taglineEn: 'Market-Complete Flutter Masterclass: 200 Hours, 50 Sessions, 5+ Major Production Apps, BLoC, Clean Arch & Dual-Store Launch.',
    taglineAr: 'دبلومة احترافية شاملة 200 ساعة • 50 جلسة • 5+ تطبيقات حية • BLoC • Clean Architecture • Firebase • النشر على Google Play & App Store.',
    descEn: 'A comprehensive, hands-on mobile application development program that takes learners from programming fundamentals to production-ready Flutter applications, covering Dart, Flutter UI, BLoC/Cubit state management, REST APIs with Dio, Firebase, Clean Architecture, Hive offline storage, Google Maps, payment gateways, AI-assisted workflows, testing, CI/CD pipelines, and dual-store deployment (Play Store & App Store).',
    descAr: 'دبلومة عمليّة تطبيقيّة شاملة 200 ساعة تدريبية معتمدة لبناء مطوّر تطبيقات هواتف ذكية محترف (Cross-Platform Mobile Engineer) لنظامي iOS و Android باستخدام إطار العمل الأكثر طلباً Flutter ولغة Dart. تنتقل بك من الأساسيات والـ OOP إلى بناء الواجهات التفاعلية، إدارة الحالات المعقدة بـ BLoC/Cubit، تطبيق Clean Architecture، ربط الـ APIs بـ Dio، خدمات Firebase، الحفظ المحلي بـ Hive، الخرائط والمدفوعات، وأتمتة النشر على متجري Google Play و App Store.',
    durationEn: 'Approximately 4 Months (50 Sessions / 200 Hours)',
    durationAr: 'حوالي 4 أشهر (50 جلسة تفاعلية | 200 ساعة معتمدة)',
    totalSessions: 50,
    totalHours: 200,
    sessionDurationEn: '4 Hours / Session',
    sessionDurationAr: '4 ساعات لكل جلسة',
    sessionsPerWeekEn: '3 Sessions / Wk',
    sessionsPerWeekAr: '3 جلسات أسبوعياً',
    levelEn: 'Beginner → Professional Mobile Engineer',
    levelAr: 'من المبتدئ إلى مهندس تطبيقات محمول محترف',
    highlights: [
      'Dart Programming Language & Null-Safe OOP',
      'Flutter Responsive UI Layouts & Pixel-Perfect Design',
      'Advanced State Management (BLoC / Cubit & Provider)',
      'MVVM & Clean Architecture with Repository Pattern',
      'REST APIs Integration with Dio & JWT Auth',
      'Firebase Backend (Auth, Firestore, FCM & Cloud Storage)',
      'Offline-First Local Storage (Hive & SQLite Cache)',
      'Google Maps, GPS, Geolocation & Paymob/Stripe Payments',
      'AI-Powered Flutter Development & Automated CI/CD Pipelines',
      'Dual-Store Production Release (Google Play & Apple App Store)'
    ],
    projectsCountEn: '5+ Major Production Apps & Dual-Store Capstone',
    projectsCountAr: '5+ تطبيقات حية متكاملة ومشروع تخرج مرفوع على المتاجر',
    priceEgp: 10000,
    isFoundingBatch: true,
    foundingBatchBadgeEn: 'Founding Batch Offer: 10,000 EGP',
    foundingBatchBadgeAr: 'خصم الدفعة التأسيسية: 10,000 ج.م شامل الـ 5 تطبيقات والشهادة والنشر على المتاجر',
    schedulingNoteEn: '200 Total Training Hours delivered across 50 sessions (4 hours per session, 3 sessions per week). 4 months target duration with hands-on labs and direct mentor code reviews.',
    schedulingNoteAr: 'ملاحظة المواعيد: 200 ساعة تدريبية معتمدة مقسمة على 50 جلسة حية (4 ساعات لكل جلسة | 3 جلسات أسبوعياً | 4 أشهر)، مع مراجعات كود هندسية فورية واختبارات حية.',
    tools: [
      'Flutter SDK',
      'Dart Language',
      'Android Studio',
      'VS Code',
      'BLoC / Cubit',
      'Dio HTTP Client',
      'Hive & SQLite',
      'Firebase Auth & Firestore',
      'Firebase Cloud Messaging (FCM)',
      'Google Maps API',
      'Paymob / Stripe',
      'GitHub Actions / Codemagic (CI/CD)',
      'Figma & Postman',
      'ChatGPT & Copilot'
    ],
    careerOutcomesEn: [
      'Cross-Platform Flutter Mobile Developer',
      'iOS & Android Software Engineer',
      'Flutter UI/UX & Architecture Specialist',
      'Mobile Application Specialist',
      'Freelance Mobile App Developer'
    ],
    careerOutcomesAr: [
      'مطور تطبيقات هواتف (Cross-Platform Flutter Developer)',
      'مهندس برمجيات تطبيقات Android & iOS',
      'أخصائي معمارية وواجهات Flutter (BLoC & Clean Arch)',
      'مطور تطبيقات فرونت إند محترف للمشاريع المستقلة (Freelancer)'
    ],
    curriculumModules: [
      {
        moduleNumber: 1,
        titleEn: 'Dart Programming Language & Fundamentals',
        titleAr: 'لغة البرمجة Dart والبرمجة كائنية التوجه (OOP & Null Safety)',
        sessionsCount: 4,
        hoursCount: 16,
        descEn: 'Sessions 1–4: Dart setup & environment, Data types, Conditions, Loops, Functions, Object-Oriented Programming (Classes, Inheritance, Polymorphism), Collections, Generics, Null Safety, Futures & Streams.',
        descAr: 'الجلسات 1-4: بيئة عمل Dart، المتغيرات، الدوال، البرمجة كائنية التوجه OOP، الحماية من أخطاء الـ Null Safety، والبرمجة اللا تزامنية Futures & Streams.',
        topics: ['Dart Syntax & Core Type System', 'Functions, Parameters & Higher-Order Functions', 'OOP in Dart: Classes, Inheritance & Abstraction', 'Collections (Lists, Sets, Maps) & Generics', 'Null Safety & Sound Type System', 'Async Programming, Futures & Streams'],
        projectTitleEn: 'Console-Based Banking System',
        projectTitleAr: 'مشروع نظام الخدمات البنكية التفاعلي عبر الـ Console'
      },
      {
        moduleNumber: 2,
        titleEn: 'Flutter Fundamentals & UI Development',
        titleAr: 'أساسيات Flutter وبناء الهياكل التفاعلية (Widget Tree & Layouts)',
        sessionsCount: 5,
        hoursCount: 20,
        descEn: 'Sessions 5–9: Flutter architecture, Widget Tree, Stateless vs Stateful Widgets, Row, Column, Stack, ListView, GridView, Forms, Input Validation, Navigation & Routing, Themes, Assets, Fonts, and Localization (Multi-language).',
        descAr: 'الجلسات 5-9: فهم شجرة المكونات Widget Tree، التفريق بين Stateless & Stateful، توزيع العناصر (Row, Column, Stack)، القوائم النصفية والتفاعلية، النماذج والـ Validation، ودعم اللغات المتعددة (Localization).',
        topics: ['Stateless vs. Stateful Widget Lifecycle', 'Flutter Layout System (Row, Column, Stack)', 'ListView & GridView Builders for Performance', 'Forms, Inputs & Validation Rules', 'Named Navigation & Custom Page Routing', 'Themes, Dark Mode & Multi-Language Localization'],
        projectTitleEn: 'Interactive Calculator App & XO Game Project',
        projectTitleAr: 'تطبيق الحاسبة التفاعلية ولعبة XO بتصميم أنيق'
      },
      {
        moduleNumber: 3,
        titleEn: 'Responsive UI, UX & Fluid Animations',
        titleAr: 'التصميم التكيفي (Responsive UI) والمؤثرات الحركية الفخمة',
        sessionsCount: 4,
        hoursCount: 16,
        descEn: 'Sessions 10–13: Responsive & Adaptive layouts (LayoutBuilder, MediaQuery), Reusable custom widgets, Advanced scrolling (Slivers), Gestures, Interactions, Animations (Implicit & Explicit), Hero transitions, and Mobile UX.',
        descAr: 'الجلسات 10-13: جعل التطبيق متكيفاً مع جميع مقاسات الشاشات والهواتف والتابلت، استخدام الـ Slivers للتصفح المتقدم، تحويل تصاميم Figma إلى كود مطبق بدقة متناهية، والمؤثرات الحركية.',
        topics: ['LayoutBuilder, MediaQuery & Orientation Builders', 'Pixel-Perfect Figma to Flutter Implementation', 'Advanced Scrolling Effects with Slivers', 'Gesture Detector & Touch Interactions', 'Implicit & Explicit Custom Animations & Hero Transitions'],
        projectTitleEn: 'Figma → Flutter Mobile Application Conversion',
        projectTitleAr: 'تحويل تصميم كامل من Figma إلى تطبيق Flutter حقيقي'
      },
      {
        moduleNumber: 4,
        titleEn: 'State Management & Software Architecture (BLoC / Cubit)',
        titleAr: 'إدارة الحالات المتقدمة والمعمارية البرمجية (BLoC / Cubit & Clean Arch)',
        sessionsCount: 6,
        hoursCount: 24,
        descEn: 'Sessions 14–19: Application State, Provider, BLoC Fundamentals, Cubit, Advanced BLoC patterns, MVVM Architecture, Clean Architecture (Data, Domain, Presentation layers), Repository Pattern, Dependency Injection (GetIt), and SOLID Principles.',
        descAr: 'الجلسات 14-19: إدارة حالات التطبيق الضخمة بـ BLoC & Cubit، تطبيق Clean Architecture وفصل الطبقات، نمط المستودعات Repository Pattern، حقن التبعيات Dependency Injection بـ GetIt، ومبادئ SOLID.',
        topics: ['Application State & Provider Pattern', 'BLoC & Cubit Architecture for Scalable Apps', 'MVVM & Clean Architecture (Data, Domain, Presentation)', 'Repository Pattern & Data Abstraction', 'Dependency Injection using GetIt Service Locator', 'SOLID Principles in Flutter Applications'],
        projectTitleEn: 'Islamic Application (Quran, Azkar, Audio, Prayer Times) & News App',
        projectTitleAr: 'تطبيق أذكار وقرآن كريم كامل (صوتيات، أوقات الصلاة، وحفظ محلي) وتطبيق الأخبار'
      },
      {
        moduleNumber: 5,
        titleEn: 'Backend & REST API Integration (Dio & JWT)',
        titleAr: 'ربط الخوادم والـ REST APIs بـ Dio والتأمين بالـ JWT Tokens',
        sessionsCount: 5,
        hoursCount: 20,
        descEn: 'Sessions 20–24: Client-Server Architecture, HTTP Fundamentals, REST APIs, Dio package, JSON Parsing, Authentication & JWT Tokens, Error Interceptors, Pagination, Search, Filtering, and Multipart File Uploads.',
        descAr: 'الجلسات 20-24: الاتصال المباشر بالخوادم، تحويل الـ JSON إلى Models بـ Dio، معالجة التوكنز JWT والأخطاء الشائعة، رفع الصور والملفات، وتقسيم الصفحات Pagination.',
        topics: ['Client-Server Architecture & HTTP Methods', 'Dio HTTP Client, Interceptors & Headers', 'JSON Serializable & Data Parsing', 'JWT Authentication & Refresh Token Handling', 'API Error Middlewares, Pagination & Dynamic Search', 'Multipart Image & File Uploading'],
        projectTitleEn: 'Production-Style News & Content Platform App',
        projectTitleAr: 'تطبيق منصة الأخبار والمحتوى الحية المربوط بالـ REST API'
      },
      {
        moduleNumber: 6,
        titleEn: 'Firebase & Cloud Backend Services',
        titleAr: 'الخدمات السحابية Firebase والإشعارات اللحظية Push Notifications',
        sessionsCount: 4,
        hoursCount: 16,
        descEn: 'Sessions 25–28: Firebase Architecture, Authentication (Email, Google, Phone), Cloud Firestore NoSQL Database, Firebase Storage, Real-Time Streams, Firebase Security Rules, Firebase Cloud Messaging (FCM Notifications), and Crashlytics/Analytics.',
        descAr: 'الجلسات 25-28: ربط خدمات Firebase السحابية، التوثيق بالبريد وجوجل، قاعدة البيانات اللحظية Firestore، الإشعارات التنبيهية FCM، وتتبع الأخطاء بـ Crashlytics.',
        topics: ['Firebase Auth (Email, Password, Social Login)', 'Cloud Firestore Real-Time CRUD Operations', 'Firebase Storage for Media & Files', 'Firebase Cloud Messaging (FCM Push Notifications)', 'Firebase Security Rules & Data Protection', 'Crashlytics Performance & Analytics Tracking'],
        projectTitleEn: 'Event Discovery & Ticket Booking Firebase App',
        projectTitleAr: 'تطبيق استكشاف وحجز الفعاليات المربوط بـ Firebase والإشعارات'
      },
      {
        moduleNumber: 7,
        titleEn: 'Local Storage & Offline-First Applications',
        titleAr: 'قواعد البيانات المحلية والعمل بدون إنترنت (Hive & SQLite)',
        sessionsCount: 3,
        hoursCount: 12,
        descEn: 'Sessions 29–31: SharedPreferences, SQLite relational database, Hive key-value NoSQL database, Local Caching, Offline-First Architecture, and Automatic Data Synchronization.',
        descAr: 'الجلسات 29-31: حفظ بيانات المستخدم محلياً في حالة انقطاع الإنترنت باستخدام Hive و SQLite، كاش البيانات السرية، والمزامنة التلقائية فور عودة الاتصال.',
        topics: ['SharedPreferences for Settings & Session State', 'Hive NoSQL Fast Key-Value Database & Adapters', 'SQLite Relational Database & Queries', 'Offline-First Caching Strategy & Sync Workflows'],
        projectTitleEn: 'Offline-First Data Sync Integration Task',
        projectTitleAr: 'تطبيق المزامنة والعمل بدون إنترنت Offline-First'
      },
      {
        moduleNumber: 8,
        titleEn: 'Maps, GPS Location Services & Paymob/Stripe Payments',
        titleAr: 'خرائط جوجل، تحديد الموقع الجغرافي وبوابات الدفع الإلكتروني',
        sessionsCount: 3,
        hoursCount: 12,
        descEn: 'Sessions 32–34: Google Maps SDK Integration, GPS Location Services, Geolocation, Geocoding, Custom Markers, Live Tracking, Push Notifications, Deep Linking, and Payment Gateway Integration (Paymob / Stripe).',
        descAr: 'الجلسات 32-34: إضافة خرائط جوجل التفاعلية، تتبع موقع المستخدم بالـ GPS، إضافة الـ Markers، الربط ببوابات الدفع Paymob و Stripe لإتمام الشراء أونلاين، والـ Deep Linking.',
        topics: ['Google Maps SDK & Geolocation Services', 'Custom Map Markers, Polylines & Live Tracking', 'Deep Linking & Dynamic App Links', 'Paymob & Stripe Payment Integration Workflows'],
        projectTitleEn: 'Location-Based Service & Payment Application',
        projectTitleAr: 'تطبيق الخدمات الجغرافية المعتمدة على الخريطة والدفع الإلكتروني'
      },
      {
        moduleNumber: 9,
        titleEn: 'AI-Powered Mobile Development Workflow',
        titleAr: 'التطوير البرمجي للتطبيقات بالذكاء الاصطناعي (AI Mobile Workflow)',
        sessionsCount: 4,
        hoursCount: 16,
        descEn: 'Sessions 35–38: Prompt engineering for mobile developers, ChatGPT, Claude & Gemini for Flutter code generation, AI-assisted debugging, code refactoring, MCP agents, and Verification discipline.',
        descAr: 'الجلسات 35-38: استخدام الذكاء الاصطناعي لتوليد أكواد الـ Widgets والـ Models، تسريع الـ Refactoring، مراجعة الثغرات البرمجية، واختبار وتعديل الكود المولد بذكاء.',
        topics: ['Prompt Engineering for Flutter Components', 'ChatGPT, Claude & Gemini for Dart Refactoring', 'AI Debugging, Architecture Review & Code Optimization', 'Verification Discipline & Manual Test Workflows'],
        projectTitleEn: 'AI-Enhanced Flutter Feature Integration Project',
        projectTitleAr: 'مشروع إضافة ميزات ذكاء اصطناعي وتدقيقها في تطبيق Flutter'
      },
      {
        moduleNumber: 10,
        titleEn: 'Advanced Flutter, Testing & Dual-Store DevOps',
        titleAr: 'اختبارات التطبيقات والنشر على Google Play & App Store (CI/CD)',
        sessionsCount: 5,
        hoursCount: 20,
        descEn: 'Sessions 39–43: Flutter performance optimization, Widget rebuild reduction, Memory leaks debugging, Unit testing, Widget testing, Integration testing, Mobile security, CI/CD pipelines (Codemagic / GitHub Actions), Android Signing, Play Store deployment, and iOS App Store release process.',
        descAr: 'الجلسات 39-43: تحسين أداء الواجهات وتقليل الـ Rebuilds، كتابة اختبارات الـ Unit & Widget Tests، أتمتة البناء CI/CD بـ Codemagic، تجهيز شهادات التوقيع والنشر الحي على Google Play و Apple App Store.',
        topics: ['Performance Profiling & Memory Management', 'Unit, Widget & Integration Testing in Flutter', 'Mobile Security Best Practices & Obfuscation', 'Automated CI/CD Pipelines (GitHub Actions / Codemagic)', 'Play Store Console & iOS App Store Connect Deployment'],
        projectTitleEn: 'Dual-Store Play Store & App Store Production Deployment Task',
        projectTitleAr: 'تجهيز ونشر تطبيق كامل على متجري Google Play و Apple App Store'
      },
      {
        moduleNumber: 11,
        titleEn: 'Embedded Practical Application Projects',
        titleAr: 'المشاريع التطبيقية الحية المدمجة عبر الموديولات',
        sessionsCount: 0,
        hoursCount: 0,
        descEn: 'Embedded continuous practice: Calculator, Islamic Quran/Azkar App, Production News App, Firebase Events App, and Full E-Commerce Application.',
        descAr: 'التطبيق العملي المستمر عبر الموديولات لبناء 5 تطبيقات متكاملة وتثبيت المهارات.',
        topics: ['Calculator & XO Game', 'Islamic Quran & Prayer Times App', 'Production News API App', 'Firebase Events & Maps App', 'Full E-Commerce Clean Arch App'],
        projectTitleEn: '5 Embedded Real-World Applications',
        projectTitleAr: '5 تطبيقات حية متكاملة لربط كافة مهارات الدبلومة'
      },
      {
        moduleNumber: 12,
        titleEn: 'Production Graduation Capstone Project',
        titleAr: 'مشروع التخرج النهائي المؤسسي (Dual-Store Capstone)',
        sessionsCount: 4,
        hoursCount: 16,
        descEn: 'Sessions 44–47 (16 Guided Hours + Independent Work): Production-level Flutter App (E-Commerce / Event Booking / Food Delivery / LMS / Travel). Requirements: Auth, REST API / Firebase, BLoC State Management, Clean Architecture, Local Storage, Notifications, Testing, CI/CD, and Store Readiness.',
        descAr: 'الجلسات 44-47: اختيار وبناء تطبيق تخرج مؤسسي (متجر إلكتروني، حجز تذاكر، أو توصيل طعام) يطبق كافة المعايير الهندسية، مع كتابة الاختبارات ورفع التطبيق على المتجرين.',
        topics: ['Capstone Architecture & Clean Domain Rules', 'BLoC State Management & Dio REST / Firebase Integration', 'Offline Storage, Maps & Paymob Payments', 'Automated Testing, CI/CD & Store Deployment', 'Live Graduation Defense & Code Review'],
        projectTitleEn: 'Production-Level Mobile Application (Graduation Capstone)',
        projectTitleAr: 'تطبيق التخرج المؤسسي المتكامل المرفوع على المتاجر (Graduation Capstone)'
      },
      {
        moduleNumber: 13,
        titleEn: 'Career Preparation & Mobile Engineering Job Readiness',
        titleAr: 'التأهيل المهني وبناء ملف المطور للمنافسة في سوق العمل',
        sessionsCount: 3,
        hoursCount: 12,
        descEn: 'Sessions 48–50: Mobile ATS CV drafting, GitHub Mobile Portfolio optimization with architecture diagrams, LinkedIn optimization, Technical Live-Coding preparation, Mobile System Design basics, and MENA Freelancing/Remote Work channels.',
        descAr: 'الجلسات 48-50: صياغة السيرة الذاتية المعتمدة لمهندس التطبيقات، توثيق المشاريع على GitHub برسومات المعمارية، التحضير لمقابلات الـ Live-Coding، وفرص العمل الإقليمي والتكليفات عن بُعد.',
        topics: ['ATS Mobile Developer CV & Portfolio Writing', 'GitHub Mobile Repositories & Architecture Documentation', 'LinkedIn Profile Optimization & Recruiter Outreach', 'Mobile System Design & Live Coding Interview Prep', 'MENA Remote Work & Freelancing Platforms'],
        projectTitleEn: 'Complete Mobile Engineering Career & Portfolio Package',
        projectTitleAr: 'حزمة التأهيل المهني المتكاملة (Portfolio + ATS CV + LinkedIn + Interview Prep)'
      }
    ],
    projectRoadmap: [
      { num: 1, titleEn: 'Console-Based Banking System (Dart OOP)', titleAr: 'نظام الخدمات البنكية التفاعلي عبر الـ Console (Dart OOP)', levelEn: 'Beginner', levelAr: 'مبتدئ' },
      { num: 2, titleEn: 'Interactive Calculator & XO Game (Flutter Layouts)', titleAr: 'تطبيق الحاسبة التفاعلية ولعبة XO (واجهات Flutter)', levelEn: 'Beginner', levelAr: 'مبتدئ' },
      { num: 3, titleEn: 'Figma to Flutter Pixel-Perfect Mobile App', titleAr: 'تحويل تصميم Figma كامل إلى تطبيق محمول بالمسافات الدقيقة', levelEn: 'Beginner', levelAr: 'مبتدئ' },
      { num: 4, titleEn: 'Islamic Quran, Azkar, Audio & Prayer Times App', titleAr: 'تطبيق القرآن والأذكار الكامل (صوتيات، مواقيت، وحفظ محلي)', levelEn: 'Intermediate', levelAr: 'متوسط' },
      { num: 5, titleEn: 'Production REST API News App (Dio & BLoC)', titleAr: 'تطبيق الأخبار الحية بـ REST API و Dio و BLoC State', levelEn: 'Intermediate', levelAr: 'متوسط' },
      { num: 6, titleEn: 'Firebase Event Discovery & Ticket Booking App', titleAr: 'تطبيق حجز الفعاليات المربوط بـ Firebase والإشعارات اللحظية', levelEn: 'Intermediate', levelAr: 'متوسط' },
      { num: 7, titleEn: 'Offline-First Local Caching Sync App (Hive & SQLite)', titleAr: 'تطبيق حفظ البيانات والعمل بدون إنترنت (Hive & SQLite)', levelEn: 'Intermediate', levelAr: 'متوسط' },
      { num: 8, titleEn: 'Location-Based Service & Payment App (Google Maps & Paymob)', titleAr: 'تطبيق الخدمات الجغرافية بـ Google Maps وبوابة دفع Paymob', levelEn: 'Intermediate', levelAr: 'متوسط' },
      { num: 9, titleEn: 'Full E-Commerce App (Clean Architecture & BLoC)', titleAr: 'تطبيق المتجر الإلكتروني المتكامل بـ Clean Architecture', levelEn: 'Advanced', levelAr: 'متقدم' },
      { num: 10, titleEn: 'AI-Assisted Flutter Feature Integration Lab', titleAr: 'معمل دمج وتطوير ميزات الذكاء الاصطناعي في Flutter', levelEn: 'Advanced', levelAr: 'متقدم' },
      { num: 11, titleEn: 'Automated CI/CD Pipeline (GitHub Actions / Codemagic)', titleAr: 'أتمتة البناء والتجريب والرفع بـ CI/CD Pipelines', levelEn: 'Advanced', levelAr: 'متقدم' },
      { num: 12, titleEn: 'Production Graduation Capstone & Dual-Store Launch', titleAr: 'مشروع التخرج المؤسسي والنشر الحي على Google Play & App Store', levelEn: 'Capstone', levelAr: 'مشروع تخرج' }
    ]
  },

  // 4. PROFESSIONAL DATA ANALYSIS & BUSINESS INTELLIGENCE DIPLOMA
  {
    id: 'data-analysis',
    category: 'data',
    categoryLabelEn: 'DATA & AI',
    categoryLabelAr: 'البيانات والذكاء الاصطناعي',
    titleEn: 'Professional Data Analysis & Business Intelligence Diploma',
    titleAr: 'دبلومة تحليل البيانات وذكاء الأعمال المحترفة (Data Analysis & Business Intelligence)',
    taglineEn: 'Market-Complete Analyst Program: 200 Hours, 50 Sessions, 16 Projects, Excel, SQL, Power BI, Python & Tableau.',
    taglineAr: 'دبلومة شاملة لسوق العمل 200 ساعة • 50 جلسة تفاعلية • 16 مشروعاً بورتفوليو • Excel • SQL • Power BI • Python • Tableau • GenAI.',
    descEn: 'A practical, project-based diploma built to produce job-ready Data Analysts who can take raw business data all the way to analysis, dashboards, insights, and recommendations. Covers Excel automation, SQL depth (CTEs, Window Functions), Data Warehousing, Power BI & DAX, Python with applied statistics (A/B testing, Cohort/RFM analysis), Tableau, Generative AI for Analysts, and a multi-industry portfolio.',
    descAr: 'دبلومة عملية تطبيقية متكاملة 200 ساعة تدريبية معتمدة مصممة لبناء محلل بيانات وذكاء أعمال محترف (Data & BI Analyst) جاهز لسوق العمل الإقليمي والدولي. تغطي الدبلومة أتمتة Excel بـ Macros و Power Query، استعلامات SQL المتقدمة، نماذج مستودعات البيانات Data Warehousing، برامج Power BI و DAX، برمجة بايثون والاحصاء التطبيقي (اختبارات A/B وتجميع العملاء Cohort/RFM)، برنامج Tableau، أدوات الذكاء الاصطناعي GenAI، وبناء بورتفوليو متنوع يغطي 5 قطاعات مختلفة.',
    durationEn: 'Approximately 4 Months (50 Sessions / 200 Hours)',
    durationAr: 'حوالي 4 أشهر (50 جلسة تفاعلية | 200 ساعة معتمدة)',
    totalSessions: 50,
    totalHours: 200,
    sessionDurationEn: '4 Hours / Session',
    sessionDurationAr: '4 ساعات لكل جلسة',
    sessionsPerWeekEn: '3 Sessions / Wk',
    sessionsPerWeekAr: '3 جلسات أسبوعياً',
    levelEn: 'Beginner → Professional Data & BI Analyst',
    levelAr: 'من المبتدئ إلى محلل بيانات وذكاء أعمال محترف',
    highlights: [
      'Advanced Excel, Power Query & VBA Automation',
      'Relational Databases & Advanced SQL (CTEs, Window Functions)',
      'Data Warehousing & Star Schema Dimensional Modeling',
      'Power BI, DAX Measures & Copilot Integration',
      'Python Data Stack (Pandas, NumPy, Seaborn) & Applied Stats',
      'A/B Testing & Customer Cohort / RFM Analysis',
      'Tableau Executive Visual Storytelling',
      'Generative AI Workflow & Multi-Industry Portfolio'
    ],
    projectsCountEn: '16 Graded Industry Projects & Graduation Capstone',
    projectsCountAr: '16 مشروعاً عملياً متدرجاً ومشروع تخرج استثماري متكامل',
    priceEgp: 10000,
    isFoundingBatch: true,
    foundingBatchBadgeEn: 'Founding Batch Offer: 10,000 EGP',
    foundingBatchBadgeAr: 'خصم الدفعة التأسيسية: 10,000 ج.م شامل كافة البرامج والمشاريع الـ 16 والشهادة',
    schedulingNoteEn: '200 Total Training Hours delivered across 50 sessions (4 hours per session, 3 sessions per week). 4 months target duration with real datasets from retail, e-commerce, banking, HR, and telecom.',
    schedulingNoteAr: 'ملاحظة المواعيد: 200 ساعة تدريبية معتمدة مقسمة على 50 جلسة تفاعلية (4 ساعات لكل جلسة | 3 جلسات أسبوعياً | 4 أشهر)، مع استخدام بيانات واقعية من قطاعات التجارة، البنوك، الاتصالات، والموارد البشرية.',
    tools: [
      'Microsoft Excel',
      'Power Query',
      'SQL Server / MySQL',
      'PostgreSQL',
      'Power BI',
      'DAX Language',
      'Python (Pandas / NumPy)',
      'Matplotlib & Seaborn',
      'Tableau',
      'Generative AI Tools (Copilot/ChatGPT)',
      'Jupyter / VS Code',
      'Git & GitHub'
    ],
    careerOutcomesEn: [
      'Data Analyst',
      'Business Intelligence (BI) Analyst',
      'Reporting & Insights Specialist',
      'Business Analytics Specialist',
      'Data Operations Analyst',
      'Remote / Freelance Data Analyst'
    ],
    careerOutcomesAr: [
      'محلل بيانات (Data Analyst)',
      'محلل ذكاء الأعمال (Business Intelligence Analyst)',
      'أخصائي تقارير ورؤى استراتيجية (Reporting & Insights Specialist)',
      'أخصائي تحليلات الأعمال (Business Analytics Specialist)',
      'محلل عمليات البيانات (Data Operations Analyst)',
      'محلل بيانات مستقل للمشاريع الإقليمية والعمل عن بعد'
    ],
    curriculumModules: [
      {
        moduleNumber: 1,
        titleEn: 'Excel, Power Query & Business Analytics Foundations',
        titleAr: 'أساسيات Excel المتقدم، Power Query وأتمتة تحليلات الأعمال',
        sessionsCount: 10,
        hoursCount: 40,
        descEn: 'Sessions 1–10: Data lifecycle, Excel cleaning, Business Math, Lookup functions (VLOOKUP, XLOOKUP, INDEX-MATCH, Dynamic Arrays), Pivot Tables/Charts, Excel Automation (Macros/VBA, Goal Seek, Solver), Power Query ETL, and Dashboard Storytelling.',
        descAr: 'الجلسات 1-10: دورة حياة البيانات، تنظيف البيانات، رياضيات الأعمال، دوال البحث المتقدمة XLOOKUP و INDEX-MATCH، الجداول المحورية Pivot Tables، أتمتة Excel بـ Macros و Solver، وورش عمل Power Query ETL.',
        topics: ['Data Profiling, Cleaning & Validation', 'Business Math: Percentages, Growth Rates & Indices', 'XLOOKUP, INDEX-MATCH & Dynamic Array Formulas (FILTER, UNIQUE)', 'Pivot Tables, Pivot Charts & Slicers', 'Excel Automation: Macros, VBA & Solver Optimization', 'Power Query ETL: Merging, Appending & Refresh Workflows', 'Single-Screen Executive Dashboard Design'],
        projectTitleEn: 'Excel Data Cleaning, Sales Analysis, Interactive KPI Dashboard & Automation Project',
        projectTitleAr: '4 مشاريع Excel: تنظيف البيانات، تحليل المبيعات والربحية، داشبورد KPIs، وأتمتة Solver/Macros'
      },
      {
        moduleNumber: 2,
        titleEn: 'Databases, SQL & Advanced SQL Queries',
        titleAr: 'قواعد البيانات واستعلامات SQL المتقدمة (CTEs & Window Functions)',
        sessionsCount: 10,
        hoursCount: 40,
        descEn: 'Sessions 11–20: RDBMS fundamentals, Normalization (1NF–3NF), ERD design, DDL/DML/DQL queries, Aggregations, Multi-table Joins, Subqueries, CTEs, Window Functions (LAG/LEAD, RANK, Partitioning), and Query Performance Tuning.',
        descAr: 'الجلسات 11-20: تصميم قواعد البيانات العلاقاتية RDBMS، تطبيع البيانات Normalization، استعلامات SQL المعقدة، التجميع GROUP BY، الربط Multi-table JOINs، الدوال النافذية Window Functions والـ CTEs للتحليل المتقدم.',
        topics: ['RDBMS Fundamentals & ERD Schema Design', 'SQL DDL / DML / DQL & Filtering Logic', 'Aggregations & Multi-Table JOIN Operations', 'Subqueries, Common Table Expressions (CTEs)', 'Advanced Window Functions (RANK, LAG/LEAD, Running Totals)', 'Database Indexing & Query Execution Plans'],
        projectTitleEn: 'SQL E-Commerce Analytics & Advanced SQL Customer Segmentation',
        projectTitleAr: 'مشروعان: تحليلات المتجر الإلكتروني بـ SQL، وتقسيم العملاء المتقدم بـ Window Functions'
      },
      {
        moduleNumber: 3,
        titleEn: 'Data Warehousing, Power BI & DAX Modeling',
        titleAr: 'مستودعات البيانات Data Warehousing وتطوير لوحات Power BI و DAX',
        sessionsCount: 10,
        hoursCount: 40,
        descEn: 'Sessions 21–30: OLTP vs OLAP, ETL/ELT pipelines, Star vs Snowflake schema, Dimensional modeling, Modern Data Stack awareness (BigQuery/Snowflake/dbt), Power BI data modeling, DAX measures (CALCULATE, SUMX), Time Intelligence, Bookmarks & Copilot in Power BI.',
        descAr: 'الجلسات 21-30: بنية مستودعات البيانات Data Warehouses والنماذج النجمية Star Schema، نمذجة البيانات بـ Power BI، كتابة معادلات ومقاييس DAX المتقدمة، Time Intelligence، والتقارير التفاعلية المتعددة الصفحات.',
        topics: ['Data Warehouse Design: Fact & Dimension Tables (Star Schema)', 'Modern Data Stack Overview (Snowflake, BigQuery, dbt)', 'Power BI Data Modeling & Relationship Directions', 'DAX Foundations: Calculated Columns vs. Measures', 'Advanced DAX: Context Transition, CALCULATE & Time Intelligence', 'Power BI Report Interactivity: Bookmarks, Drill-through & Copilot'],
        projectTitleEn: 'Data Warehouse Design, Operations Dashboard & Executive Power BI Report',
        projectTitleAr: '3 مشاريع: تصميم مستودع بيانات HR/Retail، داشبورد العمليات، وتقرير Power BI التنفيذي'
      },
      {
        moduleNumber: 4,
        titleEn: 'Python, Statistics, Applied Analytics & Tableau',
        titleAr: 'التحليل البرمجي بـ Python والإحصاء التطبيقي (A/B Testing & Cohort) و Tableau',
        sessionsCount: 14,
        hoursCount: 56,
        descEn: 'Sessions 31–44: Python fundamentals, NumPy, Pandas (DataFrames, Grouping, Merging), EDA & Data Cleaning, Visualizations (Matplotlib/Seaborn), Data Acquisition (SQL, APIs, Web Scraping), Applied Statistics (A/B Testing, Cohort Analysis, RFM Segmentation), and Tableau Interactive Storytelling.',
        descAr: 'الجلسات 31-44: إتقان بايثون وتحليل البيانات بـ Pandas و NumPy، سحب البيانات من الـ APIs و SQL، الإحصاء التطبيقي واختبارات فرضيات A/B Testing، تحليل سلوك العملاء Cohort & RFM Analysis، والتصور البصري في Tableau.',
        topics: ['Python Data Stack: NumPy Vectors & Pandas DataFrames', 'Exploratory Data Analysis (EDA) & Outlier Detection', 'Data Acquisition via SQL, REST APIs & Web Sources', 'Applied Statistics: Descriptive, Confidence Intervals & Hypothesis Testing', 'A/B Testing Experimentation & Cohort / RFM Segmentation', 'Tableau Interactivity: Calculated Fields, Storytelling & Dashboards'],
        projectTitleEn: 'Python Data Cleaning, Python EDA, API Acquisition, A/B & Cohort Analysis & Tableau Story',
        projectTitleAr: '5 مشاريع: تنظيف بايثون، تحليل EDA وإحصاء، سحب بيانات APIs، تحليل A/B & Cohort، وداشبورد Tableau'
      },
      {
        moduleNumber: 5,
        titleEn: 'GenAI for Analysts, Portfolio & Graduation Capstone',
        titleAr: 'الذكاء الاصطناعي GenAI للمحللين، تجهيز البورتفوليو ومشروع التخرج',
        sessionsCount: 6,
        hoursCount: 24,
        descEn: 'Sessions 45–50: Generative AI for Analysts (Data cleaning, EDA acceleration, DAX/SQL drafting & human verification), GitHub Portfolio structuring, ATS CV optimization, LinkedIn branding, MENA job market navigation, and Final Capstone Defense.',
        descAr: 'الجلسات 45-50: استغلال أدوات الذكاء الاصطناعي GenAI لإنشاء استعلامات SQL و DAX مع التحقق البشري، بناء البورتفوليو على GitHub، تجهيز الـ CV المعتمد ATS، التحضير لمقابلات الـ STAR، ودفاع مشروع التخرج النهائي.',
        topics: ['Generative AI Assistance in SQL, DAX & EDA Workflows', 'Human Verification & Data Integrity Auditing', 'GitHub Portfolio & Technical README Case Studies', 'ATS-Optimized CV & LinkedIn Profile Optimization', 'MENA Remote & Freelance Job Channels', 'Graduation Capstone Presentation & Defense'],
        projectTitleEn: 'GenAI-Assisted Mini-Project & End-to-End Graduation Capstone',
        projectTitleAr: 'مشروع الذكاء الاصطناعي المصغر ومشروع التخرج الشامل (Graduation Capstone)'
      }
    ],
    projectRoadmap: [
      { num: 1, titleEn: 'Excel Data Cleaning Challenge (Retail Data)', titleAr: 'تحدي تنظيف بيانات التجزئة المعقدة بـ Excel', levelEn: 'Beginner', levelAr: 'مبتدئ' },
      { num: 2, titleEn: 'Excel Sales & Profitability Analysis', titleAr: 'تحليل المبيعات والأرباح وتحديد الهوامش بـ Excel', levelEn: 'Beginner', levelAr: 'مبتدئ' },
      { num: 3, titleEn: 'Excel Interactive KPI Dashboard', titleAr: 'داشبورد الـ KPIs التفاعلي بـ Pivot Tables و Slicers', levelEn: 'Beginner', levelAr: 'مبتدئ' },
      { num: 4, titleEn: 'Excel Automation & Scenario Planning (Macros/Solver)', titleAr: 'أتمتة العمليات سيناريوهات Solver و Macros بـ Excel', levelEn: 'Beginner', levelAr: 'مبتدئ' },
      { num: 5, titleEn: 'SQL E-Commerce Multi-Table Analytics', titleAr: 'تحليلات التجارة الإلكترونية المتعددة الجداول بـ SQL', levelEn: 'Intermediate', levelAr: 'متوسط' },
      { num: 6, titleEn: 'Advanced SQL Customer Segmentation (CTEs & Window Functions)', titleAr: 'تقسيم عملاء البنوك والاتصالات بـ Window Functions و CTEs', levelEn: 'Intermediate', levelAr: 'متوسط' },
      { num: 7, titleEn: 'Data Warehouse Star Schema Design', titleAr: 'تصميم بنية مستودع البيانات Star Schema لقطاع HR/Retail', levelEn: 'Intermediate', levelAr: 'متوسط' },
      { num: 8, titleEn: 'Power BI Operations & ETL Dashboard', titleAr: 'داشبورد العمليات بـ Power Query و نمذجة العلاقات', levelEn: 'Intermediate', levelAr: 'متوسط' },
      { num: 9, titleEn: 'Executive Power BI Dashboard (DAX & Bookmarks)', titleAr: 'التقرير التنفيذي الشامل بـ DAX و Bookmarks و Drill-through', levelEn: 'Advanced', levelAr: 'متقدم' },
      { num: 10, titleEn: 'Python Data Wrangling & Cleaning (Pandas)', titleAr: 'تنظيف ومعالجة البيانات الضخمة بـ Pandas & NumPy', levelEn: 'Advanced', levelAr: 'متقدم' },
      { num: 11, titleEn: 'Python EDA & Hypothesis Statistical Testing', titleAr: 'التحليل الاستكشافي EDA والاختبارات الإحصائية بـ Seaborn', levelEn: 'Advanced', levelAr: 'متقدم' },
      { num: 12, titleEn: 'Python Data Acquisition (SQL, REST APIs & Web)', titleAr: 'سحب وجمع البيانات عبر الـ REST APIs واستعلامات SQL', levelEn: 'Advanced', levelAr: 'متقدم' },
      { num: 13, titleEn: 'A/B Testing Readout & Cohort / RFM Segmentation', titleAr: 'تحليل تجارب A/B Testing وتحليل سلوك الشرائح Cohort & RFM', levelEn: 'Advanced', levelAr: 'متقدم' },
      { num: 14, titleEn: 'Tableau Executive Storytelling Dashboard', titleAr: 'داشبورد القصص البصرية التفاعلي بـ Tableau', levelEn: 'Advanced', levelAr: 'متقدم' },
      { num: 15, titleEn: 'GenAI-Assisted Analytics & Verification Lab', titleAr: 'معمل تسريع التحليلات بـ GenAI مع التحقق البشري', levelEn: 'Advanced', levelAr: 'متقدم' },
      { num: 16, titleEn: 'End-to-End Data Analysis Capstone (Multi-Industry Portfolio)', titleAr: 'مشروع التخرج الشامل (Graduation Capstone) ودراسة الحالة النهائية', levelEn: 'Capstone', levelAr: 'مشروع تخرج' }
    ]
  },

  // 5. UI/UX DESIGN PROFESSIONAL DIPLOMA
  {
    id: 'ui-ux-design',
    category: 'design',
    categoryLabelEn: 'DESIGN & PRODUCT',
    categoryLabelAr: 'تصميم الواجهات والمنتجات',
    titleEn: 'UI/UX Design Professional Diploma',
    titleAr: 'دبلومة تصميم الواجهات وتجربة المستخدم المحترفة (UI/UX & Product Design)',
    taglineEn: 'Master UI/UX & Product Design: 168 Hours, 42 Sessions, 40+ Deliverables & Portfolio Case Study.',
    taglineAr: 'دبلومة احترافية شاملة 168 ساعة • 42 جلسة تفاعلية • 40+ مشروع ومخرج تطبيقي • بورتفوليو لسوق العمل.',
    descEn: 'A project-based professional diploma designed to take learners from UI/UX fundamentals to job-ready junior UI/UX/Product Design skills. The program emphasizes hands-on practice (70–75% practical workshops), realistic design challenges, portfolio projects, usability testing, design systems, developer handoff, and career preparation.',
    descAr: 'دبلومة احترافية تطبيقية مصممة لنقلك من أساسيات الـ UI/UX إلى الجاهزية الكاملة لسوق العمل كمصمم واجهات وتجربة مستخدم (Junior UI/UX / Product Designer). يعتمد البرنامج بنسبة 70-75% على الورش والتطبيقات العملية والنقد الفني المستمر، مع بناء بورتفوليو حقيقي، أنظمة تصميم Design Systems، وتسليم المطورين Developer Handoff والإعداد المهني.',
    durationEn: '14 Weeks (Approximately 3.5 Months)',
    durationAr: '14 أسبوعاً (حوالي 3.5 أشهر)',
    totalSessions: 42,
    totalHours: 168,
    sessionDurationEn: '4 Hours / Session',
    sessionDurationAr: '4 ساعات لكل جلسة',
    sessionsPerWeekEn: '3 Sessions / Wk',
    sessionsPerWeekAr: '3 جلسات أسبوعياً',
    levelEn: 'Beginner → Professional',
    levelAr: 'من المبتدئ إلى الاحترافي',
    highlights: [
      '70–75% Practical Workshops',
      'UX Research & Personas',
      'Information Architecture & Flows',
      'Figma & Design Systems',
      'Hi-Fi UI & Prototyping',
      'Usability Testing & Accessibility',
      'Portfolio & Case Study Prep'
    ],
    projectsCountEn: '40+ Deliverables & Portfolio Case Study',
    projectsCountAr: '40+ مخرجاً تطبيقياً ودراسة حالة متكاملة',
    priceEgp: 10000,
    isFoundingBatch: true,
    foundingBatchBadgeEn: 'Founding Batch Offer: 10,000 EGP',
    foundingBatchBadgeAr: 'خصم الدفعة التأسيسية: 10,000 ج.م شامل كافة الورش والبورتفوليو',
    schedulingNoteEn: '168 Total Training Hours delivered across 42 sessions (4 hours per session, 3 sessions per week). 14 weeks total (~3.5 months) with continuous project critique and instructor feedback.',
    schedulingNoteAr: 'ملاحظة المواعيد: 168 ساعة تدريبية معتمدة مقسمة على 42 جلسة تفاعلية (4 ساعات لكل جلسة | 3 جلسات أسبوعياً | 14 أسبوعاً إجمالياً ~3.5 أشهر) مع مراجعة ونقد فني مستمر لكافة التصاميم.',
    tools: ['Figma', 'FigJam', 'Google Forms', 'Google Sheets', 'Notion', 'Behance', 'LinkedIn', 'Maze / Usability Tools'],
    careerOutcomesEn: [
      'Junior UI Designer',
      'Junior UX Designer',
      'UI/UX Designer',
      'Junior Product Designer',
      'UX Research Assistant',
      'Digital Product Designer',
      'Freelance UI/UX Specialist'
    ],
    careerOutcomesAr: [
      'مصمم واجهات مستخدم (Junior UI Designer)',
      'مصمم تجربة مستخدم (Junior UX Designer)',
      'مصمم منتجات رقمية (Junior Product Designer)',
      'أخصائي أبحاث تجربة مستخدم (UX Researcher)',
      'مصمم واجهات وتجربة مستخدم متكامل (UI/UX Designer)',
      'مصمم واجهات مستمر (Freelance UI/UX Specialist)'
    ],
    curriculumModules: [
      {
        moduleNumber: 1,
        titleEn: 'UI/UX Foundations & Design Thinking',
        titleAr: 'أساسيات الـ UI/UX والتفكير التصميمي (Design Thinking)',
        sessionsCount: 3,
        hoursCount: 12,
        descEn: 'Sessions 1–3: UI vs UX vs Product Design, UX Laws & Design Psychology (Hick\'s, Fitts\'s, Jakob\'s, Miller\'s, Gestalt), Cognitive Load, and 5-stage Design Thinking Workshop.',
        descAr: 'الجلسات 1-3: الفرق بين UI و UX و Product Design، قوانين علم النفس في التصميم (Hick\'s, Fitts\'s, Gestalt)، الحمل المعرفي Cognitive Load، وورشة التفكير التصميمي (Empathize, Define, Ideate, Prototype, Test).',
        topics: ['UI vs. UX vs. Product Design', 'Hick\'s, Fitts\'s, Jakob\'s & Miller\'s Laws', 'Gestalt Principles & Cognitive Load', '5 Stages of Design Thinking', 'Problem Statements & How Might We', 'Crazy 8s & Solution Sketching', 'UX Audit Methodology'],
        projectTitleEn: 'UX Audit & Before/After UX Improvement',
        projectTitleAr: 'دراسة وتحليل الـ UX Audit وإعادة تصميم واجهات معيبة'
      },
      {
        moduleNumber: 2,
        titleEn: 'Figma Mastery & Visual Hierarchy Systems',
        titleAr: 'احتراف Figma وأنظمة الهرم البصري والتايبوجرافي والألوان',
        sessionsCount: 8,
        hoursCount: 32,
        descEn: 'Sessions 4–11: Figma interface, Frames, Auto Layout, Constraints, Components, Variants, Libraries, Layout & 8-point Grids, Typography Scales & Arabic Typography, Color Theory, Dark Mode & High-Fi UI Transformation.',
        descAr: 'الجلسات 4-11: احتراف Figma بالكامل، Auto Layout، المكونات الذكية Components & Variants، الشبكات 8-point Grid، اختيار وتوزيع الخطوط والخطوط العربية، نظرية الألوان، الوضع الداكن Dark Mode، والتحول إلى واجهات High-Fi فخمة.',
        topics: ['Figma Interface, Frames & Layers', 'Auto Layout & Constraints', 'Components, Variants & Properties', '8-Point Grid & Spacing Hierarchy', 'Typography Pairing & Arabic UI Type Scale', 'Color Psychology, Semantic Colors & Dark Mode', 'WCAG Contrast & Accessibility Checks'],
        projectTitleEn: 'Mini UI Kit & Reusable Component Library',
        projectTitleAr: 'مكتبة مكونات تفاعلية ونظام تايبوجرافي وألوان كامل'
      },
      {
        moduleNumber: 3,
        titleEn: 'UX Research, User Interviews & Synthesis',
        titleAr: 'أبحاث تجربة المستخدم (UX Research) والمقابلات والتحليل',
        sessionsCount: 5,
        hoursCount: 20,
        descEn: 'Sessions 12–16: Qualitative vs Quantitative research, Research plans, User Interviewing techniques, Survey design (Google Forms), Competitive Analysis (SWOT & Matrix), and Research Synthesis via Affinity Mapping.',
        descAr: 'الجلسات 12-16: مناهج الأبحاث النوعية والكمية، وضع خطط البحث، إجراء المقابلات الحية وتجنب الانحياز، استبيانات Google Forms، تحليل المنافسين المباشرين وغير المباشرين، وتجميع البيانات بـ Affinity Maps.',
        topics: ['Qualitative vs. Quantitative Research', 'UX Research Plans & Hypotheses', 'User Interview Conducting & Recruiting', 'Surveys & Google Forms Design', 'Direct & Indirect Competitive Audit', 'Affinity Mapping & Insight Extraction'],
        projectTitleEn: 'Complete UX Research Report & Competitive Analysis',
        projectTitleAr: 'تقرير أبحاث تجربة مستخدم كامل وتحليل منافسين'
      },
      {
        moduleNumber: 4,
        titleEn: 'User Personas, Empathy Mapping & Information Architecture',
        titleAr: 'شخصيات المستخدمين، خرائط التعاطف، ومعمارية المعلومات',
        sessionsCount: 6,
        hoursCount: 24,
        descEn: 'Sessions 17–22: Evidence-based User Personas, Empathy Mapping (Says/Thinks/Does/Feels), User Journey Mapping (Current & Future State), Information Architecture (IA), Sitemaps, Navigation patterns, and Card Sorting.',
        descAr: 'الجلسات 17-22: بناء شخصيات المستخدمين بناءً على الأبحاث، خرائط التعاطف، رسم رحلة المستخدم User Journey Map، بناء معمارية المعلومات IA، خرائط المواقع Sitemaps، واختبارات Card Sorting.',
        topics: ['Research-Based User Personas', 'Empathy Maps (Pains & Gains)', 'Current & Future User Journey Maps', 'Information Architecture & Taxonomy', 'Sitemaps & Navigation Patterns', 'Open & Closed Card Sorting Exercises'],
        projectTitleEn: 'Validated Information Architecture & Personas Set',
        projectTitleAr: 'خريطة الموقع والمعمارية المعلوماتية المختبرة وشخصيات المستخدم'
      },
      {
        moduleNumber: 5,
        titleEn: 'User Flows & Low/Mid-Fi Wireframing',
        titleAr: 'مسارات التصفح (User Flows) والتخطيط الهيكلي Wireframes',
        sessionsCount: 6,
        hoursCount: 24,
        descEn: 'Sessions 23–28: Task Flows & User Flows (Onboarding, Checkout, Booking, Password Recovery), Flow Optimization & Friction Reduction, Paper Sketching, Mid-Fidelity App Wireframes, and Critique.',
        descAr: 'الجلسات 23-28: رسم مسارات التصفح المعقدة (E-commerce Checkout, Booking)، تقليل الاحتكاك Friction، السكتشات الورقية Paper Sketches، بناء الهياكل السلكية Mid-Fi، ومراجعة وتعديل التصاميم.',
        topics: ['User Flow & Task Flow Design', 'Complex Product Flows & Edge Cases', 'Friction & Flow Optimization', 'Paper Sketching & Low-Fi Layouts', 'Mid-Fidelity App Wireframing', 'Design Critique & Flow Validation'],
        projectTitleEn: 'Complete App Mid-Fi Wireframe Set & User Flows',
        projectTitleAr: 'مجموعة الأطر الهيكلية المكتملة وتدفقات التصفح للتطبيق'
      },
      {
        moduleNumber: 6,
        titleEn: 'High-Fidelity Mobile UI & Component States',
        titleAr: 'تصميم واجهات المحمول عالية الجودة (Hi-Fi Mobile UI)',
        sessionsCount: 4,
        hoursCount: 16,
        descEn: 'Sessions 29–32: Detailed UI Components (Buttons, Forms, Cards, Dropdowns, Modals), Full Component States (Default, Hover, Pressed, Focus, Loading, Error, Success), 10–15 Screen Mobile UI Design, and UI Critique.',
        descAr: 'الجلسات 29-32: بناء مكونات الواجهة بجميع حالاتها (Hover, Active, Disabled, Error, Loading)، تحويل الهياكل السلكية إلى تطبيق محمول متكامل من 10 إلى 15 شاشة عالية الجودة والدقة.',
        topics: ['UI Component Specs (Modals, Forms, Tabs)', 'Full State-Based Component Design', 'Wireframe to Hi-Fi Transformation', '10–15 Screen Mobile App UI', 'Visual Hierarchy & Spacing Polish', 'Structured UI Critique & Iteration'],
        projectTitleEn: '10–15 Screen High-Fidelity Mobile App UI Project',
        projectTitleAr: 'مشروع تطبيق محمول متكامل عالية الجودة (10–15 شاشة)'
      },
      {
        moduleNumber: 7,
        titleEn: 'Responsive Web Design & Scalable Design Systems',
        titleAr: 'التصميم التكيفي للمواقع وأنظمة التصميم (Design Systems)',
        sessionsCount: 6,
        hoursCount: 24,
        descEn: 'Sessions 33–38: Responsive & Adaptive web design (Mobile-First, Breakpoints, Responsive Grids), Multi-device Landing Page, Design System Foundations (Design Tokens, Color/Type Tokens), and Scalable Component Libraries.',
        descAr: 'الجلسات 33-38: التصميم المائع والمستجيب لجميع الشاشات (Desktop, Tablet, Mobile)، تصميم Landing Page متكاملة، بناء أنظمة التصميم الشاملة Design Systems باستخدام Design Tokens.',
        topics: ['Responsive Grids & Breakpoints', 'Multi-Device Web Landing Page Design', 'Design System Foundations & Tokens', 'Scalable UI Libraries & Naming', 'Design System Documentation', 'Production Refactoring Workshop'],
        projectTitleEn: 'Responsive Website & Production Design System',
        projectTitleAr: 'موقع ويب متكامل لجميع الشاشات ونظام تصميم مؤسسي'
      },
      {
        moduleNumber: 8,
        titleEn: 'Advanced Prototyping, Micro-interactions & Usability Testing',
        titleAr: 'النماذج التفاعلية، المؤثرات الحركية واختبارات القابلية',
        sessionsCount: 3,
        hoursCount: 12,
        descEn: 'Sessions 39–41: Advanced Interactive Prototyping (Smart Animate, Overlays, Transitions), Micro-interactions & UX System States (Empty, Loading, Error), Usability Testing Plans, Moderated User Testing, WCAG Accessibility Audit, and Data Iteration.',
        descAr: 'الجلسات 39-41: ربط الشاشات بنماذج تفاعلية حية بـ Smart Animate، إعداد الحركات الميكروية Micro-interactions، إجراء اختبارات الاستخدام Usability Testing مع مستخدمين حقيقيين، ومراجعة إتاحة الوصول WCAG.',
        topics: ['Smart Animate & Interactive Prototypes', 'Micro-interactions & System UX States', 'Usability Test Plans & Moderation', 'WCAG 2.1 Accessibility Audit', 'Severity Rating & Evidence Iteration'],
        projectTitleEn: 'Interactive Prototype & Usability Testing Report',
        projectTitleAr: 'نموذج تفاعلي حي وتقارير اختبارات القابلية والقابلية للاستخدام'
      },
      {
        moduleNumber: 9,
        titleEn: 'Graduation Capstone, Handoff & Career Track',
        titleAr: 'مشروع التخرج، تسليم المطورين، وإعداد الـ Portfolio والـ CV',
        sessionsCount: 1,
        hoursCount: 4,
        descEn: 'Session 42: End-to-End Digital Product UX Case Study, Developer Handoff Package (Specs, Assets, Tokens), ATS-Friendly CV Drafting, LinkedIn Profile Optimization, Portfolio Presentation & Live Graduation Defense.',
        descAr: 'الجلسة 42: تجهيز حزمة تسليم المطورين Developer Handoff، كتابة دراسة الحالة الشاملة UX Case Study للبورتفوليو، صياغة السيرة الذاتية ATS-Friendly، تحسين LinkedIn، وعرض مشروع التخرج أمام اللجنة.',
        topics: ['Developer Handoff Documentation & Specs', 'UX Case Study Structuring (Behance/Notion/Web)', 'ATS-Friendly UI/UX CV Writing', 'LinkedIn Profile Optimization & Networking', 'HR & Technical UX Interview Prep', 'Graduation Project Live Presentation'],
        projectTitleEn: 'Final UX Case Study + Developer Handoff + Portfolio + ATS CV',
        projectTitleAr: 'دراسة حالة التخرج النهائية + حزمة Handoff + البورتفوليو والـ CV'
      }
    ],
    projectRoadmap: [
      { num: 1, titleEn: 'UX Audit & Before/After UX Redesign', titleAr: 'تحليل الـ UX وإعادة تصميم الواجهات المعيبة', levelEn: 'Beginner', levelAr: 'مبتدئ' },
      { num: 2, titleEn: 'Design Thinking Mini Case Study', titleAr: 'دراسة حالة مصغرة للتفكير التصميمي', levelEn: 'Beginner', levelAr: 'مبتدئ' },
      { num: 3, titleEn: 'Figma Component Library & Mini UI Kit', titleAr: 'مكتبة مكونات Figma وواجهات مستخدم', levelEn: 'Beginner', levelAr: 'مبتدئ' },
      { num: 4, titleEn: 'Typography & Accessible Color System', titleAr: 'نظام الخطوط والألوان وإتاحة الوصول', levelEn: 'Beginner', levelAr: 'مبتدئ' },
      { num: 5, titleEn: 'UX Research Plan & Competitive Audit', titleAr: 'خطة أبحاث تجربة المستخدم وتحليل المنافسين', levelEn: 'Intermediate', levelAr: 'متوسط' },
      { num: 6, titleEn: 'Personas, Empathy & User Journey Maps', titleAr: 'شخصيات المستخدمين وخرائط التعاطف والرحلة', levelEn: 'Intermediate', levelAr: 'متوسط' },
      { num: 7, titleEn: 'Information Architecture & Sitemaps', titleAr: 'معمارية المعلومات وخرائط التصفح', levelEn: 'Intermediate', levelAr: 'متوسط' },
      { num: 8, titleEn: 'Complex User Flows & App Mid-Fi Wireframes', titleAr: 'تدفقات المستخدم والأطر الهيكلية للتطبيق', levelEn: 'Intermediate', levelAr: 'متوسط' },
      { num: 9, titleEn: '10–15 Screen High-Fidelity Mobile App UI', titleAr: 'تطبيق محمول متكامل عالية الجودة (10-15 شاشة)', levelEn: 'Advanced', levelAr: 'متقدم' },
      { num: 10, titleEn: 'Responsive Multi-Device Web Landing Page', titleAr: 'موقع ويب متكامل لجميع الشاشات والأجهزة', levelEn: 'Advanced', levelAr: 'متقدم' },
      { num: 11, titleEn: 'Production-Ready Design System', titleAr: 'نظام تصميم مؤسسي متكامل (Design System)', levelEn: 'Advanced', levelAr: 'متقدم' },
      { num: 12, titleEn: 'End-to-End Capstone Product & UX Case Study', titleAr: 'مشروع التخرج ودراسة الحالة النهائية (Graduation Capstone)', levelEn: 'Capstone', levelAr: 'مشروع تخرج' }
    ]
  },

  // 6. FUNDAMENTALS OF PROGRAMMING DIPLOMA
  {
    id: 'programming-fundamentals',
    category: 'software',
    categoryLabelEn: 'SOFTWARE DEVELOPMENT',
    categoryLabelAr: 'تطوير البرمجيات',
    titleEn: 'Fundamentals of Programming Diploma',
    titleAr: 'دبلومة أساسيات البرمجة وتطوير البرمجيات (C++ & Problem Solving)',
    taglineEn: 'Master C++, Problem Solving, OOP, Data Structures, Algorithms & Career Preparation.',
    taglineAr: 'إتقان لغة C++، حل المشكلات البرمجية، البرمجة كائنية التوجه OOP، هياكل البيانات والتحضير لسوق العمل.',
    descEn: 'A comprehensive 4-month intensive diploma designed to take you from absolute zero to career-ready problem solver. Build 12 real production-grade C++ projects, master algorithmic thinking, pointers, dynamic memory, data structures, software development essentials (Git/GitHub, Clean Code, AI tools), and land your first tech job.',
    descAr: 'دبلومة مكثفة شاماطة لمدة 4 أشهر مصممة لنقلك من الصفر تماماً إلى محترف في حل المشكلات وهيكلة البرمجيات. تتضمن تطبيق 12 مشروعاً برمجياً عملياً، إتقان لغة C++، إدارة الذاكرة والمؤشرات Pointers، هياكل البيانات والخوارزميات، وأدوات المطور الاحترافي (Git/GitHub، النظيف Clean Code، وأدوات الذكاء الاصطناعي)، مع الإعداد الكامل لسوق العمل والـ CV.',
    durationEn: 'Approximately 4 Months (16 Teaching Weeks)',
    durationAr: 'حوالي 4 أشهر (16 أسبوعاً تدريسياً)',
    totalSessions: 48,
    totalHours: 192,
    sessionDurationEn: '4 Hours / Session',
    sessionDurationAr: '4 ساعات لكل جلسة',
    sessionsPerWeekEn: '3 Sessions / Wk',
    sessionsPerWeekAr: '3 جلسات أسبوعياً',
    levelEn: 'Beginner → Intermediate',
    levelAr: 'من المبتدئ إلى المتوسط المتقدم',
    highlights: ['C++ Language', 'Problem Solving', 'OOP Principles', 'Data Structures & Big-O', 'Algorithms & Trees', 'Git/GitHub & Clean Code'],
    projectsCountEn: '12 Major Production Projects',
    projectsCountAr: '12 مشروعاً برمجياً متكاملاً',
    priceEgp: 6000,
    earlyBirdPriceEgp: 5000,
    isFoundingBatch: true,
    foundingBatchBadgeEn: 'Early Bird / First Batch: 5,000 EGP',
    foundingBatchBadgeAr: 'خصم الدفعة الأولى: 5,000 ج.م بدلاً من 6,000 ج.م',
    schedulingNoteEn: 'With 3 sessions per week (4 hours each), 48 sessions require 16 teaching weeks (~3.7 months). In practice, this is delivered and marketed as a full 4-month intensive diploma.',
    schedulingNoteAr: 'ملاحظة المواعيد والجدول الزمني: مع 3 جلسات أسبوعياً (4 ساعات لكل جلسة)، تتطلب الـ 48 جلسة 16 أسبوعاً تدريسياً (ما يقارب 3.7 أشهر)، وتُنفذ عملياً وتُقدم كدبلومة مكثفة لمدة 4 أشهر.',
    tools: ['C++', 'GCC / Clang', 'VS Code', 'Visual Studio', 'Git & GitHub', 'LeetCode / Codeforces', 'AI Assistants'],
    careerOutcomesEn: [
      'Junior C++ Software Developer',
      'Problem Solving & Competitive Programmer',
      'Backend Core Systems Engineer',
      'Computer Science & Data Structures Graduate'
    ],
    careerOutcomesAr: [
      'مطور برمجيات C++ مبتدئ/متوسط',
      'مهندس حل مشكلات ومسابقات برمجية',
      'مهندس نظم وبرمجيات أسس (Core Systems)',
      'خريج متمكن من علوم الحاسب وهياكل البيانات'
    ],
    curriculumModules: [
      {
        moduleNumber: 1,
        titleEn: 'Programming & Problem-Solving Foundations',
        titleAr: 'أساسيات البرمجة والتفكير المنطقي وحل المشكلات',
        sessionsCount: 3,
        hoursCount: 12,
        descEn: 'How computers work (CPU, RAM, Storage, OS), Compiler vs Interpreter, Source Code compilation to execution, Flowcharts, Pseudocode, and Debugging mindset.',
        descAr: 'فهم آلية عمل الحاسوب (CPU, RAM, Storage)، الفرق بين Compiler و Interpreter، دورة حياة الكود من الكتابة إلى التنفيذ، الخوارزميات ورسم Flowcharts، والتعامل مع الأخطاء.',
        topics: ['CPU, RAM & OS Architecture', 'Compiler vs. Interpreter', 'Flowcharts & Pseudocode', 'Problem Decomposition', 'Input / Process / Output', 'Debugging Mindset', 'C++ Environment Setup'],
        projectTitleEn: 'Simple Calculator',
        projectTitleAr: 'آلة حاسبة تفاعلية متكاملة'
      },
      {
        moduleNumber: 2,
        titleEn: 'Variables, Data Types & Operators',
        titleAr: 'المتغيرات وأنواع البيانات والعمليات الحسابية والمنطقية',
        sessionsCount: 3,
        hoursCount: 12,
        descEn: 'Variables, Constants, primitives (int, float, double, char, bool, string), Type Casting, Arithmetic, Logical and Comparison operators.',
        descAr: 'دراسة المتغيرات والثوابت، أنواع البيانات الأساسية، التحويل بين الأنواع Type Casting، الإدخال والإخراج، والأسبقية في العمليات الحسابية والمنطقية.',
        topics: ['Variables & Constants', 'int, float, double, char, bool, string', 'Type Casting & Coercion', 'I/O Streams (cin / cout)', 'Arithmetic & Logical Operators', 'Increment / Decrement & Precedence'],
        projectTitleEn: 'Personal Finance Calculator',
        projectTitleAr: 'حاسبة إدارة الميزانية والمالية الشخصية'
      },
      {
        moduleNumber: 3,
        titleEn: 'Conditions & Decision Making',
        titleAr: 'الجمل الشرطية واتخاذ القرارات في البرمجة',
        sessionsCount: 3,
        hoursCount: 12,
        descEn: 'if / else / else if, Nested Conditions, switch statements, Ternary Operator, Boolean logic, Data validation, and Edge cases.',
        descAr: 'اتخاذ القرارات وتحديد المسارات، الشروط المتداخلة Nested Conditions، جملة switch، المعامل الثلاثي Ternary، والتحقق من صحة البيانات الحساسة.',
        topics: ['if / else / else if Statements', 'Nested Conditions', 'Switch Case Control', 'Ternary Operator (?:)', 'Boolean Logic & Truth Tables', 'Input Validation & Edge Cases'],
        projectTitleEn: 'ATM Simulation — Version 1',
        projectTitleAr: 'محاكي ماكينة الصراف الآلي (ATM) - الإصدار الأول'
      },
      {
        moduleNumber: 4,
        titleEn: 'Loops & Iteration',
        titleAr: 'الحلقات التكرارية والمعالجة الدورية',
        sessionsCount: 3,
        hoursCount: 12,
        descEn: 'for, while, do-while, Nested loops, break / continue, Counters, Accumulators, and classic mathematical number problems.',
        descAr: 'إتقان الحلقات التكرارية for و while و do-while، الحلقات المتداخلة، التحكم بـ break و continue، وحل المسائل الرقمية الشهيرة كالـ Prime Numbers و Fibonacci.',
        topics: ['for, while & do-while Loops', 'Nested Loops & Patterns', 'break & continue Control', 'Counters & Accumulators', 'Prime Numbers & Factorials', 'Fibonacci & Palindrome Numbers'],
        projectTitleEn: 'Number Guessing Game',
        projectTitleAr: 'لعبة تخمين الأرقام التفاعلية'
      },
      {
        moduleNumber: 5,
        titleEn: 'Arrays & Strings',
        titleAr: 'المصفوفات أحادية ومتعددة الأبعاد والتعامل مع النصوص',
        sessionsCount: 4,
        hoursCount: 16,
        descEn: '1D & 2D Arrays, Traversal, Search, Min/Max, Sum/Average, Frequency, Duplicates, Matrices, and C++ String manipulation.',
        descAr: 'المصفوفات أحادية وثنائية الأبعاد 1D/2D، البحث والفرز في المصفوفات، حساب التكرارات، التلاعب بالنصوص String Manipulation، والتحقق من التناظر Palindromes.',
        topics: ['1D Array Operations & Traversal', 'Search, Min/Max & Frequency', '2D Arrays & Matrix Algebra', 'C++ String Class & Char Arrays', 'String Searching & Substrings', 'String Validation & Palindromes'],
        projectTitleEn: 'Student Grade Management System',
        projectTitleAr: 'نظام إدارة ونتائج درجات الطلاب'
      },
      {
        moduleNumber: 6,
        titleEn: 'Functions & Modular Programming',
        titleAr: 'الدوال والبرمجة الهيكلية والتكرار الذاتي (Recursion)',
        sessionsCount: 3,
        hoursCount: 12,
        descEn: 'Function Declaration, Parameters, Return Values, Scope, Pass by Value / Reference, Overloading, Modular architecture, and Recursion.',
        descAr: 'تقسيم الكود إلى دوال منظمة، نطاق المتغيرات Scope، التمرير بالصلة والمنشأ Pass by Value/Reference، التحميل الزائد Overloading، والـ Recursion والـ Call Stack.',
        topics: ['Function Declaration & Definition', 'Parameters & Return Values', 'Scope & Variable Lifetime', 'Pass by Value vs. Pass by Reference', 'Function Overloading', 'Recursion & Call Stack Analysis'],
        projectTitleEn: 'Quiz Management System',
        projectTitleAr: 'نظام إدارة وتجميع الاختبارات التفاعلية'
      },
      {
        moduleNumber: 7,
        titleEn: 'Memory, Pointers & References',
        titleAr: 'إدارة الذاكرة والمؤشرات (Pointers) والحجز الديناميكي',
        sessionsCount: 3,
        hoursCount: 12,
        descEn: 'Memory Model (Stack vs Heap), Memory Addresses, References, Pointers, Pointer Arithmetic, Pointers with Arrays & Functions, Dynamic Memory (new / delete).',
        descAr: 'فهم البنية الداخلية للذاكرة Stack و Heap، عناوين الذاكرة Address-of، استخدام المؤشرات Pointers، حسابات المؤشرات، والحجز الديناميكي للذاكرة بـ new و delete.',
        topics: ['Stack vs. Heap Memory Architecture', 'Memory Addresses & References (&)', 'Pointers & Dereferencing (*)', 'Pointer Arithmetic', 'Pointers with Arrays & Functions', 'Dynamic Memory (new / delete)'],
        projectTitleEn: 'Dynamic Contact Manager',
        projectTitleAr: 'مدير جهات الاتصال الديناميكي بالذاكرة'
      },
      {
        moduleNumber: 8,
        titleEn: 'Structs & File Handling',
        titleAr: 'السجلات (Structs) وإدارة الملفات وحفظ البيانات',
        sessionsCount: 3,
        hoursCount: 12,
        descEn: 'Structs, Struct Arrays, Functions with Structs, Reading/Writing Files (ifstream, ofstream, fstream), File Append, Update, and Persistent TXT/CSV data.',
        descAr: 'تجميع البيانات المركبة باستخدام Structs، إنشاء مصفوفات السجلات، القراءة والكتابة من وإلى الملفات الخارجية TXT و CSV لضمان بقاء البيانات بشكل دائم.',
        topics: ['Struct Declaration & Usage', 'Arrays of Structs', 'Passing Structs to Functions', 'File Streams (ifstream, ofstream)', 'Reading & Writing TXT/CSV Files', 'Data Persistence & File Updates'],
        projectTitleEn: 'Contact Management System (Persistent)',
        projectTitleAr: 'نظام إدارة جهات الاتصال الدائم مع حفظ الملفات'
      },
      {
        moduleNumber: 9,
        titleEn: 'Object-Oriented Programming (OOP)',
        titleAr: 'البرمجة كائنية التوجه (OOP) المتقدمة',
        sessionsCount: 8,
        hoursCount: 32,
        descEn: 'Classes, Objects, Constructors/Destructors, Encapsulation, Composition, Inheritance, Polymorphism, Virtual Functions, Abstraction, Static Members, and Exception Handling.',
        descAr: 'احتراف مفاهيم الـ OOP الثمانية: الكائنات، التغليف Encapsulation، التوارث Inheritance، التعددية Polymorphism، الدوال الافتراضية Virtual Functions، التجريب Abstraction، ومعالجة الاستثناءات Exception Handling.',
        topics: ['Classes, Attributes & Methods', 'Constructors & Destructors', 'Encapsulation & Access Modifiers', 'Composition & Association', 'Inheritance & Derived Classes', 'Polymorphism & Virtual Functions', 'Abstract Classes & Interfaces', 'Operator Overloading & Exception Handling'],
        projectTitleEn: 'Bank Management System',
        projectTitleAr: 'نظام إدارة الحسابات والعمليات البنكية'
      },
      {
        moduleNumber: 10,
        titleEn: 'Data Structures',
        titleAr: 'هياكل البيانات والتعقيد الزمني (Big-O)',
        sessionsCount: 6,
        hoursCount: 24,
        descEn: 'Time & Space Complexity (Big O), Arrays vs Vectors, Singly & Doubly Linked Lists, Stacks, Queues, Hash Tables, and Hash Functions.',
        descAr: 'قياس كفاءة البرامج بـ Big O، بناء القوائم المترابطة Linked Lists، الـ Stacks والـ Queues، وجداول التجزئة Hash Tables ومعالجة التصادمات Collision.',
        topics: ['Time & Space Complexity (Big O)', 'std::vector vs. Native Arrays', 'Singly & Doubly Linked Lists', 'Stacks & Queues Implementation', 'Hash Tables & Hash Functions', 'Collision Resolution Concepts'],
        projectTitleEn: 'Inventory Management System',
        projectTitleAr: 'نظام إدارة المستودعات والمخزون بهياكل البيانات'
      },
      {
        moduleNumber: 11,
        titleEn: 'Algorithms & Problem Solving',
        titleAr: 'الخوارزميات والبحث والفرز والأشجار (Trees & Graphs)',
        sessionsCount: 5,
        hoursCount: 20,
        descEn: 'Linear & Binary Search, Bubble/Selection/Insertion/Merge/Quick Sort, Binary Search Trees (BST), Tree Traversal, Graph BFS/DFS, and Optimization.',
        descAr: 'دراسة خوارزميات البحث والفرز الشهيرة (Quick Sort, Merge Sort, Binary Search)، الأشجار BST، خوارزميات المسح في الرسوم البيانية BFS/DFS، واختيار هيكل البيانات المناسب.',
        topics: ['Linear & Binary Search Algorithms', 'Sorting: Bubble, Selection, Insertion', 'Advanced Sorting: Merge & Quick Sort', 'Binary Trees & BST Operations', 'Tree Traversals (Inorder, Preorder, Postorder)', 'Graph Basics, BFS & DFS Traversals', 'Algorithmic Optimization Techniques'],
        projectTitleEn: 'Route Finder & Path Optimization System',
        projectTitleAr: 'نظام إيجاد وتحسين المسارات الخوارزمي'
      },
      {
        moduleNumber: 12,
        titleEn: 'Software Development Essentials',
        titleAr: 'أساسيات تطوير البرمجيات الاحترافية (Git, GitHub & Clean Code)',
        sessionsCount: 2,
        hoursCount: 8,
        descEn: 'Git Version Control (Commits, Branches, Merging, Push/Pull), GitHub Profiles, README Documentation, Clean Code principles, and AI-Assisted Programming.',
        descAr: 'إدارة النسخ بـ Git و GitHub، بناء بروفايل GitHub احترافي، كتابة الكود النظيف Clean Code، التوثيق، واستغلال أدوات الذكاء الاصطناعي في البرمجة.',
        topics: ['Git Version Control (Commits, Branches)', 'GitHub Profile & Professional README', 'Debugging & Reading Compiler Errors', 'Clean Code & Naming Conventions', 'Documentation & Code Organization', 'AI-Assisted Coding (Copilot & LLMs)'],
        projectTitleEn: 'All Major Projects Published on GitHub',
        projectTitleAr: 'نشر وتوثيق كامل المشاريع السابقة على بروفايل GitHub'
      },
      {
        moduleNumber: 13,
        titleEn: 'Graduation Capstone Project',
        titleAr: 'مشروع التخرج النهائي المتكامل',
        sessionsCount: 2,
        hoursCount: 8,
        descEn: 'Project Planning, System Architecture, OOP Application, Data Structures & Algorithms integration, File Handling, Exception Handling, GitHub repository, and Live Presentation.',
        descAr: 'تخطيط وبناء نظام مؤسسي متكامل يجمع كل ما تم دراسته من OOP وهياكل بيانات وخوارزميات وحفظ ملفات، مع توثيق وتقديم المشروع بأسلوب احترافي.',
        topics: ['System Architecture & Decomposition', 'Full OOP & Data Structures Integration', 'Robust Exception & Edge Case Handling', 'Professional Documentation & GitHub Repo', 'Live Technical Presentation & Code Review'],
        projectTitleEn: 'Enterprise System (E-Commerce / Hospital / Hotel / University / Library / Banking)',
        projectTitleAr: 'تطبيق نظام مؤسسي كامل (إدارة مستشفى / تجارة إلكترونية / فندق / جامعة / مكتبة / بنك)'
      },
      {
        moduleNumber: 14,
        titleEn: 'Career & Soft Skills Preparation',
        titleAr: 'التأهيل المهني وبناء البورتفوليو والسيرة الذاتية',
        sessionsCount: 2,
        hoursCount: 8,
        descEn: 'LinkedIn Profile Optimization, Professional Portfolio Building, CV Drafting, Job/Internship Search Strategies, Recruiter Outreach, and Technical Interview Preparation.',
        descAr: 'تحسين بروفايل LinkedIn، إنشاء البورتفوليو الاحترافي، كتابة الـ CV المعتمد، استراتيجيات التقديم على الوظائف والتدريب، والتحضير للمقابلات التقنية.',
        topics: ['LinkedIn Profile Optimization', 'GitHub Portfolio & Case Studies', 'CV Writing Essentials (ATS-Friendly)', 'Networking & Job Search Strategies', 'Technical Interview & Mock Q&A Prep', 'Personal Branding for Engineers'],
        projectTitleEn: 'Final Career Assets: LinkedIn + GitHub + Portfolio + CV',
        projectTitleAr: 'إعداد حزمة التقديم لسوق العمل (LinkedIn + GitHub + Portfolio + CV)'
      }
    ],
    projectRoadmap: [
      { num: 1, titleEn: 'Simple Calculator', titleAr: 'آلة حاسبة تفاعلية', levelEn: 'Beginner', levelAr: 'مبتدئ' },
      { num: 2, titleEn: 'Personal Finance Calculator', titleAr: 'حاسبة الميزانية والمالية', levelEn: 'Beginner', levelAr: 'مبتدئ' },
      { num: 3, titleEn: 'ATM Simulation — Version 1', titleAr: 'محاكي ماكينة الصراف الآلي', levelEn: 'Beginner', levelAr: 'مبتدئ' },
      { num: 4, titleEn: 'Number Guessing Game', titleAr: 'لعبة تخمين الأرقام الذكية', levelEn: 'Beginner', levelAr: 'مبتدئ' },
      { num: 5, titleEn: 'Student Grade Management System', titleAr: 'نظام إدارة ونتائج درجات الطلاب', levelEn: 'Intermediate', levelAr: 'متوسط' },
      { num: 6, titleEn: 'Quiz Management System', titleAr: 'نظام إدارة وتجميع الاختبارات', levelEn: 'Intermediate', levelAr: 'متوسط' },
      { num: 7, titleEn: 'Dynamic Contact Manager', titleAr: 'مدير جهات الاتصال بالذاكرة الديناميكية', levelEn: 'Intermediate', levelAr: 'متوسط' },
      { num: 8, titleEn: 'Contact Management System', titleAr: 'نظام إدارة الاتصالات مع حفظ الملفات', levelEn: 'Intermediate', levelAr: 'متوسط' },
      { num: 9, titleEn: 'Bank Management System', titleAr: 'نظام إدارة الحسابات والعمليات البنكية (OOP)', levelEn: 'Advanced', levelAr: 'متقدم' },
      { num: 10, titleEn: 'Inventory Management System', titleAr: 'نظام إدارة المخزون والمستودعات (Data Structures)', levelEn: 'Advanced', levelAr: 'متقدم' },
      { num: 11, titleEn: 'Route Finder System', titleAr: 'نظام إيجاد وتحسين المسارات (Algorithms)', levelEn: 'Algorithmic', levelAr: 'خوارزميات' },
      { num: 12, titleEn: 'Graduation Capstone Project', titleAr: 'مشروع التخرج المؤسسي المتكامل (Enterprise Capstone)', levelEn: 'Capstone', levelAr: 'مشروع تخرج' }
    ]
  }
];
