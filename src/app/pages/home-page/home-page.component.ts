import { Component } from '@angular/core';
import { MainComponent } from '../../layout';
import {
  NavbarComponent,
  FooterComponent,
  MapsComponent,
  ContactComponent,
  SchedulesComponent,
  GalleryComponent,
  WelcomeComponent,
} from '../../components';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NavbarComponent,
    WelcomeComponent,
    MainComponent,
    MapsComponent,
    ContactComponent,
    SchedulesComponent,
    GalleryComponent,
    FooterComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
