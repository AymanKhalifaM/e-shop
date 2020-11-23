import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from'firebase/app';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  errMessage = new Subject<string>();
  user: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth, private router: Router , private route:ActivatedRoute) {
    this.user = this.afAuth.authState;
  }

  loginWithFacebook() {
    return this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((res) => {
        console.log(res);
        this.successful();
      })
      .catch((err) => {
        this.errMessage.next(err.message);
        console.log(err);
      });
  }

  loginWithGoogle() {
    return this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((res) => {
        console.log(res);
        this.successful();
      })
      .catch((err) => {
        this.errMessage.next(err.message);
        console.log(err);
      });
  }
  loginWithEmailAndPassword(email, password) {
    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        
        console.log(res);
        this.successful();
      })
      .catch((err) => {
        this.errMessage.next(err.message);
        console.log(err);
      });
  }

  signupWithEmailAndPassword(email, password) {
    this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.successful()
        console.log(res);
      })
      .catch((err) => {
        this.errMessage.next(err.message);
        console.log(err, this.errMessage);
      });
  }

  logout(){
    this.afAuth.auth.signOut()
    this.router.navigate(['/']);
  }

  successful() {
    let url = this.route.snapshot.queryParamMap.get("returnURL") || '/';
    this.router.navigateByUrl(url);
  }
}
