import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Product} from './product';
import {map} from 'rxjs/operators';
import {User} from '../../service/user';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private afs: AngularFirestore) { }

  public getProducts(): Observable<Product[]> {
    return this.afs
      .collection<Product>('products')
      .snapshotChanges()
      .pipe(
        map(docStuff => {
          const newArray: Product[] = [];
          docStuff.forEach(doc => {
            const prod = doc.payload.doc.data();
            newArray.push({
              name: prod.name,
              price: prod.price,
              id: doc.payload.doc.id,
              inStock: prod.inStock
            });
          });
          return newArray;
        }
        )
        );
}
  public updateProduct(product) {
    const userRef: AngularFirestoreDocument<Product> = this.afs.doc(`products/${product.id}`);
    const data = {
      id: product.id,
      price: product.price,
      name: product.name,
      inStock: product.inStock,
    };
    return userRef.set(data, { merge: true });
  }
}
