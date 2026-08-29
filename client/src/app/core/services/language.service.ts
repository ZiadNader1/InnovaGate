import { Injectable, signal } from '@angular/core';

export type Language = 'ar' | 'en';

export interface Translations {
  navbar: {
    home: string;
    courses: string;
    learningPaths: string;
    diplomas: string;
    about: string;
    contact: string;
    login: string;
    getStarted: string;
    lightMode: string;
    darkMode: string;
    langName: string;
  };
  hero: {
    titleInnova: string;
    titleGate: string;
    subtitle: string;
    paragraph: string;
    btnStart: string;
    btnPaths: string;
    offerBadge: string;
    offerTitle: string;
    offerSubtext: string;
    timerDays: string;
    timerHours: string;
    timerMin: string;
    timerSec: string;
    timerLabel: string;
    claimCta: string;
  };
  coursesPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    kidsCard: {
      label: string;
      title: string;
      desc: string;
      focusTitle: string;
      focusAreas: string[];
      cta: string;
    };
    proCard: {
      label: string;
      title: string;
      desc: string;
      focusTitle: string;
      focusAreas: string[];
      cta: string;
    };
    catalog: {
      heading: string;
      subheading: string;
      tabKids: string;
      tabPro: string;
      durationLabel: string;
      levelLabel: string;
      viewCourse: string;
      enrollNow: string;
    };
  };
  diplomasPage: {
    eyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    exploreCta: string;
    advisorCta: string;
    metrics: {
      hoursVal: string;
      hoursLabel: string;
      sessionsVal: string;
      sessionsLabel: string;
      projectsVal: string;
      projectsLabel: string;
      careerVal: string;
      careerLabel: string;
    };
    catalog: {
      heading: string;
      subheading: string;
      filterAll: string;
      filterSoftware: string;
      filterData: string;
      filterDesign: string;
      filterCyber: string;
      filterMobile: string;
      viewDiploma: string;
      applyNow: string;
      foundingBatch: string;
      priceEgp: string;
    };
    whatYouGet: {
      heading: string;
      subheading: string;
      p1Title: string; p1Desc: string;
      p2Title: string; p2Desc: string;
      p3Title: string; p3Desc: string;
      p4Title: string; p4Desc: string;
      p5Title: string; p5Desc: string;
      p6Title: string; p6Desc: string;
    };
    learningJourney: {
      heading: string;
      step1Title: string; step1Desc: string;
      step2Title: string; step2Desc: string;
      step3Title: string; step3Desc: string;
      step4Title: string; step4Desc: string;
      step5Title: string; step5Desc: string;
    };
    whyInnova: {
      heading: string;
      benefits: string[];
    };
    comparison: {
      heading: string;
      colGoal: string;
      colDiploma: string;
      rows: Array<{ id?: string; icon?: string; goal: string; diploma: string }>;
    };
    faq: {
      heading: string;
      items: Array<{ question: string; answer: string }>;
    };
    finalCta: {
      heading: string;
      subheading: string;
    };
  };
  contactPage: {
    heroTitle: string;
    heroSubtitle: string;
    sendInquiryCta: string;
    exploreDiplomasCta: string;
    cards: {
      phoneTitle: string; phoneVal: string; phoneCta: string;
      emailTitle: string; emailVal: string; emailCta: string;
      locationTitle: string; locationVal: string; locationCta: string;
      hoursTitle: string; hoursVal: string;
    };
    form: {
      heading: string;
      subheading: string;
      fullNameLabel: string; fullNamePlaceholder: string;
      emailLabel: string; emailPlaceholder: string;
      phoneLabel: string; phonePlaceholder: string;
      interestedLabel: string; interestedPlaceholder: string;
      subjectLabel: string; subjectPlaceholder: string;
      messageLabel: string; messagePlaceholder: string;
      submitBtn: string; submittingBtn: string;
      successTitle: string; successMsg: string; resetBtn: string;
      options: string[];
    };
    direct: {
      heading: string;
      subheading: string;
      callUs: string;
      whatsapp: string;
      emailUs: string;
      instagram: string;
    };
    map: {
      heading: string;
      subheading: string;
      getDirections: string;
    };
    faq: {
      heading: string;
      items: Array<{ question: string; answer: string }>;
    };
    finalCta: {
      heading: string;
      subheading: string;
      ctaBtn: string;
    };
  };
  aboutPage: {
    eyebrow: string;
    heroHeadline: string;
    heroSubtitle: string;
    heroIntro: string;
    exploreCta: string;
    meetTeamCta: string;
    storyTitle: string;
    storyParagraphs: string[];
    storyTimeline: Array<{ title: string; sub: string }>;
    founderEyebrow: string;
    founderName: string;
    founderRole: string;
    founderDesc: string[];
    founderHighlight: string;
    meetLeadershipCta: string;
    missionTitle: string;
    missionText: string;
    missionPillars: Array<{ num: string; title: string; sub: string; desc: string }>;
    serveTitle: string;
    serveSubtitle: string;
    serveCards: Array<{ title: string; subtitle: string; desc: string; linkText: string }>;
    approachTitle: string;
    approachSubtitle: string;
    approachSteps: Array<{ num: string; title: string; desc: string; details: string }>;
    statsTitle: string;
    statsSubtitle: string;
    statsList: Array<{ value: string; label: string; desc: string }>;
    visionTitle: string;
    visionText: string;
    finalCtaTitle: string;
    finalCtaSub: string;
    exploreCoursesBtn: string;
    contactUsBtn: string;
  };
  common: {
    ar: string;
    en: string;
  };
}

