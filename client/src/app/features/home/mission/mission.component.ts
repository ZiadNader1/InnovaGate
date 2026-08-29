import { Component, HostListener, ElementRef, ViewChild, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../core/services/language.service';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  baseAlpha: number;
  color: string;
}

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements AfterViewInit, OnDestroy {
  @ViewChild('missionSection') missionSection!: ElementRef<HTMLElement>;
  @ViewChild('particleCanvas') particleCanvas!: ElementRef<HTMLCanvasElement>;
  langService = inject(LanguageService);

  scrollProgress = 0;
  activeNode = 'Damanhour';

  get isAr(): boolean {
    return this.langService.currentLang() === 'ar';
  }

  // Canvas & Particles State
  private ctx!: CanvasRenderingContext2D | null;
  private particles: Particle[] = [];
  private animFrameId: number | null = null;
  private mousePos = { x: -1000, y: -1000 };

  ngAfterViewInit(): void {
    this.initParticleCanvas();
    this.calculateScrollProgress();
  }

  ngOnDestroy(): void {
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
    }
  }

  // --- Interactive Canvas Particle System ---
  private initParticleCanvas(): void {
    if (!this.particleCanvas || !this.particleCanvas.nativeElement) return;
    const canvas = this.particleCanvas.nativeElement;
    this.ctx = canvas.getContext('2d');

    this.resizeCanvas();
    this.createParticles();
    this.animateParticles();
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.resizeCanvas();
    this.calculateScrollProgress();
  }

  private resizeCanvas(): void {
    if (!this.particleCanvas || !this.particleCanvas.nativeElement) return;
    const canvas = this.particleCanvas.nativeElement;
    const rect = this.missionSection.nativeElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }

  private createParticles(): void {
    if (!this.particleCanvas || !this.particleCanvas.nativeElement) return;
    const width = this.particleCanvas.nativeElement.width;
    const height = this.particleCanvas.nativeElement.height;

    const count = Math.min(65, Math.floor((width * height) / 16000));
    this.particles = [];

    const colors = ['#38bdf8', '#1769ff', '#60a5fa', '#93c5fd'];

    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 2 + 1;
      const baseAlpha = Math.random() * 0.45 + 0.2;
      this.particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius,
        alpha: baseAlpha,
        baseAlpha,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.missionSection || !this.missionSection.nativeElement) return;
    const rect = this.missionSection.nativeElement.getBoundingClientRect();
    this.mousePos = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }

  @HostListener('mouseleave', [])
  onMouseLeave(): void {
    this.mousePos = { x: -1000, y: -1000 };
  }

  private animateParticles = (): void => {
    if (!this.ctx || !this.particleCanvas || !this.particleCanvas.nativeElement) return;

    const canvas = this.particleCanvas.nativeElement;
    const width = canvas.width;
    const height = canvas.height;

    this.ctx.clearRect(0, 0, width, height);

    // Update and draw particles
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      // Move particle
      p.x += p.vx;
      p.y += p.vy;

      // Bounce off boundaries
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Mouse Interaction Force
      const dx = this.mousePos.x - p.x;
      const dy = this.mousePos.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxMouseDist = 160;

      if (dist < maxMouseDist) {
        const force = (maxMouseDist - dist) / maxMouseDist;
        const angle = Math.atan2(dy, dx);
        p.x -= Math.cos(angle) * force * 3;
        p.y -= Math.sin(angle) * force * 3;
        p.alpha = Math.min(0.9, p.baseAlpha + force * 0.5);
      } else {
        p.alpha += (p.baseAlpha - p.alpha) * 0.05;
      }

      // Draw particle dot
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.alpha;
      this.ctx.shadowBlur = 8;
      this.ctx.shadowColor = p.color;
      this.ctx.fill();

      // Connect near particles with delicate blue lines
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const pdx = p.x - p2.x;
        const pdy = p.y - p2.y;
        const pdist = Math.sqrt(pdx * pdx + pdy * pdy);
        const maxConnectDist = 110;

        if (pdist < maxConnectDist) {
          const lineAlpha = (1 - pdist / maxConnectDist) * 0.18;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = '#38bdf8';
          this.ctx.globalAlpha = lineAlpha;
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      }
    }

    this.animFrameId = requestAnimationFrame(this.animateParticles);
  };

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.calculateScrollProgress();
  }

  private calculateScrollProgress(): void {
    if (!this.missionSection || !this.missionSection.nativeElement) return;

    const rect = this.missionSection.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = rect.height;

    const startScroll = windowHeight * 0.85;
    const endScroll = -sectionHeight * 0.3;
    
    let progress = (startScroll - rect.top) / (startScroll - endScroll);
    progress = Math.max(0, Math.min(1, progress));

    this.scrollProgress = progress;
  }

  selectNode(city: string): void {
    this.activeNode = city;
  }
}
