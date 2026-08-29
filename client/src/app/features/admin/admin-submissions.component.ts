import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubmissionService, SubmissionData } from '../../core/services/submission.service';
import { AnnouncementService, AnnouncementItem } from '../../core/services/announcement.service';
import { LanguageService } from '../../core/services/language.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-admin-submissions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-submissions.component.html',
  styleUrls: ['./admin-submissions.component.scss']
})
export class AdminSubmissionsComponent implements OnInit {
  submissionService = inject(SubmissionService);
  announcementService = inject(AnnouncementService);
  langService = inject(LanguageService);
  authService = inject(AuthService);

  activeAdminTab: 'submissions' | 'announcements' = 'submissions';

  // Submissions State
  submissions: SubmissionData[] = [];
  isLoading = true;
  errorMessage = '';
  selectedFilter: 'all' | 'new' | 'contacted' | 'archived' = 'all';
  searchQuery = '';
  selectedSubmission: SubmissionData | null = null;

  // Announcements State
  announcements: AnnouncementItem[] = [];
  showAnnouncementModal = false;
  isSavingAnnouncement = false;
  editingAnnouncement: Partial<AnnouncementItem> = {
    badgeAr: '🔥 ورشة عمل جديدة',
    badgeEn: 'SPECIAL OFFER',
    titleAr: '',
    titleEn: '',
    subtextAr: '',
    subtextEn: '',
    ctaTextAr: 'احجز مقعدك الآن',
    ctaTextEn: 'Reserve Seat',
    ctaLink: '/contact',
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().substring(0, 16),
    icon: 'fa-laptop-code',
    isActive: true
  };

  get isAr(): boolean {
    return this.langService.currentLang() === 'ar';
  }

  ngOnInit(): void {
    this.loadSubmissions();
    this.loadAnnouncements();
  }

  logout(): void {
    this.authService.logout();
  }

  loadSubmissions(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.submissionService.getAllSubmissions().subscribe({
      next: (res) => {
        this.submissions = res.data || [];
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching submissions from backend:', err);
        this.errorMessage = this.isAr 
          ? 'تعذر الاتصال بالسيرفر. تأكد من تشغيل الخادم على المنفذ 5000' 
          : 'Could not connect to Express server on port 5000.';
        this.isLoading = false;
      }
    });
  }

  loadAnnouncements(): void {
    this.announcementService.getAnnouncements(true).subscribe({
      next: (res) => {
        this.announcements = res.data || [];
      },
      error: (err) => console.error('Error fetching announcements:', err)
    });
  }

