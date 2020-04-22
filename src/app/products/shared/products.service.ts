import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {from, Observable, of} from 'rxjs';
import {Product} from './product';
import {map} from 'rxjs/operators';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private afs: AngularFirestore, private router: Router) { }

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
  public addProduct(product) {
    const userRef: AngularFirestoreCollection<Product> = this.afs.collection<Product>(`products`);
    const data = {
      id: this.afs.createId(),
      price: product.price,
      name: product.name,
      inStock: product.inStock,
    };
    return userRef.add(data);
  }

  deleteProduct(product: Product): Observable<Product> {
    return from(
      this.afs
        .doc(`products` + '/' + product.id)
        .delete()
    ).pipe(
      map(() => {
        return product;
      })
    );
  }
}
