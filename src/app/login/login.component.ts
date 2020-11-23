import { Router } from '@angular/router';
import { User } from "./../auth/user.model";
import { AuthService } from "./../auth/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  // user;
  errMessage;
  constructor(private authService: AuthService, private router:Router) {}

  ngOnInit() {
    this.authService.errMessage.subscribe((err) => {
      this.errMessage = err;
    });
  }

  loginWithFacebook() {
    this.authService.loginWithFacebook();
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }

  login(f) {
    let email = f.email;
    let password = f.password;
    this.authService.loginWithEmailAndPassword(email, password);
  }

  goToSignUp(){
    this.router.navigate(['/signup']);
  }
}
