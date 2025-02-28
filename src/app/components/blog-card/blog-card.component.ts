import { Component, inject, input } from '@angular/core';
import { AuthorComponent } from '../author/author.component';
import { Post } from '../../models/app.models';
import { PostServicesService } from '../../services/post-services/post-services.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  imports: [AuthorComponent, RouterLink],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})
export class BlogCardComponent {
  postService = inject(PostServicesService);
  post = input<Post>();

  setPostToShow (postToShow: Post | null) {
    if(!postToShow) return;
    this.postService.postToShow.set(postToShow);
  }
}
