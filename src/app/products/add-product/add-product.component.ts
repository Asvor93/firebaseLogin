import { Component, OnInit } from '@angular/core';
import {Product} from '../shared/product';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductsService} from '../shared/products.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product;
  newPrForm: FormGroup;
  id: string;
  constructor(private pService: ProductsService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.newPrForm = this.fb.group({
      pName: '',
      inStock: '',
      price: ''
    });
  }

  addProduct() {
    const addProduct = new Product();
    addProduct.id = this.id;
    addProduct.name = this.newPrForm.get('pName').value;
    addProduct.price = this.newPrForm.get('price').value;
    addProduct.inStock = this.newPrForm.get('inStock').value;

    this.pService.addProduct(addProduct).then(() => this.router.navigateByUrl('products'));
  }

}
