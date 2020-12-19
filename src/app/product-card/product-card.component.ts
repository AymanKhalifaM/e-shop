import { CartServiceService } from './../shared/cartService.service';
import { Product } from './../shared/product.modle';
import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../shared/get-products.service';
import { from } from 'rxjs';

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.css"],
})
export class ProductCardComponent implements OnInit {
  @Input() products: Product;
  @Input() check: Boolean = false;
  @Input() shoppingCart;
  noData: boolean = true;
  constructor(private productSer: ProductsService, private cartService: CartServiceService) { }
  moka = [];
  data: Product[] = [];

  ngOnInit() {
    setInterval(() => {
      this.noData = false;
    }, 8000);

  }

  addToCart() {
    this.cartService.addToCart(this.products);

  }
  removeFromCart() {
    this.cartService.removeFromCart(this.products);
  }
  quantity() {
    if (!this.shoppingCart) return 0;
    let item = this.shoppingCart.items[this.products.id];
    return item ? item.quantity : 0;
  }
}
