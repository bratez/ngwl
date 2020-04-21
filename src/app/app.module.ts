import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListToolbarComponent } from './components/product-list-toolbar/product-list-toolbar.component';
import { ProductWishlistComponent } from './components/product-wishlist/product-wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductViewComponent,
    ProductListComponent,
    ProductListToolbarComponent,
    ProductWishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
