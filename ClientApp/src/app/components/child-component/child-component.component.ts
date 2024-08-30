import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'cb-child-component',
  standalone: true,
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.scss'
})
export class ChildComponentComponent implements OnChanges {
  @Input() text = '';

  @Output() textChange = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Change');
  }

  public onButtonClick() {
    this.textChange.emit('changed from child');
  }
}
