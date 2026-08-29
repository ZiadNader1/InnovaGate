import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AnnouncementItem {
  id?: string;
  badgeAr: string;
  badgeEn: string;
  titleAr: string;
  titleEn: string;
  subtextAr: string;
  subtextEn: string;
  ctaTextAr: string;
  ctaTextEn: string;
  ctaLink: string;
  endDate: string;
  icon: string;
  isActive: boolean;
  createdAt?: string;
}

export interface AnnouncementApiResponse {
  success: boolean;
  message?: string;
  count?: number;
  data: AnnouncementItem | AnnouncementItem[];
}

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5000/api/announcements';

  getAnnouncements(all = false): Observable<{ success: boolean; count: number; data: AnnouncementItem[] }> {
    const url = all ? `${this.apiUrl}?all=true` : this.apiUrl;
    return this.http.get<{ success: boolean; count: number; data: AnnouncementItem[] }>(url);
  }

  createAnnouncement(data: Partial<AnnouncementItem>): Observable<AnnouncementApiResponse> {
    return this.http.post<AnnouncementApiResponse>(this.apiUrl, data);
  }

  updateAnnouncement(id: string, data: Partial<AnnouncementItem>): Observable<AnnouncementApiResponse> {
    return this.http.put<AnnouncementApiResponse>(`${this.apiUrl}/${id}`, data);
  }

  deleteAnnouncement(id: string): Observable<AnnouncementApiResponse> {
    return this.http.delete<AnnouncementApiResponse>(`${this.apiUrl}/${id}`);
  }
}
