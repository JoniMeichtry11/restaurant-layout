import { Component } from '@angular/core';
import { GalleryModule, Gallery, GalleryRef, ImageItem } from 'ng-gallery';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [GalleryModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  constructor(private gallery: Gallery) {}
  // images: GalleryItem[] = [
  //   "https://www.cerveceriamodelo.com.ar/imagenes/galeria01a.jpg",
  //   "https://www.cerveceriamodelo.com.ar/imagenes/galeria02a.jpg",
  //   "https://www.cerveceriamodelo.com.ar/imagenes/galeria03a.jpg",
  //   "https://www.cerveceriamodelo.com.ar/imagenes/galeria04a.jpg",
  //   "https://www.cerveceriamodelo.com.ar/imagenes/galeria05a.jpg",
  //   "https://www.cerveceriamodelo.com.ar/imagenes/galeria06a.jpg",
  //   "https://www.cerveceriamodelo.com.ar/imagenes/galeria07a.jpg",
  //   "https://www.cerveceriamodelo.com.ar/imagenes/galeria08a.jpg",
  //   "https://www.cerveceriamodelo.com.ar/imagenes/galeria09a.jpg",
  //   "https://www.cerveceriamodelo.com.ar/imagenes/galeria10a.jpg",
  //   "https://www.cerveceriamodelo.com.ar/imagenes/galeria11a.jpg",
  //   "https://www.cerveceriamodelo.com.ar/imagenes/galeria12a.jpg",
  // ];

  ngOnInit() {
    // Get the galleryRef by id
    const galleryRef = this.gallery.ref('galeria');

    // Or load a new set of items
    galleryRef.load([
      new ImageItem({
        src: 'https://www.cerveceriamodelo.com.ar/imagenes/galeria01a.jpg',
        thumb: 'https://www.cerveceriamodelo.com.ar/imagenes/galeria01a.jpg',
      }),
      new ImageItem({
        src: 'https://www.cerveceriamodelo.com.ar/imagenes/galeria02a.jpg',
        thumb: 'https://www.cerveceriamodelo.com.ar/imagenes/galeria02a.jpg',
      }),
      new ImageItem({
        src: 'https://www.cerveceriamodelo.com.ar/imagenes/galeria03a.jpg',
        thumb: 'https://www.cerveceriamodelo.com.ar/imagenes/galeria03a.jpg',
      }),
      new ImageItem({
        src: 'https://www.cerveceriamodelo.com.ar/imagenes/galeria04a.jpg',
        thumb: 'https://www.cerveceriamodelo.com.ar/imagenes/galeria04a.jpg',
      }),
      new ImageItem({
        src: 'https://www.cerveceriamodelo.com.ar/imagenes/galeria05a.jpg',
        thumb: 'https://www.cerveceriamodelo.com.ar/imagenes/galeria05a.jpg',
      }),
      new ImageItem({
        src: 'https://www.cerveceriamodelo.com.ar/imagenes/galeria07a.jpg',
        thumb: 'https://www.cerveceriamodelo.com.ar/imagenes/galeria07a.jpg',
      }),
      new ImageItem({
        src: 'https://www.cerveceriamodelo.com.ar/imagenes/galeria08a.jpg',
        thumb: 'https://www.cerveceriamodelo.com.ar/imagenes/galeria08a.jpg',
      }),
      new ImageItem({
        src: 'https://www.cerveceriamodelo.com.ar/imagenes/galeria09a.jpg',
        thumb: 'https://www.cerveceriamodelo.com.ar/imagenes/galeria09a.jpg',
      }),
      new ImageItem({
        src: 'https://www.cerveceriamodelo.com.ar/imagenes/galeria10a.jpg',
        thumb: 'https://www.cerveceriamodelo.com.ar/imagenes/galeria10a.jpg',
      }),
      new ImageItem({
        src: 'https://www.cerveceriamodelo.com.ar/imagenes/galeria11a.jpg',
        thumb: 'https://www.cerveceriamodelo.com.ar/imagenes/galeria11a.jpg',
      }),
      new ImageItem({
        src: 'https://www.cerveceriamodelo.com.ar/imagenes/galeria12a.jpg',
        thumb: 'https://www.cerveceriamodelo.com.ar/imagenes/galeria12a.jpg',
      }),
      // ... more items
    ]);
  }
  // selectedImage: string | null = null;

  // selectImage(image: string): void {
  //   console.log("image: " + image);

  //   this.selectedImage = image;
  // }

  // closeImage(): void {
  //   this.selectedImage = null;
  // }
}
