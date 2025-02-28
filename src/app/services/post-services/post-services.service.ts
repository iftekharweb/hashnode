import { Injectable, signal } from '@angular/core';
import { Post } from '../../models/app.models';

@Injectable({
  providedIn: 'root'
})
export class PostServicesService {
  posts = signal<Post[]>([]);
  postToShow = signal<Post>({} as Post);
  constructor() { }
}
