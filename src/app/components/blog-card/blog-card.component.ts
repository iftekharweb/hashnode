import { Component, input } from '@angular/core';
import { AuthorComponent } from '../author/author.component';
import { Post } from '../../models/app.models';

@Component({
  selector: 'app-blog-card',
  imports: [AuthorComponent],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})
export class BlogCardComponent {
  post = input<Post>();
}
