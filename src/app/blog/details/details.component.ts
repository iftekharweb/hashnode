import { Component, inject } from '@angular/core';
import { BlogCardComponent } from '../../components/blog-card/blog-card.component';
import { PostServicesService } from '../../services/post-services/post-services.service';
import { SubscribeComponent } from '../../components/subscribe/subscribe.component';
import { TagsComponent } from '../../components/tags/tags.component';

@Component({
  selector: 'app-details',
  imports: [SubscribeComponent, TagsComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  postService = inject(PostServicesService);
}
