import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import '@firebase/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public firebaseAuth: AngularFireAuth) {}

  login(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.firebaseAuth.setPersistence('none');
      this.firebaseAuth.signInWithPopup(new auth.GoogleAuthProvider()).then(
        (user) => {
          // localStorage.setItem('user', JSON.stringify(user));
          resolve(user);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  logout(): void {
    this.firebaseAuth.signOut();
    localStorage.clear();
  }

  getUser(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.firebaseAuth.authState.subscribe(
        (loggedInUser) => {
          if (loggedInUser) {
            resolve(loggedInUser.getIdToken());
          } else {
            reject(null);
          }
        },
        (err) => {
          console.log(err);
          reject(err);
        }
      );
    });
  }
}
