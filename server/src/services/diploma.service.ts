import mongoose from 'mongoose';
import { Diploma, IDiplomaDoc } from '../models/diploma.schema';

export class DiplomaService {
  private static isMongoConnected(): boolean {
    return mongoose.connection.readyState === 1;
  }

  public static async seedInitial(): Promise<void> {
    if (!this.isMongoConnected()) return;
    try {
      const count = await Diploma.countDocuments();
      if (count === 0) {
        const initialDiplomas = [
          {
            diplomaId: 'frontend-development',
            category: 'frontend',
            titleAr: 'دبلومة تطوير واجهات المستخدم الفرونت إند (Front-End Development)',
            titleEn: 'Professional Front-End Web Development Diploma',
            descriptionAr: 'تحويل التصميمات إلى تطبيقات ويب تفاعلية عالية الأداء. احترف بناء المكونات الحديثة باستخدام Angular 18 وReact وTypeScript وأنظمة التصميم المتجاوبة.',
            descriptionEn: 'Transform visual concepts into interactive, high-performance web applications. Master modern component architecture using Angular 18, React, TypeScript, and responsive design systems.',
            durationAr: '16 أسبوعاً',
            durationEn: '16 Weeks',
            hoursCount: 200,
            projectsCount: 5,
            priceEgp: 7000,
            originalPriceEgp: 10000,
            videoUrl: '/AI.mp4',
            badgeAr: 'دبلومة معتمدة',
            badgeEn: 'Certified Diploma',
            tagsAr: ['Angular 18', 'React.js', 'TypeScript', 'تصميم متجاوب SCSS', 'أداء تطبيقات الويب'],
            tagsEn: ['Angular 18', 'React.js', 'TypeScript', 'SCSS / Tailwind', 'Web Performance'],
            modulesAr: [
              'الموديول 1: احتراف HTML5 وCSS3 والأنظمة المتجاوبة SCSS',
              'الموديول 2: برمجة JavaScript ES6+ ولغة TypeScript المتقدمة',
              'الموديول 3: بناء التطبيقات باستخدام Angular 18 & Signals',
              'الموديول 4: التعامل مع مكتبة React.js وإدارة الحالة State',
              'الموديول 5: تطوير وإطلاق 5 مشاريع تفاعلية حقيقية'
            ],
            modulesEn: [
              'Module 1: HTML5, Modern SCSS & Responsive Architecture',
              'Module 2: JavaScript ES6+ & TypeScript Mastery',
              'Module 3: Angular 18 Framework & Modern Signals',
              'Module 4: React.js & Advanced State Management',
              'Module 5: Deploying 5 Real-World Production Apps'
            ],
            isFeatured: true
          },
          {
            diplomaId: 'backend-development',
            category: 'backend',
            titleAr: 'دبلومة تطوير الخوادم والأنظمة الباك إند (Back-End Development)',
            titleEn: 'Enterprise Back-End Systems & Cloud Engineering Diploma',
            descriptionAr: 'بناء واجهات البرمجة APIs والأنظمة الخلفية وقواعد البيانات الضخمة. احترف Node.js وExpress وتصميم قواعد بيانات MongoDB وحماية البيانات وتوسيع الأنظمة.',
            descriptionEn: 'Build enterprise-grade backend APIs, microservices, and databases. Master Node.js, Express, MongoDB database modeling, security protocols, and scalable server architecture.',
            durationAr: '16 أسبوعاً',
            durationEn: '16 Weeks',
            hoursCount: 200,
            projectsCount: 6,
            priceEgp: 7000,
            originalPriceEgp: 10000,
            videoUrl: '/Fundementals.mp4',
            badgeAr: 'دبلومة معتمدة',
            badgeEn: 'Certified Diploma',
            tagsAr: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'تشفير وحماية JWT'],
            tagsEn: ['Node.js', 'Express.js', 'MongoDB', 'REST & GraphQL', 'JWT Security'],
            modulesAr: [
              'الموديول 1: معمارية Node.js والبرمجة غير المتزامنة Asynchronous',
              'الموديول 2: بناء واجهات البرمجة RESTful APIs باستعمال Express.js',
              'الموديول 3: تصميم ونمذجة قواعد البيانات MongoDB & Mongoose',
              'الموديول 4: بروتوكولات الحماية والتشفير JWT & OAuth Security',
              'الموديول 5: تطوير وتوسيع 6 أنظمة خلفية وسيرفرات ضخمة'
            ],
            modulesEn: [
              'Module 1: Node.js Architecture & Asynchronous Event Loop',
              'Module 2: Building Enterprise REST APIs with Express.js',
              'Module 3: MongoDB & Mongoose Database Modeling',
              'Module 4: Security Protocols, JWT & Cloud Deployment',
              'Module 5: Building 6 Scalable Enterprise Backend Systems'
            ],
            isFeatured: true
          },
          {
            diplomaId: 'ui-ux-design',
            category: 'design',
            titleAr: 'دبلومة تصميم واجهات وتجربة المستخدم (UI/UX Product Design)',
            titleEn: 'Professional UI/UX Product Design Diploma',
            descriptionAr: 'تصميم تجارب رقمية مميزة. احترف أبحاث المستخدم، رسم التخطيطات الهيكلية Wireframing، وبناء أنظمة التصميم الشاملة والنماذج التفاعلية باستخدام Figma.',
            descriptionEn: 'Craft meaningful digital experiences. Master user research, wireframing, high-fidelity Figma design systems, interactive prototyping, and usability testing.',
            durationAr: '12 أسبوعاً',
            durationEn: '12 Weeks',
            hoursCount: 160,
            projectsCount: 4,
            priceEgp: 7000,
            originalPriceEgp: 10000,
            videoUrl: '/UIUX.mp4',
            badgeAr: 'دبلومة معتمدة',
            badgeEn: 'Certified Diploma',
            tagsAr: ['احتراف Figma', 'أبحاث المستخدم', 'أنظمة التصميم', 'النماذج التفاعلية'],
            tagsEn: ['Figma Mastery', 'User Research', 'Design Systems', 'Wireframing', 'Prototyping'],
            modulesAr: [
              'الموديول 1: أساسيات أبحاث المستخدم وسيكولوجية التصميم',
              'الموديول 2: رسم التخطيطات الهيكلية Wireframing وتجربة المستخدم',
              'الموديول 3: احتراف برنامج Figma وبناء أنظمة التصميم Design Systems',
              'الموديول 4: بناء النماذج التفاعلية Prototyping والتجارب الدقيقة',
              'الموديول 5: بناء 4 مشاريع معرض أعمال Portfolio متكاملة'
            ],
            modulesEn: [
              'Module 1: User Research & Usability Psychology',
              'Module 2: Wireframing & Information Architecture',
              'Module 3: Figma Systems & Design Component Libraries',
              'Module 4: Interactive Prototyping & Micro-interactions',
              'Module 5: Creating 4 Portfolio Case Studies'
            ],
            isFeatured: true
          },
          {
            diplomaId: 'data-analysis',
            category: 'data',
            titleAr: 'دبلومة تحليل وإدارة البيانات والذكاء الاصطناعي (Data Analysis & AI)',
            titleEn: 'Data Analysis & AI Business Intelligence Diploma',
            descriptionAr: 'استخراج القيمة من البيانات لحل المشكلات المعقدة. احترف استعلامات SQL، معالجة البيانات بلغة Python، ولوحات العرض التفاعلية Power BI.',
            descriptionEn: 'Harness data to solve complex business challenges. Master SQL query optimization, Python data processing (Pandas, NumPy), Power BI dashboards, and predictive analytics.',
            durationAr: '14 أسبوعاً',
            durationEn: '14 Weeks',
            hoursCount: 180,
            projectsCount: 5,
            priceEgp: 7000,
            originalPriceEgp: 10000,
            videoUrl: '/DataAnalysis.mp4',
            badgeAr: 'دبلومة معتمدة',
            badgeEn: 'Certified Diploma',
            tagsAr: ['استعلامات SQL', 'لغة بايثون Python', 'لوحات Power BI', 'تصوير البيانات', 'تحليل الأعمال'],
            tagsEn: ['SQL Analytics', 'Python (Pandas)', 'Power BI', 'Data Visualization', 'Business Insights'],
            modulesAr: [
              'الموديول 1: كتابة استعلامات SQL المتقدمة وتحسين الأداء',
              'الموديول 2: تنظيف ومعالجة البيانات بلغة Python (Pandas/NumPy)',
              'الموديول 3: بناء لوحات العرض التفاعلية باستخدام Power BI',
              'الموديول 4: التحليل الاستراتيجي للأعمال ورؤى اتخاذ القرار',
              'الموديول 5: دراسة وتطبيق 5 حالات عمليّة للبيانات الضخمة'
            ],
            modulesEn: [
              'Module 1: Advanced SQL Queries & Query Optimization',
              'Module 2: Python Data Processing (Pandas & NumPy)',
              'Module 3: Interactive Dashboards & Power BI Analytics',
              'Module 4: Strategic Business Insights & Predictive Models',
              'Module 5: 5 Comprehensive Data Analytics Case Studies'
            ],
            isFeatured: true
          },
          {
            diplomaId: 'programming-fundamentals',
            category: 'fundamentals',
            titleAr: 'دبلومة أساسيات البرمجة وعلوم الحاسب (Software Engineering Fundamentals)',
            titleEn: 'Computer Science & Software Engineering Fundamentals Diploma',
            descriptionAr: 'بناء الفكر البرمجي الصحيح وحل المشكلات. احترف أساسيات البرمجة، هياكل البيانات Data Structures، الخوارزميات Algorithms، والبرمجة كائنية التوجه OOP ونظام Git.',
            descriptionEn: 'Build bulletproof computer science foundations. Master programming paradigms, Data Structures, Algorithms, Object-Oriented Programming (OOP), and Git version control.',
            durationAr: '12 أسبوعاً',
            durationEn: '12 Weeks',
            hoursCount: 150,
            projectsCount: 4,
            priceEgp: 7000,
            originalPriceEgp: 10000,
            videoUrl: '/Fundementals.mp4',
            badgeAr: 'دبلومة معتمدة',
            badgeEn: 'Certified Diploma',
            tagsAr: ['أساسيات البرمجة', 'هياكل البيانات', 'الخوارزميات', 'البرمجة كائنية التوجه OOP', 'إدارة الإصدارات Git'],
            tagsEn: ['CS Fundamentals', 'Data Structures', 'Algorithms', 'OOP Logic', 'Git & GitHub'],
            modulesAr: [
              'الموديول 1: مدخل علوم الحاسب والتفكير المنطقي وحل المشكلات Problem Solving',
              'الموديول 2: أساسيات البرمجة، المتغيرات، التعبير الشرطي والحلقات التكرارية',
              'الموديول 3: هياكل البيانات الأساسية والمتقدمة Data Structures & Memory',
              'الموديول 4: الخوارزميات، الترتيب والبحث Algorithmic Complexity (Big O)',
              'الموديول 5: البرمجة كائنية التوجه OOP وتطبيق 4 مشاريع برمجية'
            ],
            modulesEn: [
              'Module 1: Computer Science Intro & Algorithmic Problem Solving',
              'Module 2: Programming Fundamentals, Control Flow & Functions',
              'Module 3: Core Data Structures & Memory Management',
              'Module 4: Algorithm Analysis, Sorting, Searching & Big O',
              'Module 5: Object-Oriented Programming (OOP) & 4 Projects'
            ],
            isFeatured: true
          },
          {
            diplomaId: 'mobile-app-development',
            category: 'mobile',
            titleAr: 'دبلومة تطوير تطبيقات المحمول (Mobile App Development Flutter & React Native)',
            titleEn: 'Professional Mobile Application Development Diploma (Flutter & React Native)',
            descriptionAr: 'احتراف تطوير تطبيقات الهواتف الذكية لأنظمة iOS و Android. تعلم لغة Dart وإطار العمل Flutter وإدارة الحالة State Management وإطلاق التطبيقات على المتجر.',
            descriptionEn: 'Master cross-platform mobile development for iOS & Android. Build sleek apps using Flutter, Dart, React Native, REST API integration, state management (Bloc/Provider), and App Store/Google Play deployment.',
            durationAr: '16 أسبوعاً',
            durationEn: '16 Weeks',
            hoursCount: 200,
            projectsCount: 5,
            priceEgp: 7000,
            originalPriceEgp: 10000,
            videoUrl: '/AI.mp4',
            badgeAr: 'دبلومة معتمدة',
            badgeEn: 'Certified Diploma',
            tagsAr: ['Flutter & Dart', 'React Native', 'إدارة الحالة Bloc', 'ربط الـ APIs', 'نشر التطبيقات App Store'],
            tagsEn: ['Flutter & Dart', 'React Native', 'Bloc State', 'REST APIs', 'App Store & Play Store'],
            modulesAr: [
              'الموديول 1: مدخل تطبيقات الهواتف ولغة Dart الأساسية والمتقدمة',
              'الموديول 2: تصميم واجهات التطبيقات Flutter UI Components & Layouts',
              'الموديول 3: إدارة حالة التطبيقات المتقدمة BLoC & Provider Pattern',
              'الموديول 4: ربط الشبكات والتطبيقات بالـ REST APIs وقواعد بيانات Firebase',
              'الموديول 5: تطوير وإطلاق 5 تطبيقات للهواتف الذكية على المتجر'
            ],
            modulesEn: [
              'Module 1: Mobile Architecture & Core Dart Programming',
              'Module 2: Flutter Responsive UI Layouts & Widget System',
              'Module 3: Advanced State Management (BLoC & Provider)',
              'Module 4: RESTful API Integration & Firebase Backend',
              'Module 5: Deploying 5 Apps to Google Play & Apple App Store'
            ],
            isFeatured: true
          }
        ];

        await Diploma.insertMany(initialDiplomas);
        console.log('[MongoDB Seed] 6 Official Diplomas seeded into MongoDB Atlas successfully');
      }
    } catch (err) {
      console.error('Error seeding diplomas into MongoDB Atlas:', err);
    }
  }

  public static async getAll(): Promise<any[]> {
    if (this.isMongoConnected()) {
      const docs = await Diploma.find().sort({ createdAt: 1 });
      return docs.map(doc => doc.toJSON());
    }
    return [];
  }

  public static async getById(diplomaId: string): Promise<any | null> {
    if (this.isMongoConnected()) {
      const doc = await Diploma.findOne({ diplomaId });
      return doc ? doc.toJSON() : null;
    }
    return null;
  }
}
