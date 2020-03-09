import { Component, OnInit } from '@angular/core';
import {Product} from '../shared/product';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../shared/products.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {
  product: Product;
  editForm: FormGroup;
  id: string;
  constructor(private pService: ProductsService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.editForm = this.fb.group({
      name: '',
      inStock: '',
      price: ''
    });
  }
  editProduct(prod: Product) {
    const editProduct = new Product();
    editProduct.id = this.id;
    editProduct.name = this.editForm.get('name').value;
    editProduct.price = this.editForm.get('price').value;
    editProduct.inStock = this.editForm.get('inStock').value;

    this.pService.updateProduct(editProduct).then(() => this.router.navigateByUrl('products'));
  }
}
