import { Component, OnInit } from '@angular/core';
import {Product} from './shared/product';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {Select, Store} from '@ngxs/store';
import {DeleteProduct, GetAllProducts} from './shared/products.actions';
import {Observable} from 'rxjs';
import {ProductsState} from './shared/products.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  constructor(private store: Store, private router: Router, private auth: AuthService) {
  }
  @Select(ProductsState.product) products$: Observable<Product[]>;

  ngOnInit() {
    this.store.dispatch(new GetAllProducts());
  }

  editProduct(id: string) {
    this.router.navigateByUrl('products/edit-products/' + id).catch(err => console.log(err));
  }
  deleteProduct(product: Product) {
    this.store.dispatch(new DeleteProduct(product));
  }
  authUser() {
    return this.auth.user$;
  }
}
