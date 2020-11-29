import { AuthService } from './auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private db:AngularFireDatabase,private authService:AuthService) { }

save(user:firebase.User){
  this.db.object("/users/" + user.uid).update({
    email: user.email,
    name: user.displayName,
  });
}


}
