import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';
import { ParticleBgComponent } from '../../../shared/components/particle-bg/particle-bg.component';
import { Diploma, DIPLOMAS_DATA } from '../../../core/models/diploma.model';

@Component({
  selector: 'app-diploma-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, ParticleBgComponent],
  templateUrl: './diploma-detail.component.html',
  styleUrl: './diploma-detail.component.scss'
})
export class DiplomaDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  langService = inject(LanguageService);

  diploma: Diploma | null = null;
  activeModuleNumber: number = 1;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const diplomaId = params.get('id');
      if (diplomaId) {
        const found = DIPLOMAS_DATA.find(d => d.id === diplomaId);
        if (found) {
          this.diploma = found;
        } else {
          this.router.navigate(['/diplomas']);
        }
      } else {
        this.router.navigate(['/diplomas']);
      }
    });
  }

  setActiveModule(num: number): void {
    if (this.activeModuleNumber === num) {
      this.activeModuleNumber = 0;
    } else {
      this.activeModuleNumber = num;
    }
  }
}
