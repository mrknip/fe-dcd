import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { DcdApiService } from '../../services/dcd-api.service';
import { ImageMetadata } from '../../services/dcd-api.service.types';

type ImagesWithFavourites = ImageMetadata & {
  isFavourite?: boolean;
}

@Component({
  selector: 'app-random-image-display',
  templateUrl: './random-image-display.component.html',
  styleUrls: ['./random-image-display.component.css'],
})
export class RandomImageDisplayComponent {
  public images: ImagesWithFavourites[] = [];

  constructor(private dcdApiService: DcdApiService, private userService: UserService) {}

  ngOnInit() {
    this.dcdApiService.getRandomImages().subscribe({
      next: images => this.images = images,
      error: err => console.error(err),
    });
  }

  refetchRandom(species?: string) {
    this.dcdApiService.getRandomImages({ species }).subscribe({
      next: images => this.images = images,
      error: err => console.error(err),
    });
  }

  onImageSelected(image: ImageMetadata) {
    this.userService.addFavourite(image)

    const imageIndex = this.images.findIndex(i => i.id === image.id)
    this.images[imageIndex].isFavourite = !this.images[imageIndex].isFavourite;
  }

  onImageLoaded(image: ImageMetadata) {
    const isFavourite = this.userService.isFavourite(image.id);
    
    const imageIndex = this.images.findIndex(i => i.id === image.id)
    this.images[imageIndex].isFavourite = isFavourite;
  }
}