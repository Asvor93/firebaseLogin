import { Component, OnInit } from '@angular/core';
import {Product} from '../shared/product';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {ProductsService} from '../shared/products.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {
  product: Product;
  editForm: FormGroup;
  constructor(private pService: ProductsService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      name: '',
      inStock: '',
      price: ''
    });
  }
  editProduct(prod: Product) {
    const editProduct = new Product();
    editProduct.id = prod.id;
    editProduct.name = this.editForm.get('name').value;
    editProduct.price = this.editForm.get('price').value;
    editProduct.inStock = this.editForm.get('inStock').value;

    this.pService.updateProduct(editProduct).then(() => this.router.navigateByUrl('products'));
  }
}
