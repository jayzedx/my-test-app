import { Component, EventEmitter, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';
import { Subject } from 'rxjs';
import { DropDownSelector } from '../../interface/DropdownSelector';




@Component({
  selector: 'app-home',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {


  public myInput: number | null;
  public mySelected: DropDownSelector;

  
  constructor() {
    this.myInput = null;
    this.mySelected = DropDownSelector.isPrime;
   }

  ngOnInit(): void {
    
  }

  receiveInputEvent($event: any): void {
    this.myInput = $event;
    console.log('receive quest1 myInput ', this.myInput);

  }

  receiveDropdownEvent($event: any): void {
    this.mySelected = $event;
    console.log('receive quest1 mySelected ', this.mySelected);
  }



}
