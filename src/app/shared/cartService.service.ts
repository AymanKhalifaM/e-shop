import { ShoppingCart } from './shoppingCart';
import { AuthService } from './../auth/auth.service';
import { UserService } from './../auth/user.service';
import { Product } from './product.modle';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class CartServiceService {
  constructor(
    private db: AngularFireDatabase,
    private authService: AuthService
  ) { }
  userId;

  private create() {
    return this.db.list("/cart").push({
      date: new Date().getTime(),

    });
  }

  async getCart(): Promise<AngularFireObject<ShoppingCart>> {
    let shoppingCartId = await this.getOrCreateCartId()
    return this.db.object("/cart/" + shoppingCartId);
  }

  private getItem(cartId: string, productId: string) {
    return this.db.object("/cart/" + cartId + "/items/" + productId);
  }

  private async getOrCreateCartId() {
    let shoppingCartId = localStorage.getItem("shoppingCartId");
    if (!shoppingCartId) {
      let res = await this.create();
      localStorage.setItem("shoppingCartId", res.key);
      return res.key

    } else {
      return shoppingCartId
    }
  }

  async addToCart(product: Product) {
    let cartId = await this.getOrCreateCartId();
    let items$ = this.getItem(cartId, product.id);
    items$.valueChanges().pipe(take(1)).subscribe((item: Product) => {
      if (item) {
        items$.update({
          quantity: item.quantity + 1
        })
      } else {
        items$.set({
          product: product,
          quantity: 1
        })
      }
    })
  }

  async removeFromCart(product: Product) {
    let cartId = await this.getOrCreateCartId();
    let items$ = this.getItem(cartId, product.id);
    items$.valueChanges().pipe(take(1)).subscribe((item: Product) => {
      if (item) {
        items$.update({
          quantity: item.quantity - 1
        })
      }
    })
  }

  // moka(){
  //    return this.db
  //      .list("/cart")
  //      .valueChanges()

  // }
}
