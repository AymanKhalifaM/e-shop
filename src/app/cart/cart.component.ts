import { Product } from './../shared/product.modle';
import { async } from '@angular/core/testing';
import { CartServiceService } from './../shared/cartService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems;
  items: Product[] = []
    ;
  constructor(private cartService: CartServiceService) { }

  async ngOnInit() {
    let cart = await this.cartService.getCart();
    cart.valueChanges().subscribe(cart => {
      this.cartItems = 0;
      for (let prodId in cart.items) {
        this.cartItems += cart.items[prodId].quantity;
        this.items.push(cart.items[prodId].product)
        console.log(this.items)
      }
    })


  }

  // addToCart(prod) {
  //   this.cartService.addToCart(prod)
  // }

  // removeFromCart(prod) {
  //   this.cartService.removeFromCart(prod)

  // }

}
