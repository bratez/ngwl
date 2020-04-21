import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from '../app/components/product-list/product-list.component';
import { ProductViewComponent } from '../app/components/product-view/product-view.component';
import { ProductWishlistComponent } from '../app/components/product-wishlist/product-wishlist.component';


const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/:id', component: ProductViewComponent },
  { path: 'wishlist', component: ProductWishlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
