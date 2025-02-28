import { Component, inject, OnInit, signal } from '@angular/core';
import { FeaturedMainComponent } from '../components/home/featured-main/featured-main.component';
import { FeaturedSidebarComponent } from '../components/home/featured-sidebar/featured-sidebar.component';
import { HttpServicesService } from '../services/http-services.service';
import { Post } from '../models/app.models';
import { dummyImages } from '../utils/dummyData';

@Component({
  selector: 'app-home',
  imports: [FeaturedMainComponent, FeaturedSidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  postService = inject(HttpServicesService);
  allPosts = signal<Post[]>([]);

  ngOnInit(): void {
    // this.fetchAllPosts();
    //  this.sliceFirstSixPosts();
  }

  fetchAllPosts() {
    this.postService.getPosts().subscribe({
      next: (res) => {
        this.allPosts.set(res);
      },
      error: (err:any) => {
        console.error(err);
        throw err;
      }
    });
  }

  sliceFirstSixPosts() {
    const sixPosts = this.allPosts().slice(0,6); 
    const updated = sixPosts?.map((post, index) => {
      return {
        ...post,
        imageUrl: dummyImages[index]
      }
    })
    this.allPosts.set(updated);
  }
}
