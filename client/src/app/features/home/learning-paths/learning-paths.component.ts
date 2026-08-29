import { Component, HostListener, ElementRef, ViewChildren, QueryList, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';

export interface LearningPath {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  careerHeading: string;
  description: string;
  tags: string[];
  duration: string;
  projects: string;
  icon: string;
  videoUrl: string;
}

@Component({
  selector: 'app-learning-paths',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './learning-paths.component.html',
  styleUrls: ['./learning-paths.component.scss']
})
export class LearningPathsComponent implements AfterViewInit {
  @ViewChildren('pathVideo') pathVideos!: QueryList<ElementRef<HTMLVideoElement>>;
  langService = inject(LanguageService);
  router = inject(Router);

  get isAr(): boolean {
    return this.langService.currentLang() === 'ar';
  }

  // Dynamic 6 Career Learning Paths aligned with /diplomas route & IDs
  get learningPaths(): LearningPath[] {
    const isAr = this.isAr;
    return [
      {
        id: 'frontend-development',
        number: '01',
        title: isAr ? 'تطوير واجهات المستخدم' : 'FRONT-END DEVELOPMENT',
        subtitle: isAr ? 'بناء التجارب الرقمية والتطبيقات التفاعلية الحديثة التي يتفاعل معها المستخدم يومياً.' : 'Build the digital experiences people interact with every day.',
        careerHeading: isAr ? 'مطور واجهات الويب Angular & React' : 'Become a Web & UI Engineer',
        description: isAr ? 'تحويل التصميمات إلى تطبيقات ويب تفاعلية عالية الأداء. احترف بناء المكونات الحديثة باستخدام Angular 18 وReact وTypeScript وأنظمة التصميم المتجاوبة.' : 'Transform visual concepts into interactive, high-performance web applications. Master modern component architecture using Angular 18, React, TypeScript, and responsive design systems.',
        tags: isAr ? ['Angular 18', 'React.js', 'TypeScript', 'تصميم متجاوب SCSS', 'أداء تطبيقات الويب'] : ['Angular 18', 'React.js', 'TypeScript', 'SCSS / Tailwind', 'Web Performance'],
        duration: isAr ? '16 أسبوعاً' : '16 Weeks',
        projects: isAr ? '5 مشاريع تطبيقية' : '5 Real-World Apps',
        icon: 'fa-code',
        videoUrl: '/AI.mp4'
      },
      {
        id: 'backend-development',
        number: '02',
        title: isAr ? 'تطوير الخوادم والأنظمة' : 'BACK-END DEVELOPMENT',
        subtitle: isAr ? 'بناء المحركات وقواعد البيانات المسؤولة عن تشغيل وإدارة التطبيقات المتقدمة.' : 'Architect the silent engines and systems powering modern applications.',
        careerHeading: isAr ? 'مهندس أنظمة وسيرفرات Node.js' : 'Become a Cloud & Systems Architect',
        description: isAr ? 'بناء واجهات البرمجة APIs والأنظمة الخلفية وقواعد البيانات الضخمة. احترف Node.js وExpress وتصميم قواعد بيانات MongoDB وحماية البيانات وتوسيع الأنظمة.' : 'Build enterprise-grade backend APIs, microservices, and databases. Master Node.js, Express, MongoDB database modeling, security protocols, and scalable server architecture.',
        tags: isAr ? ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'تشفير وحماية JWT'] : ['Node.js', 'Express.js', 'MongoDB', 'REST & GraphQL', 'JWT Security'],
        duration: isAr ? '16 أسبوعاً' : '16 Weeks',
        projects: isAr ? '6 أنظمة متكاملة' : '6 Enterprise Systems',
        icon: 'fa-server',
        videoUrl: '/Fundementals.mp4'
      },
      {
        id: 'ui-ux-design',
        number: '03',
        title: isAr ? 'تصميم واجهات وتجربة المستخدم' : 'UI/UX DESIGN',
        subtitle: isAr ? 'ابتكار منتجات رقمية سهلة الاستخدام تجمع بين الأناقة والسهولة.' : 'Design intuitive products that bridge human needs with digital elegance.',
        careerHeading: isAr ? 'مصمم منتجات وتجربة مستخدم UI/UX' : 'Become a Product & UX Designer',
        description: isAr ? 'تصميم تجارب رقمية مميزة. احترف أبحاث المستخدم، رسم التخطيطات الهيكلية Wireframing، وبناء أنظمة التصميم الشاملة والنماذج التفاعلية باستخدام Figma.' : 'Craft meaningful digital experiences. Master user research, wireframing, high-fidelity Figma design systems, interactive prototyping, and usability testing.',
        tags: isAr ? ['احتراف Figma', 'أبحاث المستخدم', 'أنظمة التصميم', 'النماذج التفاعلية'] : ['Figma Mastery', 'User Research', 'Design Systems', 'Wireframing', 'Prototyping'],
        duration: isAr ? '12 أسبوعاً' : '12 Weeks',
        projects: isAr ? '4 دراسات حالة Portfolio' : '4 Portfolio Case Studies',
        icon: 'fa-wand-magic-sparkles',
        videoUrl: '/UIUX.mp4'
      },
      {
        id: 'data-analysis',
        number: '04',
        title: isAr ? 'تحليل وإدارة البيانات' : 'DATA ANALYSIS',
        subtitle: isAr ? 'تحويل البيانات الخام إلى قرارات استراتيجية ورؤى مستقبلية قيمة.' : 'Turn raw data streams into strategic decisions and actionable insights.',
        careerHeading: isAr ? 'محلل بيانات واستراتيجي الأعمال' : 'Become a Data Analyst & Strategist',
        description: isAr ? 'استخراج القيمة من البيانات لحل المشكلات المعقدة. احترف استعلامات SQL، معالجة البيانات بلغة Python، ولوحات العرض التفاعلية Power BI.' : 'Harness data to solve complex business challenges. Master SQL query optimization, Python data processing (Pandas, NumPy), Power BI dashboards, and predictive analytics.',
        tags: isAr ? ['استعلامات SQL', 'لغة بايثون Python', 'لوحات Power BI', 'تصوير البيانات', 'تحليل الأعمال'] : ['SQL Analytics', 'Python (Pandas)', 'Power BI', 'Data Visualization', 'Business Insights'],
        duration: isAr ? '14 أسبوعاً' : '14 Weeks',
        projects: isAr ? '5 دراسات حالة للبيانات' : '5 Analytics Case Studies',
        icon: 'fa-chart-line',
        videoUrl: '/DataAnalysis.mp4'
      },
      {
        id: 'programming-fundamentals',
        number: '05',
        title: isAr ? 'أساسيات البرمجة وعلوم الحاسب' : 'SOFTWARE ENGINEERING FUNDAMENTALS',
        subtitle: isAr ? 'بناء الأساس البرمجي والتفكير المنطقي وهياكل البيانات لحل المشكلات البرمجية.' : 'Master core computer science algorithms, logic, and software engineering principles.',
        careerHeading: isAr ? 'مهندس برمجيات وعلوم حاسب' : 'Become a Software Engineer & CS Specialist',
        description: isAr ? 'بناء الفكر البرمجي الصحيح وحل المشكلات. احترف أساسيات البرمجة، هياكل البيانات Data Structures، الخوارزميات Algorithms، والبرمجة كائنية التوجه OOP ونظام Git.' : 'Build bulletproof computer science foundations. Master programming paradigms, Data Structures, Algorithms, Object-Oriented Programming (OOP), and Git version control.',
        tags: isAr ? ['أساسيات البرمجة', 'هياكل البيانات', 'الخوارزميات', 'البرمجة كائنية التوجه OOP', 'إدارة الإصدارات Git'] : ['CS Fundamentals', 'Data Structures', 'Algorithms', 'OOP Logic', 'Git & GitHub'],
        duration: isAr ? '12 أسبوعاً' : '12 Weeks',
        projects: isAr ? '4 مشاريع أنظمة وحل مشكلات' : '4 Algorithmic Projects',
        icon: 'fa-laptop-code',
        videoUrl: '/Fundementals.mp4'
      },
      {
        id: 'mobile-app-development',
        number: '06',
        title: isAr ? 'تطوير تطبيقات المحمول' : 'MOBILE APP DEVELOPMENT',
        subtitle: isAr ? 'بناء تطبيقات الهواتف الذكية لأنظمة Android & iOS باستخدام Flutter و React Native.' : 'Build native cross-platform mobile apps for Android and iOS.',
        careerHeading: isAr ? 'مطور تطبيقات هواتف Flutter & React Native' : 'Become a Mobile Application Engineer',
        description: isAr ? 'احتراف تطوير تطبيقات الهواتف الذكية لأنظمة iOS و Android. تعلم لغة Dart وإطار العمل Flutter وإدارة الحالة State Management وإطلاق التطبيقات على المتجر.' : 'Master cross-platform mobile development for iOS & Android. Build sleek apps using Flutter, Dart, React Native, REST API integration, state management (Bloc/Provider), and App Store/Google Play deployment.',
        tags: isAr ? ['Flutter & Dart', 'React Native', 'إدارة الحالة Bloc', 'ربط الـ APIs', 'نشر التطبيقات App Store'] : ['Flutter & Dart', 'React Native', 'Bloc State', 'REST APIs', 'App Store & Play Store'],
        duration: isAr ? '16 أسبوعاً' : '16 Weeks',
        projects: isAr ? '5 تطبيقات هواتف ذكية' : '5 Production Mobile Apps',
        icon: 'fa-mobile-screen-button',
        videoUrl: '/AI.mp4'
      }
    ];
  }

  activePathIndex = 0;
  isVideoChanging = false;
  selectedDiplomaForModal: LearningPath | null = null;
  mouseX = 0;
  mouseY = 0;

  ngAfterViewInit(): void {
    this.playActiveVideo();
  }

  setActivePath(index: number): void {
    if (this.activePathIndex === index) return;
    
    this.isVideoChanging = true;
    this.activePathIndex = index;
    
    setTimeout(() => {
      this.playActiveVideo();
      this.isVideoChanging = false;
    }, 150);
  }

  onDiplomaClick(index: number, event: MouseEvent): void {
    const targetElement = event.currentTarget as HTMLElement;
    if (!targetElement) return;

    this.setActivePath(index);
  }

  openDiplomaModal(path: LearningPath, event?: MouseEvent): void {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    this.selectedDiplomaForModal = path;
    document.body.style.overflow = 'hidden';
  }

  closeDiplomaModal(): void {
    this.selectedDiplomaForModal = null;
    document.body.style.overflow = 'auto';
  }

  navigateToDiplomaDetail(diplomaId: string, event?: Event): void {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    this.closeDiplomaModal();
    this.router.navigate(['/diplomas', diplomaId]);
  }

  enrollInDiploma(path: LearningPath): void {
    this.closeDiplomaModal();
    const contactSection = document.getElementById('contact') || document.querySelector('.contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getCurriculum(pathId: string): string[] {
    const isAr = this.isAr;
    switch (pathId) {
      case 'frontend-development':
      case 'frontend':
        return isAr ? [
          'الموديول 1: احتراف HTML5 وCSS3 والأنظمة المتجاوبة SCSS',
          'الموديول 2: برمجة JavaScript ES6+ ولغة TypeScript المتقدمة',
          'الموديول 3: بناء التطبيقات باستخدام Angular 18 & Signals',
          'الموديول 4: التعامل مع مكتبة React.js وإدارة الحالة State',
          'الموديول 5: تطوير وإطلاق 5 مشاريع تفاعلية حقيقية'
        ] : [
          'Module 1: HTML5, Modern SCSS & Responsive Architecture',
          'Module 2: JavaScript ES6+ & TypeScript Mastery',
          'Module 3: Angular 18 Framework & Modern Signals',
          'Module 4: React.js & Advanced State Management',
          'Module 5: Deploying 5 Real-World Production Apps'
        ];
      case 'backend-development':
      case 'backend':
        return isAr ? [
          'الموديول 1: معمارية Node.js والبرمجة غير المتزامنة Asynchronous',
          'الموديول 2: بناء واجهات البرمجة RESTful APIs باستعمال Express.js',
          'الموديول 3: تصميم ونمذجة قواعد البيانات MongoDB & Mongoose',
          'الموديول 4: بروتوكولات الحماية والتشفير JWT & OAuth Security',
          'الموديول 5: تطوير وتوسيع 6 أنظمة خلفية وسيرفرات ضخمة'
        ] : [
          'Module 1: Node.js Architecture & Asynchronous Event Loop',
          'Module 2: Building Enterprise REST APIs with Express.js',
          'Module 3: MongoDB & Mongoose Database Modeling',
          'Module 4: Security Protocols, JWT & Cloud Deployment',
          'Module 5: Building 6 Scalable Enterprise Backend Systems'
        ];
      case 'ui-ux-design':
      case 'uiux':
        return isAr ? [
          'الموديول 1: أساسيات أبحاث المستخدم وسيكولوجية التصميم',
          'الموديول 2: رسم التخطيطات الهيكلية Wireframing وتجربة المستخدم',
          'الموديول 3: احتراف برنامج Figma وبناء أنظمة التصميم Design Systems',
          'الموديول 4: بناء النماذج التفاعلية Prototyping والتجارب الدقيقة',
          'الموديول 5: بناء 4 مشاريع معرض أعمال Portfolio متكاملة'
        ] : [
          'Module 1: User Research & Usability Psychology',
          'Module 2: Wireframing & Information Architecture',
          'Module 3: Figma Systems & Design Component Libraries',
          'Module 4: Interactive Prototyping & Micro-interactions',
          'Module 5: Creating 4 Portfolio Case Studies'
        ];
      case 'data-analysis':
        return isAr ? [
          'الموديول 1: كتابة استعلامات SQL المتقدمة وتحسين الأداء',
          'الموديول 2: تنظيف ومعالجة البيانات بلغة Python (Pandas/NumPy)',
          'الموديول 3: بناء لوحات العرض التفاعلية باستخدام Power BI',
          'الموديول 4: التحليل الاستراتيجي للأعمال ورؤى اتخاذ القرار',
          'الموديول 5: دراسة وتطبيق 5 حالات عمليّة للبيانات الضخمة'
        ] : [
          'Module 1: Advanced SQL Queries & Query Optimization',
          'Module 2: Python Data Processing (Pandas & NumPy)',
          'Module 3: Interactive Dashboards & Power BI Analytics',
          'Module 4: Strategic Business Insights & Predictive Models',
          'Module 5: 5 Comprehensive Data Analytics Case Studies'
        ];
      case 'programming-fundamentals':
      case 'fundamentals':
        return isAr ? [
          'الموديول 1: مدخل علوم الحاسب والتفكير المنطقي وحل المشكلات Problem Solving',
          'الموديول 2: أساسيات البرمجة، المتغيرات، التعبير الشرطي والحلقات التكرارية',
          'الموديول 3: هياكل البيانات الأساسية والمتقدمة Data Structures & Memory',
          'الموديول 4: الخوارزميات، الترتيب والبحث Algorithmic Complexity (Big O)',
          'الموديول 5: البرمجة كائنية التوجه OOP وتطبيق 4 مشاريع برمجية'
        ] : [
          'Module 1: Computer Science Intro & Algorithmic Problem Solving',
          'Module 2: Programming Fundamentals, Control Flow & Functions',
          'Module 3: Core Data Structures & Memory Management',
          'Module 4: Algorithm Analysis, Sorting, Searching & Big O',
          'Module 5: Object-Oriented Programming (OOP) & 4 Projects'
        ];
      case 'mobile-app-development':
      case 'mobile':
        return isAr ? [
          'الموديول 1: مدخل تطبيقات الهواتف ولغة Dart الأساسية والمتقدمة',
          'الموديول 2: تصميم واجهات التطبيقات Flutter UI Components & Layouts',
          'الموديول 3: إدارة حالة التطبيقات المتقدمة BLoC & Provider Pattern',
          'الموديول 4: ربط الشبكات والتطبيقات بالـ REST APIs وقواعد بيانات Firebase',
          'الموديول 5: تطوير وإطلاق 5 تطبيقات للهواتف الذكية على المتجر'
        ] : [
          'Module 1: Mobile Architecture & Core Dart Programming',
          'Module 2: Flutter Responsive UI Layouts & Widget System',
          'Module 3: Advanced State Management (BLoC & Provider)',
          'Module 4: RESTful API Integration & Firebase Backend',
          'Module 5: Deploying 5 Apps to Google Play & Apple App Store'
        ];
      default:
        return [];
    }
  }

  private playActiveVideo(): void {
    setTimeout(() => {
      if (this.pathVideos) {
        this.pathVideos.forEach((videoRef) => {
          if (videoRef && videoRef.nativeElement) {
            const vid = videoRef.nativeElement;
            vid.muted = true;
            vid.play().catch(err => console.log('Autoplay handled:', err));
          }
        });
      }
    }, 50);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    this.mouseX = (event.clientX - windowWidth / 2) / (windowWidth / 2);
    this.mouseY = (event.clientY - windowHeight / 2) / (windowHeight / 2);
  }

  trackByPathId(index: number, path: LearningPath): string {
    return path.id;
  }

  getVisualTransform(): string {
    return `scale(1.02) translate3d(${this.mouseX * 5}px, ${this.mouseY * 5}px, 0)`;
  }
}
