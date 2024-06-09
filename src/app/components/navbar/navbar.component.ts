import { Component, HostListener } from '@angular/core';
import { navbarDataListInterface } from '../../core/models';
import { SlidingPanelComponent } from '../shared/sliding-panel/sliding-panel.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SlidingPanelComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isSlidingPanelOpen = false;
  navbarDataList: navbarDataListInterface = {
    logo: {
      src: '../../../assets/img/henry-cook-logo-nav-black.png',
      alt: '',
      show: true
    },
    tools: {
      cart: false,
      user: false
    }
  }
  closeSlidingPanel(){
    this.isSlidingPanelOpen = false;
  }
  openSlidingPanel(){
    this.isSlidingPanelOpen = true;
  }
}
