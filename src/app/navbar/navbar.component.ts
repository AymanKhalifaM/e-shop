import { CartServiceService } from './../shared/cartService.service';
import { AuthService } from './../auth/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isMenuCollapsed = true;
  user;
  count;
  constructor(private auhtService: AuthService, private cartService: CartServiceService) { }

  async ngOnInit() {
    let cart = await this.cartService.getCart();
    cart.valueChanges().subscribe(cart => {

      this.count = 0;
      if (cart.items) {
        for (let productId in cart.items) {
          this.count += cart.items[productId].quantity
        }
        console.log(this.count)
      }

    })

    this.auhtService.user.subscribe(user => {
      this.user = user;
      console.log(user)
    })
  }

  logout() {
    this.isMenuCollapsed = true;
    this.auhtService.logout()
  }

  ngOnDestroy() {

  }


}
