import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Book } from "../../../models/book.model";
import { map, Observable, of, switchMap } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class BookService {
    private books: Book[] = [];
    constructor(private readonly httpClient: HttpClient) {
    }

    public getAll(): Observable<Book[]> {
        if (this.books.length > 0) {
            return of(this.books);
        }

        return this.httpClient.get('https://localhost:7046/Books/GetAll')
            .pipe(
                map(result => {
                    this.books = result as Book[];
                    return this.books;
                })
            );
    }

    public insert(book: Book | any): Observable<Book> {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.httpClient.post('https://localhost:7046/Books/Insert', book, { headers })
            .pipe(
                map(result => result as Book)
            );
    }
}