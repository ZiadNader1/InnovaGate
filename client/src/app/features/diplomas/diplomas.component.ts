import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { ParticleBgComponent } from '../../shared/components/particle-bg/particle-bg.component';
import { Diploma, DIPLOMAS_DATA } from '../../core/models/diploma.model';

export interface DiplomaFilterOption {
  id: string;
  labelKey: string;
  icon: string;
}

@Component({
  selector: 'app-diplomas',
  standalone: true,
  imports: [CommonModule, RouterLink, ParticleBgComponent],
  templateUrl: './diplomas.component.html',
  styleUrl: './diplomas.component.scss'
})
export class DiplomasComponent {
  langService = inject(LanguageService);
  diplomas: Diploma[] = DIPLOMAS_DATA;
  selectedFilter: string = 'all';
  activeFaqIndex: number | null = 0; // First question open by default

  filterOptions: DiplomaFilterOption[] = [
    { id: 'all', labelKey: 'filterAll', icon: 'fa-solid fa-layer-group' },
    { id: 'software', labelKey: 'filterSoftware', icon: 'fa-solid fa-code' },
    { id: 'data', labelKey: 'filterData', icon: 'fa-solid fa-chart-pie' },
    { id: 'design', labelKey: 'filterDesign', icon: 'fa-solid fa-pen-ruler' },
    { id: 'cyber', labelKey: 'filterCyber', icon: 'fa-solid fa-shield-halved' },
    { id: 'mobile', labelKey: 'filterMobile', icon: 'fa-solid fa-mobile-screen-button' }
  ];

  get filteredDiplomas(): Diploma[] {
    if (this.selectedFilter === 'all') {
      return this.diplomas;
    }
    return this.diplomas.filter(d => d.category === this.selectedFilter);
  }

  setFilter(filterId: string): void {
    this.selectedFilter = filterId;
  }

  toggleFaq(index: number): void {
    if (this.activeFaqIndex === index) {
      this.activeFaqIndex = null;
    } else {
      this.activeFaqIndex = index;
    }
  }

  scrollToCatalog(event?: Event): void {
    if (event) event.preventDefault();
    const catalogElem = document.getElementById('diploma-catalog');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
