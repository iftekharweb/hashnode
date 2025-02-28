import { Component } from '@angular/core';
import { BlogCardComponent } from '../../blog-card/blog-card.component';

@Component({
  selector: 'app-featured-sidebar',
  imports: [BlogCardComponent],
  templateUrl: './featured-sidebar.component.html',
  styleUrl: './featured-sidebar.component.css'
})
export class FeaturedSidebarComponent {

}