const AR_TRANSLATIONS: Translations = {
  navbar: {
    home: 'الرئيسية',
    courses: 'الكورسات',
    learningPaths: 'المسارات التعليمية',
    diplomas: 'الدبلومات',
    about: 'عن الأكاديمية',
    contact: 'تواصل معنا',
    login: 'تسجيل الدخول',
    getStarted: 'ابدأ الآن',
    lightMode: 'الوضع الفاتح',
    darkMode: 'الوضع الداكن',
    langName: 'العربية'
  },
  hero: {
    titleInnova: 'INNOVA',
    titleGate: 'GATE',
    subtitle: 'أكاديمية البرمجة والابتكار التقني',
    paragraph: 'منصة تعليمية متكاملة لتمكين جيل المستقبل من مهندسي البرمجيات بمجموعات مهارات تطوير الويب، الذكاء الاصطناعي، وتقنيات البرمجة الحديثة وفق أعلى المعايير.',
    btnStart: 'ابدأ رحلتك الآن',
    btnPaths: 'تصفح الدبلومات المعتمدة',
    offerBadge: '🔥 عرض لفترة محدودة',
    offerTitle: 'خصم 30% على برنامج تطوير الويب المتكامل',
    offerSubtext: 'انضم الآن واكتسب المهارات العملية لبناء التطبيقات المتكاملة وإتقان سوق العمل',
    timerDays: 'يوم',
    timerHours: 'ساعة',
    timerMin: 'دقيقة',
    timerSec: 'ثانية',
    timerLabel: 'ينتهي العرض خلال',
    claimCta: 'احجز مكانك الآن'
  },
  coursesPage: {
    eyebrow: 'الكورسات والمسارات',
    title: 'اختر مسارك التعليمي',
    subtitle: 'استكشف الكورسات المصممة لكل مرحلة في رحلتك التعليمية.',
    kidsCard: {
      label: 'من 6 إلى 18 سنة',
      title: 'الأطفال والناشئين',
      desc: 'ابنِ مهارات الغد من خلال البرمجة، التكنولوجيا، والتعلم الإبداعي.',
      focusTitle: 'مجالات التركيز الأساسية:',
      focusAreas: [
        'Scratch & Block Coding',
        'Python for Kids',
        'Web & Game Development',
        'Robotics & AI'
      ],
      cta: 'استكشف كورسات الناشئين'
    },
    proCard: {
      label: 'الجامعات والخريجين',
      title: 'طلاب الجامعات والخريجين',
      desc: 'طوّر مهاراتك التقنية العملية وإعداد نفسك لسوق العمل التقني والبرمجي.',
      focusTitle: 'مجالات التركيز الأساسية:',
      focusAreas: [
        'Full-Stack Web Development',
        'AI & Data',
        'Cloud & DevOps',
        'Cyber Security'
      ],
      cta: 'استكشف الكورسات الاحترافية'
    },
    catalog: {
      heading: 'دليل الكورسات المتاحة',
      subheading: 'مناهج عمليّة مكثفة لتأهيل الطلاب والناشئين بأعلى المعايير الاحترافية',
      tabKids: 'الأطفال والناشئين (6–18 سنة)',
      tabPro: 'طلاب الجامعات والخريجين',
      durationLabel: 'المدة الزمنية',
      levelLabel: 'المستوى',
      viewCourse: 'تفاصيل الكورس',
      enrollNow: 'الانضمام للكورس'
    }
  },
  diplomasPage: {
    eyebrow: 'الدبلومات المهنية المتخصصة',
    heroTitle: 'ابنِ مهاراتك. اصنع مستقبلك المهني.',
    heroSubtitle: 'استكشف برامج الدبلومات الاحترافية المصممة لنقلك من الأساسيات إلى إتقان المهارات العملية المطلوبة في سوق العمل من خلال التعلم الهيكلي والمشاريع الحقيقية.',
    exploreCta: 'استكشف الدبلومات',
    advisorCta: 'تحدث مع مستشار تعليمي',
    metrics: {
      hoursVal: '200+',
      hoursLabel: 'ساعة تدريبية معتمدة',
      sessionsVal: '50+',
      sessionsLabel: 'جلسة تفاعلية مباشرة',
      projectsVal: '35+',
      projectsLabel: 'مشروعاً وتطبيقاً عملياً',
      careerVal: 'Career',
      careerLabel: 'تأهيل كامل لسوق العمل'
    },
    catalog: {
      heading: 'اختر مسارك المهني',
      subheading: 'اعثر على الدبلومة الاحترافية التي تناسب أهدافك وابدأ في بناء مهارات حقيقية تصنع الفارق في عالم التكنولوجيا.',
      filterAll: 'جميع الدبلومات',
      filterSoftware: 'تطوير البرمجيات',
      filterData: 'البيانات والذكاء الاصطناعي',
      filterDesign: 'تصميم الواجهات UI/UX',
      filterCyber: 'الأمن السيبراني',
      filterMobile: 'تطوير تطبيقات المحمول',
      viewDiploma: 'عرض تفاصيل الدبلومة',
      applyNow: 'قدّم الآن',
      foundingBatch: 'الدفعة التأسيسية',
      priceEgp: '10,000 ج.م'
    },
    whatYouGet: {
      heading: 'أكثر من مجرد دبلومة تعليمية',
      subheading: 'تم تصميم برامجنا حول التطبيق العملي، إعداد البورتفوليو، والجاهزية التامة لسوق العمل.',
      p1Title: 'مشاريع تطبيقية واقعية', p1Desc: 'بناء تطبيقات برمجية كاملة خلال رحلة التعلم.',
      p2Title: 'بورتفوليو احترافي', p2Desc: 'التخرج بجمع من المشاريع القوية التي تعرضها لأصحاب العمل.',
      p3Title: 'توجيه وإرشاد مهني', p3Desc: 'احصل على استشارات وتوجيه لتسويق مهاراتك في سوق العمل.',
      p4Title: 'تأهيل الـ CV و LinkedIn', p4Desc: 'تعلم كيفية إبراز خبراتك التقنية بشكل محترف وجذاب.',
      p5Title: 'المهارات الشخصية (Soft Skills)', p5Desc: 'تطوير مهارات التواصل، العمل الجماعي، والعرض التقديمي.',
      p6Title: 'تعلم هيكلي منظم', p6Desc: 'اتبع منهجاً دراسياً واضحاً مبنياً على التدرج وتطوير المهارات.'
    },
    learningJourney: {
      heading: 'رحلة التعلم في الدبلومة',
      step1Title: 'التعلم والتأسيس', step1Desc: 'بناء المفاهيم والأساسيات التقنية القوية.',
      step2Title: 'التطبيق العملي', step2Desc: 'تطبيق المفاهيم عبر تمارين وتحديات برمجية.',
      step3Title: 'بناء المشاريع', step3Desc: 'إنشاء تطبيقات واقعية تحاكي سوق العمل.',
      step4Title: 'إعداد البورتفوليو', step4Desc: 'تجهيز معارض الأعمال والملف الشخصي.',
      step5Title: 'الانطلاق لسوق العمل', step5Desc: 'الاستعداد للوظائف، التدريب، أو العمل الحر.'
    },
    whyInnova: {
      heading: 'لماذا تتعلم مع Innova Gate؟',
      benefits: [
        'منهج دراسي موجه لمتطلبات سوق العمل',
        'تركيز كامل على التطبيق والتدريب العملي',
        'تعليم قائم على المشاريع والحلول الحقيقية',
        'برامج مصممة خصيصاً للنمو المهني',
        'بيئة تعليمية تقنية احترافية ومشجعة',
        'مسارات تعلم منظمة وتدرج أكاديمي واضح',
        'نخبة من الخبراء والمدربين الممارسين',
        'بناء معرض أعمال وبورتفوليو قوي'
      ]
    },
    comparison: {
      heading: 'أي مسار هو الأنسب لك؟',
      colGoal: 'هدفك التعليمي والمهني',
      colDiploma: 'الدبلومة الموصى بها',
      rows: [
        { id: 'frontend-development', icon: 'fa-solid fa-laptop-code', goal: 'بناء مواقع وتطبيقات الويب التفاعلية', diploma: 'دبلومة تطوير الواجهات الأمامية (Front-End)' },
        { id: 'backend-development', icon: 'fa-solid fa-server', goal: 'بناء الخوادم وقواعد البيانات والـ APIs', diploma: 'دبلومة تطوير الخوادم (Back-End)' },
        { id: 'mobile-app-development', icon: 'fa-solid fa-mobile-screen-button', goal: 'بناء تطبيقات الهواتف الذكية (Android & iOS)', diploma: 'دبلومة تطوير تطبيقات المحمول (Flutter)' },
        { id: 'data-analysis', icon: 'fa-solid fa-chart-line', goal: 'تحليل البيانات واستخراج الرؤى التجارية', diploma: 'دبلومة تحليل البيانات (Data Analysis)' },
        { id: 'ui-ux-design', icon: 'fa-solid fa-pen-nib', goal: 'تصميم واجهات وتجارب المستخدم التفاعلية', diploma: 'دبلومة تصميم الواجهات (UI/UX Design)' },
        { id: 'programming-fundamentals', icon: 'fa-solid fa-code', goal: 'بناء الأساس البرمجي وعلوم الحاسب', diploma: 'دبلومة أساسيات البرمجة (Fundamentals)' }
      ]
    },
    faq: {
      heading: 'الأسئلة الشائعة حول الدبلومات',
      items: [
        {
          question: 'لمن تُقدم هذه الدبلومات المهنية؟',
          answer: 'تُقدم لطلاب الجامعات، الخريجين، المبتدئين، وكل من يرغب في اكتساب مهارات تقنية عملية وموثوقة للانتقال لسوق العمل.'
        },
        {
          question: 'ما هي مدة الدبلومة التدريبية؟',
          answer: 'تعتمد مدة الدبلومة على التخصص، وتصل إجمالي الساعات في الدبلومات الاحترافية بالأكاديمية إلى قرابة 200 ساعة تدريبية مكثفة.'
        },
        {
          question: 'هل البرامج عملية وتعتمد على التطبيق؟',
          answer: 'نعم بالتأكيد. التطبيق العملي والمشاريع الحقيقية تشكل الجزء الأكبر من تجربة التعلم بالدبلومة.'
        },
        {
          question: 'هل أحتاج لخلفية برمجية سابقة للانضمام؟',
          answer: 'تختلف المتطلبات حسب الدبلومة. دبلومة "أساسيات البرمجة" ودبلومة "تطوير الواجهات" مناسبتان جداً للمبتدئين بدون خبرة سابقة.'
        },
        {
          question: 'هل سأقوم ببناء مشاريع حقيقية أثناء الدراسة؟',
          answer: 'نعم. تتضمن كل دبلومة ما بين 20 إلى 35 مشروعاً وتطبيقاً عملياً تبنيها بنفسك لتكوين البورتفوليو الخاص بك.'
        },
        {
          question: 'هل تقدمون إرشاداً وتوجيهاً مهنياً بعد التخرج؟',
          answer: 'نعم. نساعدك في تجهيز الـ CV، حساب LinkedIn، إعداد البورتفوليو، والاستعداد لمقابلات العمل والوظائف.'
        }
      ]
    },
    finalCta: {
      heading: 'مهارتك القادمة تبدأ من هنا.',
      subheading: 'اختر مسارك، اكتسب المهارات العملية، وخذ الخطوة التالية نحو مستقبلك في عالم التكنولوجيا.'
    }
  },
  contactPage: {
    heroTitle: "دعنا نبدأ المحادثة.",
    heroSubtitle: "لديك استفسار حول برامجنا، الدبلومات، القبول، أو المسارات التعليمية؟ فريقنا هنا لمساعدتك واختيار الفرصة الأنسب لأهدافك.",
    sendInquiryCta: "إرسال استفسار",
    exploreDiplomasCta: "استكشف الدبلومات",
    cards: {
      phoneTitle: "اتصل بنا",
      phoneVal: "+20 114 418 0891",
      phoneCta: "اتصل الآن",
      emailTitle: "راسلنا إلكترونياً",
      emailVal: "info@innovagate.io",
      emailCta: "إرسال إيميل",
      locationTitle: "تفرد بزيارتنا",
      locationVal: "دمنهور، محافظة البحيرة، مصر",
      locationCta: "عرض الموقع",
      hoursTitle: "ساعات العمل الرسمية",
      hoursVal: "الأحد - الخميس: 9:00 ص - 6:00 م"
    },
    form: {
      heading: "كيف يمكننا مساعدتك؟",
      subheading: "أخبرنا بما تبحث عنه وسيقوم فريق الأكاديمية بالتواصل معك في أسرع وقت.",
      fullNameLabel: "الاسم بالكامل *",
      fullNamePlaceholder: "أدخل اسمك بالكامل",
      emailLabel: "البريد الإلكتروني *",
      emailPlaceholder: "أدخل بريدك الإلكتروني",
      phoneLabel: "رقم الهاتف / الواتساب *",
      phonePlaceholder: "أدخل رقم هاتفك",
      interestedLabel: "الاهتمام أو التخصص المطلوب",
      interestedPlaceholder: "اختر الدبلومة أو البرنامج المناسب",
      subjectLabel: "عنوان الاستفسار",
      subjectPlaceholder: "عن ماذا تريد أن تسأل؟",
      messageLabel: "تفاصيل استفسارك *",
      messagePlaceholder: "أخبرنا كيف يمكننا مساعدتك...",
      submitBtn: "إرسال الرسالة",
      submittingBtn: "جاري الإرسال...",
      successTitle: "شكراً لتواصلك معنا!",
      successMsg: "تم استلام رسالتك بنجاح. سيقوم فريق المستشارين بالرد عليك في أقرب وقت ممكن.",
      resetBtn: "إرسال رسالة أخرى",
      options: [
        "دبلومة تطوير الواجهات الأمامية (Front-End)",
        "دبلومة تطوير الخوادم (Back-End)",
        "دبلومة تطوير تطبيقات المحمول (Mobile Flutter)",
        "دبلومة تحليل البيانات (Data Analysis)",
        "دبلومة تصميم الواجهات (UI/UX Design)",
        "دبلومة أساسيات البرمجة (Programming Fundamentals)",
        "برامج الأطفال والناشئين (Kids & Teens)",
        "استفسار آخر"
      ]
    },
    direct: {
      heading: "تفضل الحديث المباشر؟",
      subheading: "في كثير من الأحيان، المحادثة السريعة تمنحك إجابات أسهل وأوضح.",
      callUs: "الاتصال الهاتفي المباشر",
      whatsapp: "محادثة عبر الواتساب",
      emailUs: "إرسال بريد إلكتروني",
      instagram: "تابعنا على إنستغرام"
    },
    map: {
      heading: "موقع الأكاديمية على الخريطة",
      subheading: "تفضل بزيارة أكاديمية Innova Gate والالتقاء بفريق الخبراء والمدربين.",
      getDirections: "عرض الاتجاهات والموقع"
    },
    faq: {
      heading: "الأسئلة الشائعة حول التواصل والقبول",
      items: [
        {
          question: "ما هي البرامج والدبلومات المتاحة بالأكاديمية؟",
          answer: "نقدم كورسات برمجية ودبلومات حرفية متكاملة مقسمة لكل المراحل: للمبتدئين، طلاب الجامعات، والخريجين، بالإضافة لبرامج الناشئين والأطفال."
        },
        {
          question: "كيف يمكنني اختيار الدبلومة المناسبة لمستواي؟",
          answer: "يمكنك التواصل مع فريق المستشارين التعليميين لمساعدتك في تقييم مستواك واختيار المسار المناسب لأهدافك الوظيفية."
        },
        {
          question: "هل يمكنني الاستفسار عن مواعيد المجموعات ومواعيد الدفع؟",
          answer: "نعم بالتأكيد. يمكنك إرسال استفسار عبر النموذج أو التواصل مباشر عبر الواتساب أو الهاتف لمعرفة تفاصيل الدفع والدفعات المتاحة."
        },
        {
          question: "هل تقدم الأكاديمية برامج موجهة لطلاب الجامعات والخريجين؟",
          answer: "نعم. توفر الأكاديمية دبلومات مكثفة تهدف لبناء مهارات عملية حقيقية وإعداد بورتفوليو لسوق العمل."
        },
        {
          question: "هل تتوفر برامج مخصصة للأطفال والناشئين؟",
          answer: "نعم. لدينا مسارات مخصصة للأعمار من 6 إلى 18 سنة لتطوير التفكير المنطقي والبرمجة والذكاء الاصطناعي."
        }
      ]
    },
    finalCta: {
      heading: "لديك أسئلة؟ نحن هنا للمساعدة دائماً.",
      subheading: "سواء كنت تختار كورس البرمجة الأول لك أو تخطط لخطوتك القادمة، فريقنا جاهز للإجابة على جميع استفساراتك.",
      ctaBtn: "تحدث مع فريقنا الآن"
    }
  },
  aboutPage: {
    eyebrow: "عن الأكاديمية",
    heroHeadline: "عن Innova Gate",
    heroSubtitle: "بناء المهارات. صياغة المهن. تطوير التكنولوجيا.",
    heroIntro: "إنوفا جيت هي أكاديمية متخصصة في البرمجة والتكنولوجيا، مكرسة لتقديم تعليم هيكلي وعملي وموجه نحو المستقبل المهني للأطفال، طلاب الجامعات، والخريجين.",
    exploreCta: "استكشف برامجنا",
    meetTeamCta: "التقِ بفريقنا",
    storyTitle: "قصتنا",
    storyParagraphs: [
      "تأسست Innova Gate برؤية واضحة: جعل التعليم التكنولوجي عالي الجودة أكثر إتاحة، وتطبيقاً، وارتباطاً بالمهارات الواقعية.",
      "نحن نؤمن بأن تعلم التكنولوجيا يجب أن يتجاوز مجرد مشاهدة المحاضرات أو حل التمارين النظرية. يحتاج الطلاب إلى مسارات تعلم هيكلية، ومشاريع عملية، ومدربين ذوي خبرة، وبيئة تساعدهم على تحويل المعرفة إلى قدرات حقيقية.",
      "من أساسيات البرمجة إلى المسارات التكنولوجية المتقدمة، تم تصميم Innova Gate لتدعيم المتعلمين في مختلف مراحل رحلتهم — من صغار السن الذين يكتشفون التكنولوجيا لأول مرة إلى طلاب الجامعات والخريجين المستعدين للعالم المهني."
    ],
    storyTimeline: [
      { title: "اكتشف", sub: "Discover" },
      { title: "تعلم", sub: "Learn" },
      { title: "ابنِ", sub: "Build" },
      { title: "تطور", sub: "Grow" },
      { title: "انطلق", sub: "Launch" }
    ],
    founderEyebrow: "التأسيس والقيادة",
    founderName: "نور الدين إبراهيم",
    founderRole: "المؤسس والرئيس التنفيذي",
    founderDesc: [
      "نور الدين إبراهيم هو المؤسس والرئيس التنفيذي لأكاديمية Innova Gate وخريج الجامعة المصرية اليابانية للعلوم والتكنولوجيا (E-JUST).",
      "خلال مسيرته الجامعية، طور خبرة عملية واسعة في إدارة المشاريع، وتنسيق الفرق، والعمل المباشر مع الطلاب، وتنظيم المبادرات التقنية في بيئة أكاديمية متسارعة.",
      "ساهمت خبرته المباشرة مع الطلاب وتوليه مسؤوليات قيادية متعددة خلال سنوات الدراسة في تشكيل فهمه العميق للتحديات الواقعية التي يواجهها المتعلمون عند محاولة اكتساب مهارات تقنية تطبيقية والاستعداد لسوق العمل المهني.",
      "ودفعاً بشغفه الدائم بالتكنولوجيا والتعليم وريادة الأعمال، أسس Innova Gate برؤية تتمثل في خلق بيئة تعليمية تربط بين التعليم الهيكلي والخبرة العملية والفرص المهنية الحقيقية."
    ],
    founderHighlight: "تكنولوجيا × تعليم × فرص",
    meetLeadershipCta: "التقِ بفريق القيادة",
    missionTitle: "رسالتنا",
    missionText: "رسالتنا هي تمكين المتعلمين بالمعرفة التقنية، المهارات العملية، والثقة التي يحتاجونها لبناء مستقبل مهني ملهم وذو قيمة في عالم التكنولوجيا.",
    missionPillars: [
      { num: "01", title: "تعلم", sub: "Learn", desc: "مسارات تعليمية هيكلية مبنية حول تدرج واضح وتطوير مستمر." },
      { num: "02", title: "ابنِ", sub: "Build", desc: "مشاريع تطبيقية تحول المعرفة النظرية إلى مهارات حقيقية." },
      { num: "03", title: "تطور", sub: "Grow", desc: "تطوير مهني يجهز المتعلمين للفرص الوظيفية الحقيقية." }
    ],
    serveTitle: "من نخدم؟",
    serveSubtitle: "مسارات تعليمية وتطبيقية موجهة بعناية صُممت خصيصاً لتمكين المتعلمين في كل مرحلة من رحلتهم الأكاديمية والمهنية وتأهيلهم لسوق العمل.",
    serveCards: [
      {
        title: "الأطفال والناشئين",
        subtitle: "Kids & Teens",
        desc: "اكتشاف التكنولوجيا، الإبداع، ومهارات حل المشكلات من خلال تجارب تعليمية ممتعة ومناسبة لكل عمر.",
        linkText: "استكشف برامج الناشئين"
      },
      {
        title: "طلاب الجامعات",
        subtitle: "University Students",
        desc: "بناء مهارات تقنية تطبيقية، تعزيز المعرفة الأكاديمية، والاستعداد للتدريب الصيفي وسوق العمل.",
        linkText: "استكشف برامج الطلاب"
      },
      {
        title: "الخريجون والمهنيون",
        subtitle: "Graduates",
        desc: "تطوير قدرات جاهزة للعمل والانتقال من المعرفة الأكاديمية إلى وظائف تقنية احترافية.",
        linkText: "استكشف برامج الخريجين"
      }
    ],
    approachTitle: "تعليم يتجاوز قاعات الدراسة",
    approachSubtitle: "نهج مدروس ومبني على التطبيق العملي والجاهزية المهنية (اضغط على أي عنصر للتفاصيل)",
    approachSteps: [
      {
        num: "01",
        title: "منهج هيكلي منظم",
        desc: "مسارات تعلم واضحة صممت لتطوير المهارات بشكل متدرج ومستدام.",
        details: "يتم إعداد المناهج وفقاً لأحدث المعايير البرمجية، حيث نبدأ معك من المفاهيم الأساسية وتراكيب البيانات وصولاً لبناء الأنظمة المتقدمة، مما يضمن بناء خلفية تقنية رصينة بدون أي ثغرات."
      },
      {
        num: "02",
        title: "تطبيق عملي مستمر",
        desc: "مشاريع وتطبيقات عملية ترافق الطالب طوال رحلة التعلم.",
        details: "أكثر من 70% من وقت الدبلومة مخصص للتطبيق المباشر، حيث تبني تطبيقات ويب وموبايل ومشاريع حقيقية تحاكي ما تطلبه كبرى الشركات التقنية بدلاً من الاقتصار على الشرح النظري."
      },
      {
        num: "03",
        title: "مهارات موجهة لسوق العمل",
        desc: "التركيز على أحدث التقنيات المطلوبة فعلياً في سوق التكنولوجيا الحديث.",
        details: "نراقب باستمرار احتياجات السوق العربي والعالمي ونحدث المناهج لتقنيات مثل Angular, Node.js, Flutter, Python, و AI Tools ليصبح الطالب جاهزاً للمقابلة الشخصية والتوظيف فور التخرج."
      },
      {
        num: "04",
        title: "مدربون خبرة",
        desc: "التعلم على يد خبراء يمتلكون خبرة عملية واقعية وتطبيقية.",
        details: "يتولى التدريب مهندسون ومطورون يعملون في شركات برمجية مرموقة، لنقل الخبرة العملية الحقيقية والتجارب الأكاديمية والمهنية المباشرة للطالب مع متابعة دقيقة لكل كود."
      },
      {
        num: "05",
        title: "تطوير مهني وشخصي",
        desc: "مساعدة الطلاب في تسويق مهاراتهم وبناء ملفاتهم الشخصية بثقة.",
        details: "نوفر ورش عمل متخصصة لبناء السيرة الذاتية (CV)، تحسين حساب LinkedIn، إنشاء معرض الأعمال (Portfolio) على GitHub، بالإضافة لإجراء مقابلات عمل تجريبية (Mock Interviews)."
      }
    ],
    statsTitle: "لماذا Innova Gate؟",
    statsSubtitle: "تضمن كل دبلومة في أكاديمية إنوفا جيت هذه الإمكانيات والخدمات كحد أدنى تضمن لك أعلى معايير الاحترافية والجاهزية المهنية.",
    statsList: [
      { value: "200+", label: "ساعة تعلم هيكلي", desc: "Structured Learning" },
      { value: "50+", label: "جلسة تدريب عملي", desc: "Practical Training" },
      { value: "35+", label: "مشروعاً وتطبيقاً", desc: "Hands-on Experience" },
      { value: "تعدد المسارات", label: "مسارات تعليمية", desc: "Kids • Undergraduates • Graduates" },
      { value: "اعتمادات معترف بها", label: "معايير الجودة", desc: "Quality & Professional Standards" },
      { value: "أونلاين + أوفلاين", label: "مرونة التعلم", desc: "Flexible Learning" }
    ],
    visionTitle: "رؤيتنا",
    visionText: "أن نصبح الوجهة التعليمية التقنية الموثوقة التي تساعد المتعلمين على اكتشاف إمكانياتهم، وبناء مهارات عملية، والانطلاق بثقة نحو خطوتهم التالية في العالم الرقمي.",
    finalCtaTitle: "رحلتك تبدأ من هنا.",
    finalCtaSub: "سواء كنت تكتشف البرمجة لأول مرة أو تستعد لفرصتك المهنية القادمة، تم بناء Innova Gate لمساعدتك على التقدم بثقة.",
    exploreCoursesBtn: "استكشف الكورسات",
    contactUsBtn: "تواصل معنا"
  },
  common: {
    ar: 'العربية',
    en: 'English'
  }
};

