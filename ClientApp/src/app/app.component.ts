import { ChangeDetectionStrategy, ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { InsertBookComponent } from './components/insert-book/insert-book.component';
import { InsertUserComponent } from './components/insert-user/insert-user.component';

@Component({
  selector: 'cb-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, ChildComponentComponent, InsertBookComponent, InsertUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild("") child: InsertBookComponent | undefined;
  title = 'cook-book';
  text = 'Hello welt';

  constructor(private ref: ChangeDetectorRef) {
    console.log('Constructor');
  }
  ngOnDestroy(): void {
    console.log('On Destroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Change');
  }
  ngOnInit(): void {
    console.log('On Init');
  }
 
  public onButtonClick() {
    this.text = "text changed";
  }

  public onChildTextChange(value: string) {
    this.text = value;
  }
}
