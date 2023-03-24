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
    this.dcdApiService.getRandomImages({ species: 'dog'}).subscribe({
      next: data => this.images = data,
      error: err => console.error(err),
      complete: () => console.log('random image fetch complete')
    });
  }

  refetchRandom(species?: string) {
    this.dcdApiService.getRandomImages({ species }).subscribe({
      next: data => this.images = data,
      error: err => console.error(err),
      complete: () => console.log('random image fetch complete')
    });
  }
}
