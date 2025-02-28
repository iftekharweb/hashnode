import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/app.models';

@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {
  http = inject(HttpClient);
  url = environment.apiUrl;

  getPosts() : Observable<Post[]> {
    return this.http.get<Post[]>(this.url + 'posts') || [];
  }
  getPhotos() : Observable<any> {
    return this.http.get(this.url + 'photos');
  }

}
