import { Component, OnInit } from '@angular/core';
import {ProductsService} from './shared/products.service';
import {Product} from './shared/product';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products: Product[];
  constructor(public pService: ProductsService, private router: Router, public auth: AuthService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.pService.getProducts().subscribe(listOfProd => {
      this.products = listOfProd;
      }
    );
  }

  editProduct(id: string) {
    this.router.navigateByUrl('products/edit-product/' + id).catch(err => console.log(err));
  }
}
