import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { CategoryService } from '../../service/category.service';


@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {
  
  public allCategory: any[] = [];
  public categories: any[] = [];

  constructor(private categoryService: CategoryService) { 
    this.categoryService.getCategories();
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.categories$.subscribe((res: any) => {
      console.log('load category ', res);
      this.categories = [...res];
      this.allCategory = [...res];

    },  
    (err: any) => console.log(err));
  }

  applyFilter(event: any) {
    const key = event.target.value.trim().toLowerCase();
    if (key === '') {
      this.categories = this.allCategory;
    } else {
      this.categories = this.allCategory.filter((val) =>  {
        const name = val.trim().toLowerCase();
        console.log(name, key)
        return name.includes(key)
      }); 
    }
  }


}
