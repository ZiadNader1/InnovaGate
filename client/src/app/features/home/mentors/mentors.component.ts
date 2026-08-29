import { Component, HostListener, ElementRef, ViewChildren, QueryList, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../core/services/language.service';

export interface Mentor {
  id: string;
  number: string;
  name: string;
  role: string;
  diplomaCategory: string;
  experience: string;
  skills: string[];
  bio: string;
  company: string;
  videoUrl: string;
  linkedinUrl: string;
}

@Component({
  selector: 'app-mentors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss']
})
export class MentorsComponent implements AfterViewInit {
  @ViewChildren('mentorVideo') mentorVideos!: QueryList<ElementRef<HTMLVideoElement>>;
  langService = inject(LanguageService);

  get isAr(): boolean {
    return this.langService.currentLang() === 'ar';
  }

  // 5 Practitioner Lead Mentors
  get mentors(): Mentor[] {
    const isAr = this.isAr;
    return [
      {
        id: 'ahmed-mohamed',
        number: '01',
        name: isAr ? 'م. أحمد محمد' : 'Ahmed Mohamed',
        role: isAr ? 'كبير مهندسي تطوير الواجهات Frontend' : 'Senior Front-End Architect',
        diplomaCategory: isAr ? 'تطوير الواجهات' : 'FRONT-END DEVELOPMENT',
        experience: isAr ? 'خبرة أكثر من 8 سنوات' : '8+ Years Experience',
        skills: ['Angular 18', 'React.js', 'TypeScript', 'Web Performance'],
        bio: isAr ? 'مهندس واجهات خبير سابق في كبرى الشركات التقنية. متخصص في معمارية تطبيقات الويب الحديثة وإدارة حالات المكونات والواجهات عالية الأداء.' : 'Former Senior Frontend Engineer at multinational tech hubs. Specialist in modern web application architecture, component state management, and high-performance user interfaces.',
        company: isAr ? 'قائد الفريق التقني @ InnovaGate' : 'Tech Lead @ InnovaGate',
        videoUrl: '/AI.mp4',
        linkedinUrl: '#'
      },
      {
        id: 'mohamed-ali',
        number: '02',
        name: isAr ? 'م. محمد علي' : 'Mohamed Ali',
        role: isAr ? 'كبير مهندسي السيرفرات والأنظمة Backend' : 'Principal Systems & Backend Architect',
        diplomaCategory: isAr ? 'تطوير الخوادم' : 'BACK-END DEVELOPMENT',
        experience: isAr ? 'خبرة أكثر من 10 سنوات' : '10+ Years Experience',
        skills: ['Node.js', 'MongoDB', 'Microservices', 'Distributed Systems'],
        bio: isAr ? 'مهندس أنظمة خبير قام بتصميم قواعد البيانات السحابية وشبكات API السريعة التي تتعامل مع ملايين المعاملات اليومية.' : 'Enterprise systems architect who designed high-throughput backend engines, REST & GraphQL APIs, and cloud-native database pipelines handling millions of daily transactions.',
        company: isAr ? 'مهندس سحابي @ InnovaGate' : 'Cloud Architect @ InnovaGate',
        videoUrl: '/Fundementals.mp4',
        linkedinUrl: '#'
      },
      {
        id: 'sara-ahmed',
        number: '03',
        name: isAr ? 'أ. سارة أحمد' : 'Sara Ahmed',
        role: isAr ? 'مديرة تصميم المنتجات وتجربة المستخدم UI/UX' : 'Head of Product & UX Design',
        diplomaCategory: isAr ? 'تصميم UI/UX' : 'UI/UX DESIGN',
        experience: isAr ? 'خبرة أكثر من 7 سنوات' : '7+ Years Experience',
        skills: ['Figma Systems', 'User Research', 'Design Strategy', 'Prototyping'],
        bio: isAr ? 'قادت تصميم تجربة المستخدم للعديد من التطبيقات المالية والتجارية العالمية. شغوفة بدمج علم نفس المستخدم مع التصميم الرقمي الأنيق.' : 'Design Systems Director who led user experience for international fintech and consumer apps. Passionate about bridging human psychology with sleek digital elegance.',
        company: isAr ? 'مديرة التصميم @ InnovaGate' : 'Design Director @ InnovaGate',
        videoUrl: '/UIUX.mp4',
        linkedinUrl: '#'
      },
      {
        id: 'omar-hassan',
        number: '04',
        name: isAr ? 'م. عمر حسن' : 'Omar Hassan',
        role: isAr ? 'خبير تحليل البيانات واستراتيجيات الذكاء الاصطناعي' : 'Lead Data Scientist & Strategist',
        diplomaCategory: isAr ? 'تحليل البيانات' : 'DATA ANALYSIS',
        experience: isAr ? 'خبرة أكثر من 9 سنوات' : '9+ Years Experience',
        skills: ['Python Analytics', 'SQL Optimization', 'Power BI', 'Predictive Models'],
        bio: isAr ? 'مستشار ومحلل بيانات أرشد العديد من المؤسسات لاستخراج القيمة من البيانات الضخمة وبناء لوحات Power BI والنماذج التنبؤية.' : 'Senior Data Analyst & Consultant. Expert in turning messy big data streams into actionable financial insights, interactive Power BI dashboards, and predictive business models.',
        company: isAr ? 'قائد قسم البيانات @ InnovaGate' : 'Data Lead @ InnovaGate',
        videoUrl: '/DataAnalysis.mp4',
        linkedinUrl: '#'
      },
      {
        id: 'khaled-ibrahim',
        number: '05',
        name: isAr ? 'م. خالد إبراهيم' : 'Khaled Ibrahim',
        role: isAr ? 'كبير مهندسي أساسيات علوم الحاسب' : 'Software Engineering & CS Principal',
        diplomaCategory: isAr ? 'أساسيات علوم الحاسب' : 'SOFTWARE ENGINEERING FUNDAMENTALS',
        experience: isAr ? 'خبرة أكثر من 11 سنة' : '11+ Years Experience',
        skills: ['CS Logic', 'Data Structures', 'Algorithms', 'OOP System Architecture'],
        bio: isAr ? 'مهندس برمجيات وعلوم حاسب خبير. خريج هندسة حاسبات متخصص في تدريس وتأسيس التفكير البرمجي الصحيح، هياكل البيانات، والخوارزميات.' : 'Principal Software Engineer & CS Specialist. Computer Engineering graduate expert in building core algorithmic logic, data structures, and object-oriented software architecture.',
        company: isAr ? 'قائد التأسيس البرمجي @ InnovaGate' : 'CS Principal @ InnovaGate',
        videoUrl: '/Fundementals.mp4',
        linkedinUrl: '#'
      }
    ];
  }

