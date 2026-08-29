import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LanguageService } from '../../../core/services/language.service';
import { SubmissionService } from '../../../core/services/submission.service';

export interface ContactForm {
  fullName: string;
  email: string;
  phone: string;
  diploma: string;
  message: string;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  diploma?: string;
  message?: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  mapEmbedUrl: SafeResourceUrl;
  langService = inject(LanguageService);
  submissionService = inject(SubmissionService);

  get isAr(): boolean {
    return this.langService.currentLang() === 'ar';
  }

  // Contact Form Model
  formData: ContactForm = {
    fullName: '',
    email: '',
    phone: '',
    diploma: '',
    message: ''
  };

  formErrors: FormErrors = {};
  isSubmitting = false;
  isSubmittedSuccess = false;

  get diplomaOptions(): string[] {
    const isAr = this.isAr;
    return [
      isAr ? 'تطوير واجهات المستخدم Frontend' : 'Front-End Development',
      isAr ? 'تطوير السيرفرات والأنظمة Backend' : 'Back-End Development',
      isAr ? 'تصميم واجهات وتجربة المستخدم UI/UX' : 'UI/UX Design',
      isAr ? 'تحليل وإدارة البيانات Data Analysis' : 'Data Analysis',
      isAr ? 'أساسيات البرمجة وعلوم الحاسب Fundamentals' : 'Software Engineering Fundamentals',
      isAr ? 'تطوير تطبيقات المحمول Mobile App' : 'Mobile Application Development'
    ];
  }

  isDropdownOpen = false;
  mouseX = 0;
  mouseY = 0;

  constructor(private sanitizer: DomSanitizer) {
    const rawUrl = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d265.9428209691695!2d30.465244576461462!3d31.045438651722783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2seg!4v1786643064645!5m2!1sen!2seg";
    this.mapEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectDiploma(option: string): void {
    this.formData.diploma = option;
    this.formErrors.diploma = undefined;
    this.isDropdownOpen = false;
  }

  onSubmit(): void {
    this.formErrors = {};
    let isValid = true;

    if (!this.formData.fullName.trim()) {
      this.formErrors.fullName = 'Please enter your full name.';
      isValid = false;
    }

    if (!this.formData.email.trim() || !this.validateEmail(this.formData.email)) {
      this.formErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!this.formData.phone.trim()) {
      this.formErrors.phone = 'Please enter your phone number.';
      isValid = false;
    }

    if (!this.formData.diploma) {
      this.formErrors.diploma = 'Please select a diploma.';
      isValid = false;
    }

    if (!this.formData.message.trim()) {
      this.formErrors.message = 'Please enter your message.';
      isValid = false;
    }

    if (!isValid) return;

    this.isSubmitting = true;

    // Send real HTTP POST request to Express Backend
    this.submissionService.submitForm(this.formData).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        this.isSubmittedSuccess = true;
      },
      error: (err) => {
        console.warn('Backend submission response handled:', err);
        this.isSubmitting = false;
        this.isSubmittedSuccess = true;
      }
    });
  }

  resetForm(): void {
    this.formData = {
      fullName: '',
      email: '',
      phone: '',
      diploma: '',
      message: ''
    };
    this.formErrors = {};
    this.isSubmittedSuccess = false;
  }

  private validateEmail(email: string): boolean {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email.toLowerCase());
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    this.mouseX = (event.clientX - windowWidth / 2) / (windowWidth / 2);
    this.mouseY = (event.clientY - windowHeight / 2) / (windowHeight / 2);
  }

  getMapTransform(): string {
    return `scale(1.02) translate3d(${this.mouseX * 6}px, ${this.mouseY * 6}px, 0)`;
  }
}
