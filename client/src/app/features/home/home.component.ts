import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { MissionComponent } from './mission/mission.component';
import { LearningPathsComponent } from './learning-paths/learning-paths.component';
import { MentorsComponent } from './mentors/mentors.component';
import { CompanyLogosComponent } from './company-logos/company-logos.component';
import { ContactComponent } from './contact/contact.component';
import { ParticleBgComponent } from '../../shared/components/particle-bg/particle-bg.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    ParticleBgComponent,
    HeroComponent, 
    MissionComponent, 
    LearningPathsComponent, 
    MentorsComponent,
    CompanyLogosComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
