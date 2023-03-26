import { Component } from '@angular/core';
import { ImageMetadata } from 'src/app/services/dcd-api.service.types';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-favourites-display',
  templateUrl: './favourites-display.component.html',
  styleUrls: ['./favourites-display.component.css']
})
export class FavouritesDisplayComponent {
  constructor(private userService: UserService) {}

  favourites: ImageMetadata[] = [];

  ngOnInit() {
    this.userService.getFavourites().subscribe({
      next: (val) => this.favourites = val,
    })
  }

  hasFavourites() {
    return this.favourites.length > 0;
  }
}
