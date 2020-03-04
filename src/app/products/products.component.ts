import { Component, OnInit } from '@angular/core';
import {ProductsService} from './shared/products.service';
import {Product} from './shared/product';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: Product[];
  constructor(public pService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.pService.getProducts().subscribe(listOfProd => {
      this.products = listOfProd;
      }
    );
  }

  editProduct() {
    this.router.navigateByUrl('products/edit-product').catch(err => console.log(err));
  }
}
