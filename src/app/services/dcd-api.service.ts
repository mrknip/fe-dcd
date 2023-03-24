import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImageMetadata } from './dcd-api.service.types';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DcdApiService {

  constructor(private http: HttpClient) { }

  public getRandomImages({ species, count }: {species?: string, count?: number} = {}) {
    return this.http.get<ImageMetadata[]>(`${environment.apiUrl}/image/random`, {
      params: {
        count: 5,
        ...(species && { species })
      }
    });
  }

}