  activeMentorIndex = 0;
  isMediaChanging = false;
  mouseX = 0;
  mouseY = 0;

  ngAfterViewInit(): void {
    this.playActiveVideo();
  }

  selectMentor(index: number): void {
    if (this.activeMentorIndex === index && !this.isMediaChanging) return;

    this.isMediaChanging = true;
    
    setTimeout(() => {
      this.activeMentorIndex = index;
      this.playActiveVideo();
      setTimeout(() => {
        this.isMediaChanging = false;
      }, 50);
    }, 200);
  }

  onMentorClick(index: number, event: MouseEvent): void {
    this.selectMentor(index);

    const targetElement = event.currentTarget as HTMLElement;
    if (targetElement) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const navbarHeight = 105;
          const postRect = targetElement.getBoundingClientRect();
          if (postRect.top < navbarHeight) {
            window.scrollBy({
              top: postRect.top - (navbarHeight + 15),
              behavior: 'smooth'
            });
          }
        });
      });
    }
  }

  private playActiveVideo(): void {
    setTimeout(() => {
      if (this.mentorVideos) {
        this.mentorVideos.forEach((videoRef) => {
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

  getMediaTransform(): string {
    return `scale(1.03) translate3d(${this.mouseX * 4}px, ${this.mouseY * 4}px, 0)`;
  }
}
