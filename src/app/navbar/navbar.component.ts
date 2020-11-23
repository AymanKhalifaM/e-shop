import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMenuCollapsed = true;
  user;
  constructor(private auhtService:AuthService) { }

  ngOnInit() {
    this.auhtService.user.subscribe(user=>{
      this.user=user;
      console.log(user)
    })
  }

  logout(){
    this.isMenuCollapsed = true;
    this.auhtService.logout()
  }


}
