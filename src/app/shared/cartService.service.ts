import { Product } from './product.modle';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

constructor(private db:AngularFireDatabase) { }

  addToCart(product:Product){
    return this.db.object('/cart/'+ product) // here 
  }
}
