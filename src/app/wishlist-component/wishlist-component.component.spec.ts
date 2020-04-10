import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistComponentComponent } from './wishlist-component.component';

describe('WishlistComponentComponent', () => {
  let component: WishlistComponentComponent;
  let fixture: ComponentFixture<WishlistComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishlistComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
