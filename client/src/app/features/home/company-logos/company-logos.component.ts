import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../core/services/language.service';

export interface CompanyLogo {
  name: string;
  iconClass: string;
  tag: string;
}

@Component({
  selector: 'app-company-logos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-logos.component.html',
  styleUrls: ['./company-logos.component.scss']
})
export class CompanyLogosComponent {
  langService = inject(LanguageService);

  get isAr(): boolean {
    return this.langService.currentLang() === 'ar';
  }

  // Leading tech companies where mentors have worked
  get companies(): CompanyLogo[] {
    const isAr = this.isAr;
    return [
      { name: 'Google', iconClass: 'fa-brands fa-google', tag: isAr ? 'هندسة البرمجيات' : 'Engineering' },
      { name: 'Microsoft', iconClass: 'fa-brands fa-microsoft', tag: isAr ? 'الأنظمة السحابية' : 'Cloud Systems' },
      { name: 'Amazon', iconClass: 'fa-brands fa-amazon', tag: isAr ? 'معمارية AWS' : 'AWS Architecture' },
      { name: 'IBM', iconClass: 'fa-brands fa-ibm', tag: isAr ? 'علوم البيانات' : 'Data Science' },
      { name: 'Meta', iconClass: 'fa-brands fa-meta', tag: isAr ? 'تطوير الواجهات' : 'Frontend Systems' },
      { name: 'Cisco', iconClass: 'fa-solid fa-network-wired', tag: isAr ? 'الأمن السيبراني' : 'Cybersecurity' },
      { name: 'Oracle', iconClass: 'fa-solid fa-database', tag: isAr ? 'قواعد البيانات' : 'Database Engines' },
      { name: 'Spotify', iconClass: 'fa-brands fa-spotify', tag: isAr ? 'تصميم المنتجات' : 'Product Design' },
      { name: 'Uber', iconClass: 'fa-brands fa-uber', tag: isAr ? 'الأنظمة الموزعة' : 'Microservices' },
      { name: 'Vodafone', iconClass: 'fa-solid fa-tower-cell', tag: isAr ? 'حماية الشبكات' : 'Network Security' }
    ];
  }
}
