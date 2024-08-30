import { Component, inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../../../models/book.model';
import { interval, map, Observable, of, Subscription } from 'rxjs';

import { BookService } from '../../services/book.service';

@Component({
  selector: 'cb-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
  providers: [BookService]
})
export class BookListComponent implements OnDestroy {
  protected books1: Book[] = [];
  protected books2: Book[] = [];
  protected books1$: Observable<Book[]> = of();
  protected isLoading = false;
  protected arr: number[] = [];

  protected obs$: Observable<number> = of();
  protected sub: Subscription | undefined;

  protected bookService = inject(BookService);
  constructor(private router: Router) {
    // const book1 = new Book();
    // book1.id = 1;
    // book1.title = 'Book 1 title';
    // this.books.push(book1);

    // const book2 = new Book();
    // book2.id = 2;
    // book2.title = 'Book 2 title';
    // this.books.push(book2);

    // const book3 = new Book();
    // book3.id = 3;
    // book3.title = 'Book 3 title';
    // this.books.push(book3);

    // this.obs$ = interval(1000).pipe(
    //   filter(x => x % 2 === 0),
    //   filter(x => x > 0),
    //   filter(x => x !== 4),
    //   map((x) => this.arr.push(x))
    // );
    
    // this.sub = this.obs$.subscribe();

    this.isLoading = true;

    this.books1$ = this.bookService.getAll();

    this.sub = this.books1$
      .subscribe(result => {
        if (result != null) {
          this.books1 = result;
          this.isLoading = false;
        }
      });

    const book = {
      "id": 0,
      "title": "Title 5",
      "description": "desc5",
      "author": "Samy",
      "isbn": "1235",
      "publishDate": "2024-01-01T00:00:00",
      "isAvailable": true,
      "histories": []
    };
    
    //this.bookService.insert(book).subscribe();

    // this.sub = this.bookService.getAll()
    //       .subscribe(result => {
    //       if (result != null) {
    //         this.books2 = result;
    //       }
    //     });
  }

  public ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  protected onEditClicked(bookId: number) {
    this.router.navigate(['/books', bookId]);
  }
}
