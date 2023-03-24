import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { DcdApiService } from '../../services/dcd-api.service';
import { ImageMetadata } from '../../services/dcd-api.service.types';

type ImagesWithFavourites = ImageMetadata & {
  isFavourite: boolean;
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
      next: images => this.images = this.mapFavourites(images),
      error: err => console.error(err),
      complete: () => console.log('random image fetch complete')
    });
  }

  refetchRandom(species?: string) {
    this.dcdApiService.getRandomImages({ species }).subscribe({
      next: images => {this.images = this.mapFavourites(images); console.log(this.images)},
      error: err => console.error(err),
      complete: () => console.log('random image fetch complete')
    });
  }

  onImageSelected(image: ImageMetadata) {
    this.userService.addFavourite(image)
    const imageIndex = this.images.findIndex(i => i.id === image.id)
    this.images[imageIndex].isFavourite = !this.images[imageIndex].isFavourite;
  }

  mapFavourites(images: ImageMetadata[]) {
    return images.map((image) => ({
      ...image,
      isFavourite: this.userService.isFavourite(image.id)
    }))
  }
}