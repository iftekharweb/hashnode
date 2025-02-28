import { Component, effect, inject, input, OnInit, signal } from '@angular/core';
import { AuthorComponent } from '../../author/author.component';
import { Post } from '../../../models/app.models';
import { PostServicesService } from '../../../services/post-services/post-services.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-featured-main',
  imports: [AuthorComponent, RouterLink],
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

  setPostToShow (postToShow: Post | null) {
    if(!postToShow) return;
    this.postService.postToShow.set(postToShow);
  }

  getMaxReadTimesPost() {
    const maxReadTimes = this.postService.posts().reduce((prev, current) => {
      return (prev.readTimes > current.readTimes) ? prev : current;
    });
  
    this.maxReadTimesPost.set(maxReadTimes);
  }
}
