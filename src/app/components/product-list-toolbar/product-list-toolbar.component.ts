import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-product-list-toolbar',
  templateUrl: './product-list-toolbar.component.html',
  styleUrls: ['./product-list-toolbar.component.scss']
})

export class ProductListToolbarComponent implements OnInit {
  @Input()  categories: Category[];

  @Output() onCategory = new EventEmitter<any>();
  @Output() onChangeDirection = new EventEmitter<any>();
  @Output() onSorting = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  selectCategory(event) {
    this.onCategory.emit(event);
  }

  changeDirection(event) {
    this.onChangeDirection.emit(event);
  }

  changeSorting(event) {
    this.onSorting.emit(event);
  }

}
