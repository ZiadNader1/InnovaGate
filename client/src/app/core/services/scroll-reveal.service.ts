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

    try {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        setTimeout(() => {
          this.observeElements();
        }, 120);
      });
    } catch {
      // Router events safeguard
    }

    setTimeout(() => this.observeElements(), 150);
  }

  private setupObserver(): void {
    try {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          try {
            if (entry && entry.isIntersecting && entry.target) {
              entry.target.classList.add('revealed');
              this.observer?.unobserve(entry.target);
            }
          } catch {
            // Absorbed silently
          }
        });
      }, {
        rootMargin: '0px 0px -20px 0px',
        threshold: 0.01
      });
    } catch (err) {
      console.warn('ScrollObserver setup skipped:', err);
    }
  }

  public observeElements(): void {
    if (!this.observer) return;
    try {
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
        if (el && !el.classList.contains('revealed')) {
          this.observer?.observe(el);
        }
      });
    } catch {
      // Catch element query exception
    }
  }
}
