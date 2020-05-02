import { Category } from './../interfaces/category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  constructor(private http: HttpClient) {}

  public getJSON(): Observable<any> {
    return this.http.get("./assets/products.json");
  }

  public getCategories(products): Category[] {
    return Array.from(new Set(products.map((el) => { return el.category } ))).map(el => { return {name: el.toString(), selected: false} });
  }
}
