import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { DropDownSelector } from '../../interface/DropdownSelector';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {


  @Input() myNumber: number | null;
  @Input() selectedDropdown: DropDownSelector; 

  public result: boolean = false;

  constructor() { 
    this.myNumber = null;
    this.selectedDropdown = DropDownSelector.isPrime
  }

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges) {
    this.result = this.performCheck();
    console.log('Perform Check : ', this.result);    
  }


  performCheck(): boolean {
    console.log('==== Perform Check ====')
    console.log('values : ',this.myNumber, this.selectedDropdown)
    if (this.myNumber) {
      switch(this.selectedDropdown) {
        case DropDownSelector.isFibonacci: return this.isFibonacci(this.myNumber);
        case DropDownSelector.isPrime: return this.isPrime(this.myNumber);
        default: {
          return false;
        }
      }
    }
    return false;
  }

  isPrime(num: number): boolean {
    for(let i=2;  i<num; i++) {
      if(num%i === 0) return false;
    }
    return num > 1;
  }
  
  isFibonacci(num: number): boolean {
    let a = 0;
    let b = 1;
    if (num == a || num == b) return true;
    let c = a+b;

    while(c<=num) {
      if (num == c) return true;
      a = b;
      b = c;
      c = a+b;
    }
    return false;
  }
}
