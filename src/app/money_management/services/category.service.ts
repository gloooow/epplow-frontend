import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  private categories$: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>([]);

  constructor(private http:HttpClient) {
    this.http.get<Category[]>('http://localhost:8000/categories/').subscribe(categories => {
      this.categories$.next(categories);
    });
   }

    get categories() {
      return this.categories$.asObservable().pipe(filter(category => category !== null));
    }
}
