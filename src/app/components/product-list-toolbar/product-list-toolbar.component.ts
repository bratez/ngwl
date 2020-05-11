import { Observable } from 'rxjs';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-product-list-toolbar',
  templateUrl: './product-list-toolbar.component.html',
  styleUrls: ['./product-list-toolbar.component.scss']
})

export class ProductListToolbarComponent implements OnInit {
  @Input() categories$: Observable<Category[]>;

  @Output() onCategory = new EventEmitter<any>();
  @Output() onChangeDirection = new EventEmitter<any>();
  @Output() onSorting = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  selectCategory(data) {
    this.onCategory.emit(data);
  }

  changeDirection(event) {
    this.onChangeDirection.emit(event.target.checked);
  }

  changeSorting(event) {
    this.onSorting.emit(event.target.value);
  }

}
