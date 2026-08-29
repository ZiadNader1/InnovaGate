import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { ParticleBgComponent } from '../../shared/components/particle-bg/particle-bg.component';
import { PRO_COURSES_DATA, ProCourseDetails, SyllabusModule } from '../../core/models/pro-courses.data';
import { KIDS_COURSES_DATA } from '../../core/models/kids-courses.data';

export type ProSubCategory = 'frontend' | 'backend' | 'mobile' | 'data' | 'fundamentals' | 'uiux';
export type KidsAgeSubCategory = '6-8' | '9-11' | '12-14' | '15-17';

export interface CourseItem {
  id: string;
  code?: string;
  category: 'kids' | 'pro';
  subCategory?: ProSubCategory;
  kidsAgeCategory?: KidsAgeSubCategory;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  durationEn: string;
  durationAr: string;
  sessionsCount?: number;
  weeksCount?: number;
  priceEgp?: number;
  prerequisiteEn?: string;
  prerequisiteAr?: string;
  levelEn: string;
  levelAr: string;
  ageBadgeEn: string;
  ageBadgeAr: string;
  topics: string[];
  projectsEn?: string[];
  projectsAr?: string[];
  detailedContentEn?: string[];
  detailedContentAr?: string[];
  syllabusModulesEn?: SyllabusModule[];
  completionStandardEn?: string;
  completionStandardAr?: string;
}

export interface FilterTabOption {
  id: string;
  labelEn: string;
  labelAr: string;
  icon: string;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, RouterLink, ParticleBgComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  langService = inject(LanguageService);
  activeTrack: 'kids' | 'pro' | null = null;
  selectedProFilter: 'all' | ProSubCategory = 'all';
  selectedKidsAgeFilter: 'all' | KidsAgeSubCategory = 'all';

  expandedCourseId: string | null = null;
  selectedModalCourse: CourseItem | null = null;

  kidsAgeFilterTabs: FilterTabOption[] = [
    { id: 'all', labelEn: 'All Age Tracks (6–17)', labelAr: 'جميع المراحل العمرية (6–17)', icon: 'fa-solid fa-shapes' },
    { id: '6-8', labelEn: 'Explorer Track (6–8)', labelAr: 'مسار المكتشف (6–8 سنوات)', icon: 'fa-solid fa-child' },
    { id: '9-11', labelEn: 'Creator Track (9–11)', labelAr: 'مسار المبدع (9–11 سنة)', icon: 'fa-solid fa-puzzle-piece' },
    { id: '12-14', labelEn: 'Builder Track (12–14)', labelAr: 'مسار الباني (12–14 سنة)', icon: 'fa-solid fa-laptop-code' },
    { id: '15-17', labelEn: 'Young Dev Track (15–17)', labelAr: 'مسار الشباب (15–17 سنة)', icon: 'fa-solid fa-code' }
  ];

  proFilterTabs: FilterTabOption[] = [
    { id: 'all', labelEn: 'All Specializations (27 Courses)', labelAr: 'جميع التخصصات (27 كورساً)', icon: 'fa-solid fa-layer-group' },
    { id: 'frontend', labelEn: 'Front-End (6 Courses)', labelAr: 'فرونت إند (6 كورس)', icon: 'fa-solid fa-code' },
    { id: 'backend', labelEn: 'Back-End (6 Courses)', labelAr: 'باك إند (6 كورس)', icon: 'fa-solid fa-server' },
    { id: 'mobile', labelEn: 'Mobile Dev (6 Courses)', labelAr: 'تطوير المحمول (6 كورس)', icon: 'fa-solid fa-mobile-screen-button' },
    { id: 'data', labelEn: 'Data Analysis (5 Courses)', labelAr: 'تحليل البيانات (5 كورس)', icon: 'fa-solid fa-chart-pie' },
    { id: 'uiux', labelEn: 'UI / UX Design (4 Courses)', labelAr: 'تصميم الواجهات (4 كورس)', icon: 'fa-solid fa-pen-ruler' }
  ];

  kidsCourses: CourseItem[] = KIDS_COURSES_DATA;

  proCoursesList: CourseItem[] = PRO_COURSES_DATA.map((c: ProCourseDetails): CourseItem => ({
    id: c.id,
    code: c.code,
    category: 'pro',
    subCategory: c.subCategory,
    titleEn: c.titleEn,
    titleAr: c.titleAr,
    descEn: c.descEn,
    descAr: c.descAr,
    durationEn: c.durationEn,
    durationAr: c.durationAr,
    sessionsCount: c.sessionsCount,
    weeksCount: c.weeksCount,
    priceEgp: c.priceEgp,
    prerequisiteEn: c.prerequisiteEn,
    prerequisiteAr: c.prerequisiteAr,
    levelEn: c.levelEn,
    levelAr: c.levelAr,
    ageBadgeEn: c.ageBadgeEn,
    ageBadgeAr: c.ageBadgeAr,
    topics: c.topics,
    projectsEn: c.projectsEn,
    projectsAr: c.projectsAr,
    detailedContentEn: c.detailedContentEn,
    detailedContentAr: c.detailedContentAr,
    syllabusModulesEn: c.syllabusModulesEn,
    completionStandardEn: c.completionStandardEn,
    completionStandardAr: c.completionStandardAr
  }));

  get filteredCourses(): CourseItem[] {
    if (!this.activeTrack) {
      return [];
    }

    if (this.activeTrack === 'kids') {
      return this.kidsCourses.filter(c => {
        if (this.selectedKidsAgeFilter === 'all') return true;
        return c.kidsAgeCategory === this.selectedKidsAgeFilter;
      });
    }
    
    return this.proCoursesList.filter(c => {
      if (this.selectedProFilter === 'all') return true;
      return c.subCategory === this.selectedProFilter;
    });
  }

  trackByCourseId(index: number, course: CourseItem): string {
    return course.id;
  }

  selectTrack(track: 'kids' | 'pro', event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.activeTrack = track;
    if (track === 'pro') {
      this.selectedProFilter = 'all';
    } else {
      this.selectedKidsAgeFilter = 'all';
    }

    setTimeout(() => {
      const catalogElement = document.getElementById('course-catalog');
      if (catalogElement) {
        catalogElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  }

  setProFilter(filterId: string): void {
    this.selectedProFilter = filterId as any;
  }

  setKidsAgeFilter(ageFilterId: string): void {
    this.selectedKidsAgeFilter = ageFilterId as any;
  }

  toggleCourseDetails(courseId: string, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.expandedCourseId = this.expandedCourseId === courseId ? null : courseId;
  }

  openCourseModal(course: CourseItem, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.selectedModalCourse = course;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  closeCourseModal(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.selectedModalCourse = null;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
}
