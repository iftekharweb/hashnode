import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'newsletter',
        loadComponent: () => import('./newsletter/newsletter.component').then(m => m.NewsletterComponent)
    },
    {
        path: 'blog/:title',
        loadComponent: () => import('./blog/details/details.component').then(m => m.DetailsComponent)
    }
];
