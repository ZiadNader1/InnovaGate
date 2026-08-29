import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LanguageService } from '../../core/services/language.service';
import { SubmissionService } from '../../core/services/submission.service';
import { ParticleBgComponent } from '../../shared/components/particle-bg/particle-bg.component';

export interface ContactFormModel {
  fullName: string;
  email: string;
  phone: string;
  interestedIn: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ParticleBgComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactPageComponent {
  langService = inject(LanguageService);
  submissionService = inject(SubmissionService);
  sanitizer = inject(DomSanitizer);

  mapEmbedUrl: SafeResourceUrl;

  formData: ContactFormModel = {
    fullName: '',
    email: '',
    phone: '',
    interestedIn: '',
    subject: '',
    message: ''
  };

  formErrors = {
    fullName: '',
    email: '',
    phone: '',
    message: ''
  };

  isSubmitting = false;
  isSubmittedSuccess = false;
  isDropdownOpen = false;
  activeFaqIndex: number | null = 0;

  constructor() {
    const rawUrl = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d265.9428209691695!2d30.465244576461462!3d31.045438651722783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2seg!4v1786643064645!5m2!1sen!2seg";
    this.mapEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectTrack(track: string): void {
    this.formData.interestedIn = track;
    this.isDropdownOpen = false;
  }

  selectOption(opt: string): void {
    this.formData.interestedIn = opt;
    this.isDropdownOpen = false;
  }

  toggleFaq(index: number): void {
    if (this.activeFaqIndex === index) {
      this.activeFaqIndex = null;
    } else {
      this.activeFaqIndex = index;
    }
  }

  get trackOptions(): string[] {
    const isAr = this.langService.currentLang() === 'ar';
    return [
      isAr ? 'تطوير واجهات المستخدم Front-End' : 'Front-End Development',
      isAr ? 'تطوير الخوادم والأنظمة Back-End' : 'Back-End Engineering',
      isAr ? 'تصميم واجهات وتجربة المستخدم UI/UX' : 'UI/UX Product Design',
      isAr ? 'تحليل وإدارة البيانات Data Analysis' : 'Data Analysis & AI',
      isAr ? 'أساسيات البرمجة وعلوم الحاسب Fundamentals' : 'Software Engineering Fundamentals',
      isAr ? 'تطوير تطبيقات المحمول Mobile App' : 'Mobile Application Development'
    ];
  }

  scrollToForm(event?: Event): void {
    if (event) event.preventDefault();
    const formElem = document.getElementById('contact-form-section');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  validateForm(): boolean {
    const isAr = this.langService.currentLang() === 'ar';
    let isValid = true;
    this.formErrors = { fullName: '', email: '', phone: '', message: '' };

    if (!this.formData.fullName.trim()) {
      this.formErrors.fullName = isAr ? 'الرجاء أدخل الاسم بالكامل' : 'Please enter your full name';
      isValid = false;
    }

    if (!this.formData.email.trim()) {
      this.formErrors.email = isAr ? 'الرجاء أدخل البريد الإلكتروني' : 'Please enter your email address';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email)) {
      this.formErrors.email = isAr ? 'البريد الإلكتروني غير صحيح' : 'Invalid email address';
      isValid = false;
    }

    if (!this.formData.phone.trim()) {
      this.formErrors.phone = isAr ? 'الرجاء أدخل رقم الهاتف' : 'Please enter your phone number';
      isValid = false;
    }

    if (!this.formData.message.trim()) {
      this.formErrors.message = isAr ? 'الرجاء أدخل تفاصيل الاستفسار' : 'Please enter your message';
      isValid = false;
    }

    return isValid;
  }

  onSubmit(): void {
    if (!this.validateForm()) {
      return;
    }

    this.isSubmitting = true;

    const payload = {
      fullName: this.formData.fullName,
      email: this.formData.email,
      phone: this.formData.phone,
      diploma: this.formData.interestedIn || 'General Inquiry',
      message: this.formData.message
    };

    this.submissionService.submitForm(payload).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        this.isSubmittedSuccess = true;
      },
      error: (err) => {
        console.warn('Standalone contact submission response handled:', err);
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
      interestedIn: '',
      subject: '',
      message: ''
    };
    this.formErrors = { fullName: '', email: '', phone: '', message: '' };
    this.isSubmittedSuccess = false;
  }
}
