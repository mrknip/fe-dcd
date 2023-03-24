import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'fullImageUrl'
})
export class FullImageUrlPipe implements PipeTransform {

  transform(imagePath: string) {
    return `${environment.apiUrl}/${imagePath}`;
  }

}
