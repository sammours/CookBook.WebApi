import { Component, Input } from '@angular/core';

@Component({
  selector: 'cb-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
  @Input() id = '';
}
