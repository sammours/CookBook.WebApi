import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../../../models/book.model';

@Component({
  selector: 'cb-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  protected books: Book[] = [];

  constructor(private router: Router) {
    const book1 = new Book();
    book1.id = 1;
    book1.title = 'Book 1 title';
    this.books.push(book1);

    const book2 = new Book();
    book2.id = 2;
    book2.title = 'Book 2 title';
    this.books.push(book2);

    const book3 = new Book();
    book3.id = 3;
    book3.title = 'Book 3 title';
    this.books.push(book3);
  }

  protected onEditClicked(bookId: number) {
    this.router.navigate(['/books', bookId]);
  }
}
