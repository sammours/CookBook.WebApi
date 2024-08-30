import { Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'users', component: UserListComponent },
    
    { 
        path: 'books', 
        loadChildren: () => import('./modules/book/book.module').then(m => m.BookModule),
    },

    // localhost:4200/books

    { path: 'error', component: ErrorPageComponent },
    { path: '**', redirectTo: 'error'},
];
