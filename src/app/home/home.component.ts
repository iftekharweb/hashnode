import { Component, inject, OnInit, signal } from '@angular/core';
import { FeaturedMainComponent } from '../components/home/featured-main/featured-main.component';
import { FeaturedSidebarComponent } from '../components/home/featured-sidebar/featured-sidebar.component';
import { HttpServicesService } from '../services/http-services.service';
import { Post } from '../models/app.models';
import { dummyAuthors, dummyImages } from '../utils/dummyData';
import { PostServicesService } from '../services/post-services/post-services.service';
import { ProfileComponent } from '../components/home/profile/profile.component';
import { BlogCardComponent } from '../components/blog-card/blog-card.component';

@Component({
  selector: 'app-home',
  imports: [FeaturedMainComponent, FeaturedSidebarComponent, ProfileComponent, BlogCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  httpService = inject(HttpServicesService);
  postService = inject(PostServicesService);

  ngOnInit(): void {
    this.fetchAllPosts();
  }

  fetchAllPosts() {
    this.httpService.getPosts().subscribe({
      next: (res) => {
        this.sliceFirstSixPosts(res);
      },
      error: (err:any) => {
        console.error(err);
        throw err;
      }
    });
  }

  sliceFirstSixPosts(posts: Post[]) {
    const sixPosts = posts.slice(0,6); 
    const updated = sixPosts?.map((post, index) => {
      return {
        ...post,
        imgUrl: dummyImages[index],
        authonName: dummyAuthors[index%2].authorName,
        authorImage: dummyAuthors[index%2].authorImage,
        readTimes: dummyAuthors[index%2].readTimes
      }
    })
    this.postService.posts.set(updated);
  }
}
