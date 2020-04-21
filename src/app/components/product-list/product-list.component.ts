import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { Category } from '../../interfaces/category';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  pageName = 'Products list';
  products: Product[] = [];
  categories: Category[] = [];

  constructor(private router: Router, private productsService : ProductsService) {}

  ngOnInit(): void {
    this.productsService.getJSON().subscribe(data => {
      this.products = data;
      this.categories = this.collectCategories(data);
    });
  }

  onCategory(event) {
    console.log(event)
  }

  onChangeDirection(event) {
    console.log(event)
  }

  onSorting(event) {
    console.log(event)
  }

  toWishlist(id) {
    this.products.forEach(p => {
      if (p.id == id) { p.inWishlist = !p.inWishlist; return }
    })
  }

  toProduct(id) {
    const navData: NavigationExtras = {
      state: {
        product: this.products.filter(p => p.id == id)[0]
      }
    };
    this.router.navigate([`/products/${id}`], navData);
  }

  collectCategories(products): Category[] {
    return Array.from(new Set(products.map((el) => { return el.category } ))).map(el => { return {name: el.toString(), selected: false} });
  }

}
