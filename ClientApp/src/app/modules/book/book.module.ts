import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: ':id', component: BookDetailsComponent },
];

// localhost:4200/books/books
// localhost:4200/books

@NgModule({
  declarations: [BookDetailsComponent, BookListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BookModule { }
