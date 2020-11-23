import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-singup",
  templateUrl: "./singup.component.html",
  styleUrls: ["./singup.component.css"],
})
export class SingupComponent implements OnInit {
  constructor(private authService: AuthService , private router:Router) {}
  errMessage;
  ngOnInit() {
    this.authService.errMessage.subscribe((data) => {
      this.errMessage = data;
    });
    console.log(this.errMessage);
  }

  signup(f) {
    let email = f.email;
    let password = f.password;
    this.authService.signupWithEmailAndPassword(email, password);
  }
  goToLogin(){
    this.router.navigate(['/login']);
  }
}
