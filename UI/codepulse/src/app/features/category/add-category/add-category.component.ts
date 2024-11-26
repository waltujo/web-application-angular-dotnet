import { CategoryService } from './../services/category.service';
import { Component, OnDestroy } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy {

  model: AddCategoryRequest;
  private addCategorySubscription?: Subscription;

  constructor(private CategoryService: CategoryService, private router: Router) {
    this.model = {
      name: '',
      urlHandle: ''
    };
  }

  onFormSubmit(){
    this.addCategorySubscription = this.CategoryService.addCategory(this.model)
    .subscribe({
      next: (Response) => {
        this.router.navigateByUrl('/admin/categories');
      }
    })
  }

  ngOnDestroy(): void {
    this.addCategorySubscription?.unsubscribe();
  }

}
