import { Component, effect, inject, signal } from '@angular/core';
import { BlogCardComponent } from '../../blog-card/blog-card.component';
import { PostServicesService } from '../../../services/post-services/post-services.service';
import { Post } from '../../../models/app.models';

@Component({
  selector: 'app-featured-sidebar',
  imports: [BlogCardComponent],
  templateUrl: './featured-sidebar.component.html',
  styleUrl: './featured-sidebar.component.css',
})
export class FeaturedSidebarComponent {
  postService = inject(PostServicesService);
  posts = signal<Post[]>([]);

  constructor() {
    effect(() => {
      this.getTwoPosts();
    });
  }

  getTwoPosts() {
    const posts = this.postService.posts().slice(1, 3);
    this.posts.set(posts);
  }
}