  get filteredSubmissions(): SubmissionData[] {
    return this.submissions.filter(item => {
      const matchesFilter = this.selectedFilter === 'all' || item.status === this.selectedFilter;
      const query = this.searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        item.fullName.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query) ||
        item.phone.includes(query) ||
        item.diploma.toLowerCase().includes(query) ||
        item.message.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }

  get newCount(): number {
    return this.submissions.filter(s => s.status === 'new').length;
  }

  get contactedCount(): number {
    return this.submissions.filter(s => s.status === 'contacted').length;
  }

  get archivedCount(): number {
    return this.submissions.filter(s => s.status === 'archived').length;
  }

  updateStatus(submission: SubmissionData, newStatus: 'new' | 'contacted' | 'archived', event?: Event): void {
    if (event) event.stopPropagation();
    if (!submission.id) return;

    this.submissionService.updateStatus(submission.id, newStatus).subscribe({
      next: (res) => {
        submission.status = newStatus;
      },
      error: (err) => {
        console.error('Error updating status:', err);
      }
    });
  }

  deleteSubmission(submission: SubmissionData, event?: Event): void {
    if (event) event.stopPropagation();
    if (!submission.id) return;

    const confirmMsg = this.isAr 
      ? `هل أنت أكتد من حذف طلب ${submission.fullName}؟` 
      : `Are you sure you want to delete submission from ${submission.fullName}?`;

    if (confirm(confirmMsg)) {
      this.submissionService.deleteSubmission(submission.id).subscribe({
        next: () => {
          this.submissions = this.submissions.filter(s => s.id !== submission.id);
          if (this.selectedSubmission?.id === submission.id) {
            this.selectedSubmission = null;
          }
        },
        error: (err) => console.error('Error deleting submission:', err)
      });
    }
  }

  viewDetails(submission: SubmissionData): void {
    this.selectedSubmission = submission;
    if (submission.status === 'new' && submission.id) {
      this.updateStatus(submission, 'contacted');
    }
  }

  closeModal(): void {
    this.selectedSubmission = null;
  }

  // ANNOUNCEMENTS MANAGEMENT METHODS
  openNewAnnouncementModal(): void {
    const defaultDate = new Date();
    defaultDate.setDate(defaultDate.getDate() + 7);

    this.editingAnnouncement = {
      badgeAr: '🔥 ورشة عمل جديدة',
      badgeEn: 'SPECIAL OFFER',
      titleAr: '',
      titleEn: '',
      subtextAr: '',
      subtextEn: '',
      ctaTextAr: 'احجز مقعدك الآن',
      ctaTextEn: 'Reserve Seat',
      ctaLink: '/contact',
      endDate: defaultDate.toISOString().substring(0, 16),
      icon: 'fa-laptop-code',
      isActive: true
    };
    this.showAnnouncementModal = true;
  }

  openEditAnnouncementModal(item: AnnouncementItem): void {
    this.editingAnnouncement = {
      ...item,
      endDate: item.endDate ? new Date(item.endDate).toISOString().substring(0, 16) : new Date().toISOString().substring(0, 16)
    };
    this.showAnnouncementModal = true;
  }

  closeAnnouncementModal(): void {
    this.showAnnouncementModal = false;
  }

  saveAnnouncement(): void {
    if (!this.editingAnnouncement.titleAr || !this.editingAnnouncement.titleEn) {
      alert(this.isAr ? 'الرجاء كتابة العنوان بالعربية والإنجليزية' : 'Please enter title in Arabic and English');
      return;
    }

    this.isSavingAnnouncement = true;

    if (this.editingAnnouncement.id) {
      // Update existing
      this.announcementService.updateAnnouncement(this.editingAnnouncement.id, this.editingAnnouncement).subscribe({
        next: () => {
          this.isSavingAnnouncement = false;
          this.showAnnouncementModal = false;
          this.loadAnnouncements();
        },
        error: (err) => {
          this.isSavingAnnouncement = false;
          console.error('Error updating announcement:', err);
        }
      });
    } else {
      // Create new
      this.announcementService.createAnnouncement(this.editingAnnouncement).subscribe({
        next: () => {
          this.isSavingAnnouncement = false;
          this.showAnnouncementModal = false;
          this.loadAnnouncements();
        },
        error: (err) => {
          this.isSavingAnnouncement = false;
          console.error('Error creating announcement:', err);
        }
      });
    }
  }

  toggleAnnouncementStatus(item: AnnouncementItem): void {
    if (!item.id) return;
    const newStatus = !item.isActive;
    this.announcementService.updateAnnouncement(item.id, { isActive: newStatus }).subscribe({
      next: () => item.isActive = newStatus,
      error: (err) => console.error('Error toggling status:', err)
    });
  }

  deleteAnnouncement(item: AnnouncementItem): void {
    if (!item.id) return;
    const confirmMsg = this.isAr ? `هل أنت أكتد من حذف الإعلان "${item.titleAr}"؟` : `Delete announcement "${item.titleEn}"?`;
    if (confirm(confirmMsg)) {
      this.announcementService.deleteAnnouncement(item.id).subscribe({
        next: () => {
          this.announcements = this.announcements.filter(a => a.id !== item.id);
        },
        error: (err) => console.error('Error deleting announcement:', err)
      });
    }
  }

  formatDate(dateStr?: string): string {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleString(this.isAr ? 'ar-EG' : 'en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
}
