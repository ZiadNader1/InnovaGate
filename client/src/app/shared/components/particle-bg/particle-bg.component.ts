import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  color: string;
}

@Component({
  selector: 'app-particle-bg',
  standalone: true,
  imports: [CommonModule],
  template: `<canvas #particleCanvas class="global-particle-canvas"></canvas>`,
  styles: [`
    .global-particle-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none !important;
      z-index: 0;
      opacity: 0.75;
    }
  `]
})
export class ParticleBgComponent implements AfterViewInit, OnDestroy {
  @ViewChild('particleCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D | null;
  private particles: Particle[] = [];
  private animId: number | null = null;
  private isMobile = false;

  private mouseX = -1000;
  private mouseY = -1000;
  private maxDistance = 140;

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');

    this.checkMobile();
    this.resizeCanvas();
    this.initParticles();
    this.animate();
  }

  ngOnDestroy(): void {
    if (this.animId !== null) {
      cancelAnimationFrame(this.animId);
    }
  }

  private checkMobile(): void {
    this.isMobile = window.innerWidth < 768;
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkMobile();
    this.resizeCanvas();
    this.initParticles();
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    if (this.isMobile) return;
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }

  private resizeCanvas(): void {
    if (!this.canvasRef) return;
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private initParticles(): void {
    if (!this.canvasRef) return;
    const canvas = this.canvasRef.nativeElement;
    this.particles = [];

    // Particle density: Max 15 on mobile for 120 FPS performance, max 80 on desktop
    const maxParticles = this.isMobile ? 15 : 75;
    const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), maxParticles);
    const colors = ['#1769FF', '#38BDF8', '#60A5FA', '#93C5FD', '#FFFFFF'];

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 2 + 1;
      const baseAlpha = Math.random() * 0.4 + 0.3;
      this.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (this.isMobile ? 0.4 : 0.6),
        vy: (Math.random() - 0.5) * (this.isMobile ? 0.4 : 0.6),
        radius,
        baseAlpha,
        alpha: baseAlpha,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }

  private animate = (): void => {
    if (!this.ctx || !this.canvasRef) return;
    const canvas = this.canvasRef.nativeElement;

    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      // Mouse interaction on desktop
      if (!this.isMobile && this.mouseX > 0) {
        const dx = p.x - this.mouseX;
        const dy = p.y - this.mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.maxDistance) {
          const force = (this.maxDistance - dist) / this.maxDistance;
          p.x += (dx / dist) * force * 2;
          p.y += (dy / dist) * force * 2;
        }
      }

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fill();
    }

    // Connect close particles (Desktop only for max mobile performance)
    if (!this.isMobile) {
      for (let i = 0; i < this.particles.length; i++) {
        for (let j = i + 1; j < this.particles.length; j++) {
          const p1 = this.particles[i];
          const p2 = this.particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            this.ctx.beginPath();
            this.ctx.moveTo(p1.x, p1.y);
            this.ctx.lineTo(p2.x, p2.y);
            this.ctx.strokeStyle = '#38bdf8';
            this.ctx.globalAlpha = (1 - dist / 100) * 0.15;
            this.ctx.lineWidth = 0.6;
            this.ctx.stroke();
          }
        }
      }
    }

    this.ctx.globalAlpha = 1;
    this.animId = requestAnimationFrame(this.animate);
  };
}
