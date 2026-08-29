import { Routes } from '@angular/router';
import { adminAuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'courses',
    loadComponent: () => import('./features/courses/courses.component').then(m => m.CoursesComponent)
  },
  {
    path: 'diplomas',
    loadComponent: () => import('./features/diplomas/diplomas.component').then(m => m.DiplomasComponent)
  },
  {
    path: 'diplomas/:id',
    loadComponent: () => import('./features/diplomas/diploma-detail/diploma-detail.component').then(m => m.DiplomaDetailComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactPageComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./features/admin/login/admin-login.component').then(m => m.AdminLoginComponent)
  },
  {
    path: 'admin',
    canActivate: [adminAuthGuard],
    loadComponent: () => import('./features/admin/admin-submissions.component').then(m => m.AdminSubmissionsComponent)
  },
  {
    path: 'admin/submissions',
    canActivate: [adminAuthGuard],
    loadComponent: () => import('./features/admin/admin-submissions.component').then(m => m.AdminSubmissionsComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
