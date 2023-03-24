import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullImageUrl'
})
export class FullImageUrlPipe implements PipeTransform {

  transform(imagePath: string) {
    return `http://localhost:3000/${imagePath}`;
  }

}
