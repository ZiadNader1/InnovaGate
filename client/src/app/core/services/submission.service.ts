import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SubmissionData {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  diploma: string;
  message: string;
  status?: 'new' | 'contacted' | 'archived';
  createdAt?: string;
}

export interface SubmissionApiResponse {
  success: boolean;
  message?: string;
  count?: number;
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:5000/api/submissions';

  submitForm(data: SubmissionData): Observable<SubmissionApiResponse> {
    return this.http.post<SubmissionApiResponse>(this.apiUrl, data);
  }

  getAllSubmissions(): Observable<{ success: boolean; count: number; data: SubmissionData[] }> {
    return this.http.get<{ success: boolean; count: number; data: SubmissionData[] }>(this.apiUrl);
  }

  updateStatus(id: string, status: 'new' | 'contacted' | 'archived'): Observable<SubmissionApiResponse> {
    return this.http.patch<SubmissionApiResponse>(`${this.apiUrl}/${id}/status`, { status });
  }

  deleteSubmission(id: string): Observable<SubmissionApiResponse> {
    return this.http.delete<SubmissionApiResponse>(`${this.apiUrl}/${id}`);
  }
}
