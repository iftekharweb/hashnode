import { Component, effect, inject, input, OnInit, signal } from '@angular/core';
import { AuthorComponent } from '../../author/author.component';
import { Post } from '../../../models/app.models';
import { PostServicesService } from '../../../services/post-services/post-services.service';

@Component({
  selector: 'app-featured-main',
  imports: [AuthorComponent],
  templateUrl: './featured-main.component.html',
  styleUrl: './featured-main.component.css'
})
export class FeaturedMainComponent{
  postService = inject(PostServicesService);
  maxReadTimesPost = signal<Post>({} as Post);
  constructor() {
    effect(() => {
      if(this.postService.posts().length > 0) {
        this.getMaxReadTimesPost();
      }
    })
  }

  getMaxReadTimesPost() {
    console.log("🚁 ~ POSTS-- ~ ", this.postService.posts());
    const maxReadTimes = this.postService.posts().reduce((prev, current) => {
      return (prev.readTimes > current.readTimes) ? prev : current;
    });
  
    this.maxReadTimesPost.set(maxReadTimes);
  }
}
