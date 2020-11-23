import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shop';
  constructor(private authService:AuthService, private db:AngularFireDatabase){}
  ngOnInit(){
    this.authService.user.subscribe(user=>{
      if(user){
        this.db.object('/users/'+user.uid).update({
          email:user.email,
          name:user.displayName
        })
      }
    })
  }
  
}
