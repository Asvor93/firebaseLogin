import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatListModule} from '@angular/material';
import { EditProductsComponent } from './edit-products/edit-products.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ProductsComponent, EditProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ProductsModule { }
