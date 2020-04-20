import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import {EditProductsComponent} from './edit-products/edit-products.component';
import {AddProductComponent} from './add-product/add-product.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'edit-products/:id', component: EditProductsComponent},
  {path: 'add-products', component: AddProductComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
