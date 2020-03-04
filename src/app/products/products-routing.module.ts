import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import {EditProductsComponent} from './edit-products/edit-products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'edit-product', component: EditProductsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
