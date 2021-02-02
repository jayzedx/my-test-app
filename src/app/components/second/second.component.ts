import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DropDownSelector } from '../../interface/DropdownSelector';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  @Output() onChangeDropdownEvent = new EventEmitter<DropDownSelector>();

  public selected: DropDownSelector;
  public options: Array<DropDownSelector>;

  constructor() {
    this.selected = DropDownSelector.isPrime;
    this.options = Object.values(DropDownSelector);
   }

  ngOnInit(): void {
  }

  onChangeSelect(): void {
    console.log(this.selected);
    this.onChangeDropdownEvent.emit(this.selected);
  }

  enumDropdonwVals(): Array<Object> {
    const keys = Object.keys(DropDownSelector);
    return [{id: 1}, {id: 2}];
  }


}
