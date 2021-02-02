import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
// import { Observable } from  'rxjs/Observable' 
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories = new BehaviorSubject<any>([]); //subject
  readonly categories$ = this.categories.asObservable(); //observable

  constructor(private http:HttpClient) {}

  getCategories() {
    return this.http.get('https://api.publicapis.org/categories')
    .pipe(
      map((res => res))
    ).subscribe(res => {
      this.categories.next(res);
    });
  }

}
