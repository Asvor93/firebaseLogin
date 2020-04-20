import { Component, OnInit } from '@angular/core';
import {Product} from './shared/product';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {Select, Store} from '@ngxs/store';
import {GetAllProductsAction} from './shared/products.actions';
import {Observable} from 'rxjs';
import {ProductsState} from './shared/products.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  constructor(private store: Store, private router: Router, public auth: AuthService, private afs: AngularFirestore) {
  }
  @Select(ProductsState.product) products$: Observable<Product[]>;

  ngOnInit() {
    this.store.dispatch(new GetAllProductsAction());
  }

  editProduct(id: string) {
    this.router.navigateByUrl('products/edit-products/' + id).catch(err => console.log(err));
  }
  deleteProduct(id: string) {
    return this.afs.collection('products').doc(id).delete();
  }
}
