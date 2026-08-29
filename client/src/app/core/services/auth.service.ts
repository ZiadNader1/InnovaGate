import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface UserSession {
  email: string;
  role: 'admin';
  name: string;
}

export interface AuthResponse {
  success: boolean;
  message?: string;
  data: {
    token: string;
    user: UserSession;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = `${environment.apiUrl}/auth`;

  currentUser = signal<UserSession | null>(this.getStoredUser());
  token = signal<string | null>(localStorage.getItem('innovagate_admin_token'));

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((res) => {
        if (res.success && res.data) {
          localStorage.setItem('innovagate_admin_token', res.data.token);
          localStorage.setItem('innovagate_admin_user', JSON.stringify(res.data.user));
          this.token.set(res.data.token);
          this.currentUser.set(res.data.user);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('innovagate_admin_token');
    localStorage.removeItem('innovagate_admin_user');
    this.token.set(null);
    this.currentUser.set(null);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!this.token() || !!localStorage.getItem('innovagate_admin_token');
  }

  private getStoredUser(): UserSession | null {
    try {
      const stored = localStorage.getItem('innovagate_admin_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  }
}
