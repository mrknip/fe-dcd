import { Injectable } from '@angular/core';
import { ImageMetadata } from './dcd-api.service.types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private favourites: ImageMetadata[] = [];


  constructor() { }

  public isFavourite(id: number) {
    return !!this.favourites.find(favourite => favourite.id === id)
  }

  public addFavourite(image: ImageMetadata) {
    if (this.favourites.find(favourite => favourite.id === image.id)) {
      this.favourites = this.favourites.filter(favourite => favourite.id !== image.id);
    } else {
      this.favourites = [...this.favourites, image];
    }
    
    console.log(this.favourites)
  }
}
