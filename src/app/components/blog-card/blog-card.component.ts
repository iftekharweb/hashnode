import { Component } from '@angular/core';
import { AuthorComponent } from '../author/author.component';

@Component({
  selector: 'app-blog-card',
  imports: [AuthorComponent],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.css'
})
export class BlogCardComponent {

}
