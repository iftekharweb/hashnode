import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-tags',
  imports: [],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
  tags = signal<string[]>(['react', 'angular', 'nodeJS']);
}
