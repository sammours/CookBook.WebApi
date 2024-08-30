import { Injectable } from "@angular/core";
import { Book } from "../models/book.model";
Injectable({
    providedIn: 'root'
})
export class BookValidation {
    public errors: string[] = [];
    private book: Book;

    constructor(book: Book) {
        this.book = book;
    }

    public isValid() {
        let isValid = true;
        this.errors = [];
        if (!this.isTitleValid()) {
            this.errors.push('Title is missing');
            isValid = false;
        }

        if (!this.isDescriptionValid()) {
            this.errors.push('Description is missing');
            isValid = false;
        }
        
        return isValid;
    }

    private isTitleValid() {
        return this.book.title !== '';
    }

    private isDescriptionValid() {
        return this.book.description !== '';
    }
}