import { Component } from '@angular/core';
import { DcdApiService } from '../../services/dcd-api.service';
import { ImageMetadata } from '../../services/dcd-api.service.types';

@Component({
  selector: 'app-random-image-display',
  templateUrl: './random-image-display.component.html',
  styleUrls: ['./random-image-display.component.css'],
})
export class RandomImageDisplayComponent {
  public images: ImageMetadata[] = [];

  constructor(private dcdApiService: DcdApiService) {}

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
}