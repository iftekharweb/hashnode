import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { PostServicesService } from '../../services/post-services/post-services.service';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isHomeTab = signal(true);
  postService = inject(PostServicesService);

  toggleTabs(state: boolean) {
    this.isHomeTab.set(state);
  }
}
