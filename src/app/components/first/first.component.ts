import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  @Output() onChangeInputEvent = new EventEmitter<number | null>();

  public myInput: number | null;

  constructor() {
    this.myInput = null;
  }

  ngOnInit(): void {
  }

  onChangeInput(): void {
    if (this.myInput === undefined)
      this.myInput = null;
    this.onChangeInputEvent.emit(this.myInput);
  }

}
