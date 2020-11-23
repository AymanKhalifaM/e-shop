import { UserService } from './auth/user.service';
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
  constructor(private authService:AuthService, private db:AngularFireDatabase , private userService:UserService){}
  ngOnInit(){
    this.authService.user.subscribe(user=>{
      if(!user){
        return
      } else {
        this.userService.save(user);
      }
    })
  }
  
}
