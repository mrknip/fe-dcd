import { Component, Input } from '@angular/core';
import { ImageMetadata } from 'src/app/services/dcd-api.service.types';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent {
  constructor(
    private userService: UserService,
  ) {}
    @Input() image!: ImageMetadata; 

    isFavourite: boolean = false;

  onImageSelected() {
    this.userService.addFavourite(this.image)

    this.isFavourite = !this.isFavourite;
  }

  onImageLoaded() {
    const isFavourite = this.userService.isFavourite(this.image.id);
    
    this.isFavourite = isFavourite;
  }
}
