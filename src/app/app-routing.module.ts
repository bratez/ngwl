import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from '../app/components/product-list/product-list.component';
import { ProductViewComponent } from '../app/components/product-view/product-view.component';
import { ProductWishlistComponent } from '../app/components/product-wishlist/product-wishlist.component';
import { WishlistGuard } from './guards/wishlist.guard';


const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'products/:id', component: ProductViewComponent },
  { path: 'wishlist', component: ProductWishlistComponent, canActivate: [WishlistGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [WishlistGuard]
})
export class AppRoutingModule { }
