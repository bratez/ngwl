import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponentComponent } from '../app/product-list-component/product-list-component.component';
import { ProductViewComponentComponent } from '../app/product-view-component/product-view-component.component';
import { WishlistComponentComponent } from '../app/wishlist-component/wishlist-component.component';


const routes: Routes = [
  { path: '', component: ProductListComponentComponent },
  { path: 'products/:id', component: ProductViewComponentComponent },
  { path: 'wishlist', component: WishlistComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
