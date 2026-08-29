import { Component, inject, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from '../../core/services/language.service';
import { ParticleBgComponent } from '../../shared/components/particle-bg/particle-bg.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ParticleBgComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy {
  langService = inject(LanguageService);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  @ViewChild('statsContainer') statsContainer!: ElementRef;

  // Counter states for animated stats
  counters = [0, 0, 0];
  targetValues = [200, 50, 35];
  hasAnimatedCounters = false;
  private observer?: IntersectionObserver;

  // Accordion state for Methodology steps (expanded step index)
  activeStepIndex: number | null = null;

  toggleStep(index: number): void {
    if (this.activeStepIndex === index) {
      this.activeStepIndex = null; // Close if opened
    } else {
      this.activeStepIndex = index; // Open clicked step
    }
  }

  ngOnInit(): void {
    const isAr = this.langService.currentLang() === 'ar';
    const pageTitle = isAr ? 'عن الأكاديمية | أكاديمية Innova Gate' : 'About Us | Innova Gate Academy';
    const metaDesc = isAr
      ? 'عن أكاديمية Innova Gate لتكنولوجيا التعليم والبرمجة. اكتشف قصتنا، رسالتنا، قيادتنا، ورؤيتنا لتأهيل أجيال المستقبل.'
      : 'Learn about Innova Gate Academy, our founder, mission, practical learning approach, and vision for tech education.';

    this.titleService.setTitle(pageTitle);
    this.metaService.updateTag({ name: 'description', content: metaDesc });
  }

  ngAfterViewInit(): void {
    this.initObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private initObserver(): void {
    if (typeof IntersectionObserver !== 'undefined' && this.statsContainer) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.hasAnimatedCounters) {
            this.startCountersAnimation();
            this.hasAnimatedCounters = true;
          }
        });
      }, { threshold: 0.2 });

      this.observer.observe(this.statsContainer.nativeElement);
    } else {
      // Fallback
      this.counters = [...this.targetValues];
    }
  }

  private startCountersAnimation(): void {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      this.counters = this.targetValues.map(target => Math.min(Math.floor(target * progress), target));

      if (step >= steps) {
        this.counters = [...this.targetValues];
        clearInterval(timer);
      }
    }, interval);
  }

  scrollToSection(sectionId: string, event?: Event): void {
    if (event) event.preventDefault();
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
