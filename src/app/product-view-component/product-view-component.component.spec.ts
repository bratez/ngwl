import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductViewComponentComponent } from './product-view-component.component';

describe('ProductViewComponentComponent', () => {
  let component: ProductViewComponentComponent;
  let fixture: ComponentFixture<ProductViewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductViewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
