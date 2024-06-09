import { Routes } from '@angular/router';
import { HomePageComponent, MenuComponent } from './pages';

export const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'menu', component: MenuComponent
  }
];
