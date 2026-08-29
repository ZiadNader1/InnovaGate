import { Component, HostListener, ElementRef, ViewChild, AfterViewInit, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';
import { AnnouncementService, AnnouncementItem } from '../../../core/services/announcement.service';

export interface Offer {
  id?: string;
  badge: string;
  title: string;
  subtext: string;
  ctaText: string;
  ctaLink: string;
  icon: string;
  endDate?: string;
}

export interface TickerCategory {
  name: string;
  icon: string;
  tag: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;
  langService = inject(LanguageService);
  announcementService = inject(AnnouncementService);
  private router = inject(Router);

  mouseX = 0;
  mouseY = 0;
  isDesktop = true;
  dbAnnouncements: AnnouncementItem[] = [];

  navigateTo(path: string, event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.router.navigateByUrl(path);
  }

  get isAr(): boolean {
    return this.langService.currentLang() === 'ar';
  }

  // Bilingual TV News Ticker Categories
  get tickerCategories(): TickerCategory[] {
    const isAr = this.isAr;
    return [
      { name: isAr ? 'تطوير واجهات المستخدم' : 'Frontend Development', icon: 'fa-code', tag: isAr ? 'تطوير فرونت إند' : 'Angular 18 / React' },
      { name: isAr ? 'تطوير الخوادم والقواعد' : 'Backend Development', icon: 'fa-server', tag: isAr ? 'تطوير باك إند' : 'Node.js / Express' },
      { name: isAr ? 'الذكاء الاصطناعي' : 'AI & Machine Learning', icon: 'fa-brain', tag: isAr ? 'تعلم الآلة والنمذجة' : 'Python / LLMs' },
      { name: isAr ? 'تصميم واجهات المستخدم' : 'UI / UX Design', icon: 'fa-wand-magic-sparkles', tag: isAr ? 'تصميم تجربة المستخدم' : 'Figma Systems' },
      { name: isAr ? 'تحليل وإدارة البيانات' : 'Data Analysis', icon: 'fa-chart-line', tag: isAr ? 'قواعد البيانات والتحليل' : 'SQL / Analytics' },
      { name: isAr ? 'تطوير تطبيقات المحمول' : 'Mobile Development', icon: 'fa-mobile-screen-button', tag: isAr ? 'Flutter & React Native' : 'Flutter & React Native' }
    ];
  }

  // Bilingual Announcements (Dynamic from MongoDB Atlas)
  get offers(): Offer[] {
    const isAr = this.isAr;
    if (this.dbAnnouncements.length > 0) {
      return this.dbAnnouncements.map(item => ({
        id: item.id,
        badge: isAr ? item.badgeAr : item.badgeEn,
        title: isAr ? item.titleAr : item.titleEn,
        subtext: isAr ? item.subtextAr : item.subtextEn,
        ctaText: isAr ? item.ctaTextAr : item.ctaTextEn,
        ctaLink: item.ctaLink || '/contact',
        icon: item.icon || 'fa-laptop-code',
        endDate: item.endDate
      }));
    }

    return isAr ? [
      {
        badge: '🔥 ورشة عمل مباشرة مجانية',
        title: 'ماستركلاس معمارية Angular 18 الحديثة',
        subtext: 'تعلم بناء تطبيقات واعدات احترافية مع كبار مهندسي البرمجيات.',
        ctaText: 'احجز مقعدك الآن',
        ctaLink: '/contact',
        icon: 'fa-laptop-code'
      }
    ] : [
      {
        badge: 'FREE LIVE WORKSHOP',
        title: 'Live Angular 18 Architecture Masterclass',
        subtext: 'Build production-ready apps with Senior Engineers.',
        ctaText: 'Reserve Seat',
        ctaLink: '/contact',
        icon: 'fa-laptop-code'
      }
    ];
  }

  currentOfferIndex = 0;
  isOfferTransitioning = false;
  offerIntervalTimer: any;
  countdownTimerTimer: any;
  isOfferPaused = false;

  countdown = {
    days: 4,
    hours: 12,
    minutes: 36,
    seconds: 45
  };

  ngOnInit(): void {
    this.loadAnnouncementsFromBackend();
    this.startOfferAutoScroll();
    this.startCountdownTicking();
  }

  loadAnnouncementsFromBackend(): void {
    this.announcementService.getAnnouncements().subscribe({
      next: (res) => {
        if (res.success && res.data && res.data.length > 0) {
          this.dbAnnouncements = res.data;
          this.updateCountdownFromActiveOffer();
        }
      },
      error: (err) => console.log('Using default announcements state:', err)
    });
  }

  updateCountdownFromActiveOffer(): void {
    const active = this.offers[this.currentOfferIndex];
    if (active && active.endDate) {
      const end = new Date(active.endDate).getTime();
      const now = new Date().getTime();
      const diff = Math.max(0, end - now);

      this.countdown.days = Math.floor(diff / (1000 * 60 * 60 * 24));
      this.countdown.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.countdown.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      this.countdown.seconds = Math.floor((diff % (1000 * 60)) / 1000);
    }
  }

  ngAfterViewInit(): void {
    if (this.bgVideo && this.bgVideo.nativeElement) {
      const video = this.bgVideo.nativeElement;
      video.muted = true;
      video.play().catch(error => {
        console.log('Autoplay handled by browser fallback:', error);
      });
    }
    this.checkScreenSize();
  }

  ngOnDestroy(): void {
    if (this.offerIntervalTimer) clearInterval(this.offerIntervalTimer);
    if (this.countdownTimerTimer) clearInterval(this.countdownTimerTimer);
  }

  startOfferAutoScroll(): void {
    this.offerIntervalTimer = setInterval(() => {
      if (!this.isOfferPaused && this.offers.length > 1) {
        const nextIndex = (this.currentOfferIndex + 1) % this.offers.length;
        this.changeOffer(nextIndex);
      }
    }, 5000);
  }

  changeOffer(newIndex: number): void {
    if (this.currentOfferIndex === newIndex && !this.isOfferTransitioning) return;
    this.isOfferTransitioning = true;
    
    setTimeout(() => {
      this.currentOfferIndex = newIndex;
      this.updateCountdownFromActiveOffer();
      setTimeout(() => {
        this.isOfferTransitioning = false;
      }, 50);
    }, 180);
  }

  setOfferIndex(index: number): void {
    this.changeOffer(index);
  }

  startCountdownTicking(): void {
    this.countdownTimerTimer = setInterval(() => {
      if (this.countdown.seconds > 0) {
        this.countdown.seconds--;
      } else {
        this.countdown.seconds = 59;
        if (this.countdown.minutes > 0) {
          this.countdown.minutes--;
        } else {
          this.countdown.minutes = 59;
          if (this.countdown.hours > 0) {
            this.countdown.hours--;
          } else {
            this.countdown.hours = 23;
            if (this.countdown.days > 0) {
              this.countdown.days--;
            }
          }
        }
      }
    }, 1000);
  }

  pauseOfferScroll(): void {
    this.isOfferPaused = true;
  }

  resumeOfferScroll(): void {
    this.isOfferPaused = false;
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    this.isDesktop = window.innerWidth > 992;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isDesktop) return;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    this.mouseX = (event.clientX - windowWidth / 2) / (windowWidth / 2);
    this.mouseY = (event.clientY - windowHeight / 2) / (windowHeight / 2);
  }

  getVideoTransform(): string {
    if (!this.isDesktop) return 'none';
    return `scale(1.05) translate3d(${this.mouseX * 4}px, ${this.mouseY * 4}px, 0)`;
  }

  getContentTransform(): string {
    if (!this.isDesktop) return 'none';
    return `translate3d(${this.mouseX * -6}px, ${this.mouseY * -6}px, 0)`;
  }

  formatTwoDigits(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
}
