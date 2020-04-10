import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { ProductViewComponentComponent } from './product-view-component/product-view-component.component';
import { WishlistComponentComponent } from './wishlist-component/wishlist-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponentComponent,
    ProductViewComponentComponent,
    WishlistComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
