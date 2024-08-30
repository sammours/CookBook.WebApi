import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book.model';
import { BookValidation } from '../../validations/book.validation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cb-insert-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './insert-book.component.html',
  styleUrl: './insert-book.component.scss'
})
export class InsertBookComponent {
  protected book = new Book();
  protected bookValidation = new BookValidation(this.book);
  // protected pageTitle = 'Insert book component';

  constructor() {
    this.book.title = 'Angular book';
    this.book.description = 'Angular book description';
    // this.book1.description = 'Desc';
    // this.book1.setDescriptionToDefault();
    // this.book2.setDescriptionToDefault();
    // this.book1.description = 'Desc';
    // this.book1 = this.book2;
    // const x1 = 'title';
    // const x2 = 'title';
    // const x3 = 'title';
    // const x4 = x3;
    // this.book2.description = 'Desc';
    // for (var i = 0; i < this.book1.versions.length; i++) {
    //   console.log(this.book1.versions[i].version);
    // }
  }
}


/*

1. User model erstellen
User
Id: number
FirstName: string
LastName: string
Age: number,
DateOfBirth: Date,
email: string
Address: UserAddress

UserAddress
Street: string
PostalCode: string
City: string
Country: string

2. User form erstellen

3. User Validation erstellen:
Firstname darf nicht null sein
Lastname darf nicht null sein
Age > 18
Email muss gültig sein

4. Fehlermeldungen anzeigen, Save button disablen wenn nicht valid
 
*/