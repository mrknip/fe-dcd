import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImageMetadata } from './dcd-api.service.types';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class DcdApiService {

  constructor(private http: HttpClient) { }

  public getRandomImages({ species, count }: {species?: string, count?: number} = {}) {
    return this.http.get<ImageMetadata[]>(`${API_URL}/image/random`, {
      params: {
        count: 5,
        ...(species && { species })
      }
    });
  }

}