const EN_TRANSLATIONS: Translations = {
  navbar: {
    home: 'Home',
    courses: 'Courses',
    learningPaths: 'Learning Paths',
    diplomas: 'Diplomas',
    about: 'About',
    contact: 'Contact',
    login: 'Login',
    getStarted: 'Get Started',
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    langName: 'English'
  },
  hero: {
    titleInnova: 'INNOVA',
    titleGate: 'GATE',
    subtitle: 'Coding & Tech Innovation Academy',
    paragraph: 'Empowering the next generation of tech leaders with practical coding skills, real-world Full-Stack projects, and cutting-edge software innovation.',
    btnStart: 'Begin Your Innovation',
    btnPaths: 'View Our Diplomas',
    offerBadge: '🔥 Summer Tech Bootcamps',
    offerTitle: 'Get 30% Off Full-Stack Web Development Track',
    offerSubtext: 'Limited seats available. Master Angular, Node.js, and Modern Web Stack.',
    timerDays: 'Days',
    timerHours: 'Hours',
    timerMin: 'Min',
    timerSec: 'Sec',
    timerLabel: 'Offer ends in',
    claimCta: 'Claim Offer'
  },
  coursesPage: {
    eyebrow: 'COURSES',
    title: 'Choose Your Learning Path',
    subtitle: 'Explore courses designed for every stage of your learning journey.',
    kidsCard: {
      label: 'AGES 6–18',
      title: 'Kids & Teens',
      desc: 'Build the skills of tomorrow through programming, technology, and creative learning.',
      focusTitle: 'Core Focus Areas:',
      focusAreas: [
        'Scratch & Block Coding',
        'Python for Kids',
        'Web & Game Development',
        'Robotics & AI'
      ],
      cta: 'Explore Kids Courses'
    },
    proCard: {
      label: 'UNIVERSITY & BEYOND',
      title: 'University Students & Graduates',
      desc: 'Develop practical technical skills and prepare for the real-world technology job market.',
      focusTitle: 'Core Focus Areas:',
      focusAreas: [
        'Full-Stack Web Development',
        'AI & Data',
        'Cloud & DevOps',
        'Cyber Security'
      ],
      cta: 'Explore Professional Courses'
    },
    catalog: {
      heading: 'Available Course Catalog',
      subheading: 'Practical intensive bootcamps and courses built for real-world software engineering',
      tabKids: 'Kids & Teens (Ages 6–18)',
      tabPro: 'University & Graduates',
      durationLabel: 'Duration',
      levelLabel: 'Level',
      viewCourse: 'View Course Details',
      enrollNow: 'Enroll Now'
    }
  },
  diplomasPage: {
    eyebrow: 'PROFESSIONAL DIPLOMAS',
    heroTitle: 'Build Skills. Build Your Career.',
    heroSubtitle: 'Explore professional diploma programs designed to take you from fundamentals to practical, career-ready skills through structured learning, hands-on projects, and industry-focused training.',
    exploreCta: 'Explore Diplomas',
    advisorCta: 'Talk to an Advisor',
    metrics: {
      hoursVal: '200+',
      hoursLabel: 'Hours of Learning',
      sessionsVal: '50+',
      sessionsLabel: 'Interactive Sessions',
      projectsVal: '35+',
      projectsLabel: 'Practical Projects',
      careerVal: 'Career',
      careerLabel: 'Focused Learning'
    },
    catalog: {
      heading: 'Choose Your Career Path',
      subheading: "Find the professional diploma that matches your goals and start building skills that matter in today's technology industry.",
      filterAll: 'All Diplomas',
      filterSoftware: 'Software Development',
      filterData: 'Data & AI',
      filterDesign: 'Design',
      filterCyber: 'Cybersecurity',
      filterMobile: 'Mobile Development',
      viewDiploma: 'View Diploma',
      applyNow: 'Apply Now',
      foundingBatch: 'Founding Batch',
      priceEgp: '10,000 EGP'
    },
    whatYouGet: {
      heading: 'More Than Just a Diploma',
      subheading: 'Our programs are designed around practical learning, portfolio development, and career preparation.',
      p1Title: 'Practical Projects', p1Desc: 'Build real projects throughout the learning journey.',
      p2Title: 'Professional Portfolio', p2Desc: 'Graduate with projects you can showcase to employers and clients.',
      p3Title: 'Career Guidance', p3Desc: 'Get guidance on positioning your skills for the technology job market.',
      p4Title: 'CV & LinkedIn', p4Desc: 'Learn how to present your technical experience professionally.',
      p5Title: 'Soft Skills', p5Desc: 'Develop communication, teamwork, presentation, and professional skills.',
      p6Title: 'Structured Learning', p6Desc: 'Follow a clear curriculum designed around progressive skill development.'
    },
    learningJourney: {
      heading: 'Your Learning Journey',
      step1Title: 'Learn', step1Desc: 'Build the fundamentals.',
      step2Title: 'Practice', step2Desc: 'Apply concepts through practical exercises.',
      step3Title: 'Build', step3Desc: 'Create real-world projects.',
      step4Title: 'Showcase', step4Desc: 'Build your portfolio and professional presence.',
      step5Title: 'Launch', step5Desc: 'Prepare for internships, jobs, freelancing, or further specialization.'
    },
    whyInnova: {
      heading: 'Why Learn With Innova Gate?',
      benefits: [
        'Industry-focused curriculum',
        'Practical learning & hands-on application',
        'Project-based education',
        'Career-oriented programs',
        'Professional learning environment',
        'Structured learning paths',
        'Supportive expert instructors',
        'Portfolio development'
      ]
    },
    comparison: {
      heading: 'Which Path Is Right For You?',
      colGoal: 'Your Learning Goal',
      colDiploma: 'Recommended Diploma',
      rows: [
        { id: 'frontend-development', icon: 'fa-solid fa-laptop-code', goal: 'Build Websites & Interactive Web Apps', diploma: 'Front-End Development Diploma' },
        { id: 'backend-development', icon: 'fa-solid fa-server', goal: 'Build APIs & Backend Systems', diploma: 'Back-End Development Diploma' },
        { id: 'mobile-app-development', icon: 'fa-solid fa-mobile-screen-button', goal: 'Build Mobile Apps (iOS & Android)', diploma: 'Mobile App Development Diploma' },
        { id: 'data-analysis', icon: 'fa-solid fa-chart-line', goal: 'Work With Data & Dashboards', diploma: 'Data Analysis Diploma' },
        { id: 'ui-ux-design', icon: 'fa-solid fa-pen-nib', goal: 'Design Digital Products & User Interfaces', diploma: 'UI/UX Design Diploma' },
        { id: 'programming-fundamentals', icon: 'fa-solid fa-code', goal: 'Build Programming Foundations & CS Logic', diploma: 'Programming Fundamentals Diploma' }
      ]
    },
    faq: {
      heading: 'Frequently Asked Questions',
      items: [
        {
          question: 'Who are the diplomas for?',
          answer: 'University students, graduates, career starters, and learners who want structured technology training to enter the job market.'
        },
        {
          question: 'How long are the diploma programs?',
          answer: "Diploma duration depends on the program, with the academy's professional diplomas generally structured around approximately 200 hours."
        },
        {
          question: 'Are the programs practical?',
          answer: 'Yes. Practical exercises and real production projects are an important part of the learning experience.'
        },
        {
          question: 'Do I need previous experience?',
          answer: 'Prerequisites depend on the diploma. Programming Fundamentals and Front-End Development are suitable starting points for beginners.'
        },
        {
          question: 'Will I build projects?',
          answer: 'Yes. You will build 20 to 35 practical projects integrated throughout the learning journey to create your portfolio.'
        },
        {
          question: 'Do you provide career guidance?',
          answer: 'Yes. Career preparation, CV/LinkedIn guidance, portfolio development, and professional skills are incorporated into the programs.'
        }
      ]
    },
    finalCta: {
      heading: 'Your Next Skill Starts Here.',
      subheading: 'Choose your path, build practical skills, and take the next step toward your technology career.'
    }
  },
  contactPage: {
    heroTitle: "Let's Start a Conversation.",
    heroSubtitle: "Have a question about our programs, diplomas, admissions, or learning paths? Our team is here to help you find the right opportunity for your goals.",
    sendInquiryCta: "Send an Inquiry",
    exploreDiplomasCta: "Explore Diplomas",
    cards: {
      phoneTitle: "Call Us",
      phoneVal: "+20 114 418 0891",
      phoneCta: "Call Now",
      emailTitle: "Email Us",
      emailVal: "info@innovagate.io",
      emailCta: "Send Email",
      locationTitle: "Visit Us",
      locationVal: "Damanhour, Beheira Governorate, Egypt",
      locationCta: "View Location",
      hoursTitle: "Working Hours",
      hoursVal: "Sun - Thu: 9:00 AM - 6:00 PM"
    },
    form: {
      heading: "How Can We Help You?",
      subheading: "Tell us what you are looking for and our team will get back to you.",
      fullNameLabel: "Full Name *",
      fullNamePlaceholder: "Enter your full name",
      emailLabel: "Email Address *",
      emailPlaceholder: "Enter your email address",
      phoneLabel: "Phone Number *",
      phonePlaceholder: "Enter your phone number",
      interestedLabel: "Interested In",
      interestedPlaceholder: "Select a diploma or program",
      subjectLabel: "Subject",
      subjectPlaceholder: "What would you like to know about?",
      messageLabel: "Message *",
      messagePlaceholder: "Tell us how we can help you...",
      submitBtn: "Send Message",
      submittingBtn: "Sending...",
      successTitle: "Thank You!",
      successMsg: "Your message has been received. Our team will get back to you as soon as possible.",
      resetBtn: "Send Another Message",
      options: [
        "Front-End Development Diploma",
        "Back-End Development Diploma",
        "Mobile App Development Diploma",
        "Data Analysis Diploma",
        "UI/UX Design Diploma",
        "Programming Fundamentals Diploma",
        "Kids & Teens Programs",
        "Other"
      ]
    },
    direct: {
      heading: "Prefer to Talk Directly?",
      subheading: "Sometimes a quick conversation is easier.",
      callUs: "Direct Phone Call",
      whatsapp: "WhatsApp Chat",
      emailUs: "Send Email",
      instagram: "Follow on Instagram"
    },
    map: {
      heading: "Find Us",
      subheading: "Visit Innova Gate Academy and meet our team.",
      getDirections: "Get Directions"
    },
    faq: {
      heading: "Frequently Asked Questions",
      items: [
        {
          question: "What programs do you offer?",
          answer: "We offer structured technology courses and professional diploma programs designed for different learning and career stages."
        },
        {
          question: "How can I choose the right program?",
          answer: "Our team can help you choose a suitable learning path based on your current level, goals, and interests."
        },
        {
          question: "Can I ask about diploma schedules and pricing?",
          answer: "Yes. Contact our team through the form, phone, WhatsApp, or email for current program information."
        },
        {
          question: "Do you offer programs for university students and graduates?",
          answer: "Yes. Innova Gate provides career-focused learning paths for university students and graduates."
        },
        {
          question: "Do you offer programs for kids and teens?",
          answer: "Yes. We provide programming and technology learning paths designed for younger learners."
        }
      ]
    },
    finalCta: {
      heading: "Have Questions? We're Here to Help.",
      subheading: "Whether you're choosing your first programming course or planning your next career step, our team is ready to help.",
      ctaBtn: "Talk to Our Team"
    }
  },
  aboutPage: {
    eyebrow: "ABOUT INNOVA GATE",
    heroHeadline: "About Innova Gate",
    heroSubtitle: "Building Skills. Shaping Careers. Advancing Technology.",
    heroIntro: "Innova Gate is a programming and technology academy dedicated to delivering structured, practical, and career-focused education for Kids, University Students, and Graduates.",
    exploreCta: "Explore Our Programs",
    meetTeamCta: "Meet Our Team",
    storyTitle: "Our Story",
    storyParagraphs: [
      "Innova Gate was founded with a clear vision: to make high-quality technology education more accessible, practical, and connected to real-world skills.",
      "We believe that learning technology should go beyond watching lectures or completing theoretical exercises. Students need structured learning paths, practical projects, experienced instructors, and an environment that helps them turn knowledge into real capabilities.",
      "From programming fundamentals to advanced technology tracks, Innova Gate is designed to support learners at different stages of their journey — from young learners discovering technology for the first time to university students and graduates preparing for the professional world."
    ],
    storyTimeline: [
      { title: "Discover", sub: "Discovery" },
      { title: "Learn", sub: "Mastery" },
      { title: "Build", sub: "Creation" },
      { title: "Grow", sub: "Development" },
      { title: "Launch", sub: "Career Ready" }
    ],
    founderEyebrow: "FOUNDER SPOTLIGHT",
    founderName: "Nour Eldin Ibrahim",
    founderRole: "Founder & CEO",
    founderDesc: [
      "Nour Eldin Ibrahim is the Founder and CEO of Innova Gate Academy and a graduate of the Egypt-Japan University of Science and Technology (E-JUST).",
      "Throughout his university journey, he developed hands-on experience in managing projects, coordinating teams, working with students, and organizing initiatives within a fast-paced academic environment.",
      "His experience working closely with students and managing different responsibilities during his university years helped shape his understanding of the challenges learners face when trying to develop practical technology skills and prepare for the professional world.",
      "Driven by a passion for technology, education, and entrepreneurship, he founded Innova Gate with the vision of creating a learning environment that connects structured education with practical experience and real career opportunities."
    ],
    founderHighlight: "Technology × Education × Opportunity",
    meetLeadershipCta: "Meet Our Leadership",
    missionTitle: "Our Mission",
    missionText: "Our mission is to empower learners with the technical knowledge, practical skills, and confidence they need to build meaningful futures in technology.",
    missionPillars: [
      { num: "01", title: "Learn", sub: "Structured Learning", desc: "Structured learning paths built around clear progression." },
      { num: "02", title: "Build", sub: "Practical Application", desc: "Hands-on projects that transform knowledge into practical skills." },
      { num: "03", title: "Grow", sub: "Career Progression", desc: "Career-focused development that prepares learners for real opportunities." }
    ],
    serveTitle: "Who We Serve",
    serveSubtitle: "Targeted, industry-aligned learning paths specifically designed to empower learners at every stage of their academic and professional journey.",
    serveCards: [
      {
        title: "KIDS & TEENS",
        subtitle: "Ages 6 - 18",
        desc: "Discover technology, creativity, and problem-solving through engaging and age-appropriate learning experiences.",
        linkText: "Explore Programs"
      },
      {
        title: "UNIVERSITY STUDENTS",
        subtitle: "Undergraduates",
        desc: "Build practical technical skills, strengthen academic knowledge, and prepare for internships and the technology industry.",
        linkText: "Explore Programs"
      },
      {
        title: "GRADUATES",
        subtitle: "Career Starters",
        desc: "Develop job-ready capabilities and transition from academic knowledge into professional technology careers.",
        linkText: "Explore Programs"
      }
    ],
    approachTitle: "Learning That Goes Beyond the Classroom",
    approachSubtitle: "A methodical framework designed for career impact (Click any item for details)",
    approachSteps: [
      {
        num: "01",
        title: "Structured Curriculum",
        desc: "Clear learning paths designed around progressive skill development.",
        details: "Curriculums are meticulously structured from foundational programming logic to advanced enterprise architecture, ensuring a seamless progressive learning curve with zero gaps."
      },
      {
        num: "02",
        title: "Practical Learning",
        desc: "Projects and hands-on exercises throughout the learning journey.",
        details: "Over 70% of program hours are spent writing production-ready code, building real web/mobile apps, and completing real-world projects that mimic industry challenges."
      },
      {
        num: "03",
        title: "Industry-Oriented Skills",
        desc: "Focus on technologies and skills relevant to the modern technology market.",
        details: "We constantly update our stack (Angular, Node.js, Flutter, Python, AI integration) based on real-time hiring metrics, empowering graduates to excel in technical interviews."
      },
      {
        num: "04",
        title: "Experienced Instructors",
        desc: "Learning from instructors with practical knowledge and real-world experience.",
        details: "Learn directly from senior software engineers and technology leaders who bring real-world production experience, code reviews, and industry insights straight to your sessions."
      },
      {
        num: "05",
        title: "Career Development",
        desc: "Helping learners understand how to present their skills and prepare for professional opportunities.",
        details: "Dedicated workshops for CV optimization, LinkedIn branding, GitHub portfolio showcases, and technical mock interview sessions to launch your software engineering career."
      }
    ],
    statsTitle: "Why Innova Gate",
    statsSubtitle: "Every diploma program at Innova Gate includes all of these key metrics and standards as a minimum baseline for your success.",
    statsList: [
      { value: "200+", label: "Structured Learning", desc: "Hours of Training" },
      { value: "50+", label: "Practical Training", desc: "Live Sessions" },
      { value: "35+", label: "Hands-on Experience", desc: "Real-world Projects" },
      { value: "Multiple", label: "Learning Paths", desc: "Kids • Undergraduates • Graduates" },
      { value: "Recognized", label: "Accreditations", desc: "Quality & Professional Standards" },
      { value: "Flexible", label: "Online + Offline", desc: "Hybrid Learning Environment" }
    ],
    visionTitle: "Our Vision",
    visionText: "To become a trusted technology education destination that helps learners discover their potential, build practical skills, and confidently take their next step in the digital world.",
    finalCtaTitle: "Your Journey Starts Here.",
    finalCtaSub: "Whether you're discovering programming for the first time or preparing for your next career opportunity, Innova Gate is built to help you move forward.",
    exploreCoursesBtn: "Explore Courses",
    contactUsBtn: "Contact Us"
  },
  common: {
    ar: 'العربية',
    en: 'English'
  }
};

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLang = signal<Language>('ar');
  t = signal<Translations>(AR_TRANSLATIONS);

  constructor() {
    const savedLang = localStorage.getItem('innovagate_lang') as Language;
    if (savedLang === 'en' || savedLang === 'ar') {
      this.setLanguage(savedLang);
    } else {
      this.setLanguage('ar'); // Default to Arabic
    }
  }

  setLanguage(lang: Language) {
    this.currentLang.set(lang);
    if (lang === 'ar') {
      this.t.set(AR_TRANSLATIONS);
      document.documentElement.lang = 'ar';
      document.documentElement.dir = 'rtl';
    } else {
      this.t.set(EN_TRANSLATIONS);
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
    }
    localStorage.setItem('innovagate_lang', lang);
  }

  toggleLanguage() {
    const nextLang: Language = this.currentLang() === 'ar' ? 'en' : 'ar';
    this.setLanguage(nextLang);
  }
}
