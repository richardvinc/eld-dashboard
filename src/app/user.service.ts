import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import '@firebase/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public firebaseAuth: AngularFireAuth) {}

  login(): void {
    console.log('login');
    this.firebaseAuth.signInWithPopup(new auth.GoogleAuthProvider()).then(
      (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        console.log(user);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  logout(): void {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }

  getUser(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.firebaseAuth.authState.subscribe((user) => {
        resolve(user.getIdToken());
      });
    });
  }
}
