import { Injectable } from '@angular/core';
import { Router} from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth} from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';

import {Observable, of, pipe} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import { User} from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.user$ = this.afAuth.authState.pipe(switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return of(null);
      }
    }));
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user),  await this.router.navigate(['users/profile']);
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/']);
  }

  public updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      isAdmin: true,
      photoURL: null,
      isBlocked: false,
      isSuper: true
    };
    return userRef.set(data, { merge: true });
  }

  public getAllUsers(): Observable<User[]> {
    return this.afs.collection<User>('users').snapshotChanges()
      .pipe(map(docStuff => {
        const newArray: User[] = [];
        docStuff.forEach(doc => {
          const user = doc.payload.doc.data();
          newArray.push({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            isAdmin: user.isAdmin,
            photoURL: user.photoURL,
            isBlocked: user.isBlocked,
            isSuper: user.isSuper
          });
        });
        return newArray;
      })
  );
  }

  public setIsAdmin(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      isAdmin: true,
      photoURL: user.photoURL,
      isBlocked: user.isBlocked,
      isSuper: user.isSuper
    };
    return userRef.set(data, { merge: true });
  }

  setAsNotAdmin(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      isAdmin: false,
      photoURL: user.photoURL,
      isBlocked: user.isBlocked,
      isSuper: user.isSuper
    };
    return userRef.set(data, { merge: true });
  }
  setBlock(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      isAdmin: false,
      photoURL: user.photoURL,
      isBlocked: true,
      isSuper: user.isSuper
    };
    return userRef.set(data, { merge: true });
  }
  unBlock(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      isAdmin: false,
      photoURL: user.photoURL,
      isBlocked: false,
      isSuper: user.isSuper
    };
    return userRef.set(data, { merge: true });
  }
}
