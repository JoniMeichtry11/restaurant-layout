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
      src: '',
      alt: '',
      show: false
    },
    sections: [
      "Menu",
      "Sobre nosotros",
      "Galeria",
      "Contacto",
      "Horarios"
    ],
    tools: {
      cart: false,
      user: true
    }
  }
  toggleSlidePanel(){
    this.isSlidingPanelOpen = !this.isSlidingPanelOpen
    console.log(this.isSlidingPanelOpen);
  }
}
