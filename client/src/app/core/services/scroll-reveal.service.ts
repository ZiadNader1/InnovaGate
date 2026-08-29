import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollRevealService {
  private observer: IntersectionObserver | null = null;
  private router = inject(Router);

  init(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    this.setupObserver();

    // Re-observe elements on route navigation
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      setTimeout(() => {
        this.observeElements();
      }, 120);
    });

    // Initial observation after view render
    setTimeout(() => this.observeElements(), 150);
  }

  private setupObserver(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Unobserve after reveal to free GPU/CPU observer overhead
          this.observer?.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.08
    });
  }

  public observeElements(): void {
    if (!this.observer) return;
    const selectors = [
      '[data-reveal]',
      '.reveal-on-scroll',
      '.feature-card',
      '.course-card',
      '.diploma-card',
      '.mentor-card',
      '.contact-info-card',
      '.faq-item',
      '.stat-card'
    ];
    
    const elements = document.querySelectorAll(selectors.join(','));
    elements.forEach(el => {
      if (!el.classList.contains('revealed')) {
        this.observer?.observe(el);
      }
    });
  }
}
