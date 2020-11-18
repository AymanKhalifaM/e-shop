import { Product } from './product.modle';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map , take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

constructor(private db:AngularFireDatabase) { }

  saveNewProduct(product:Product){
    return this.db.list('/products').push(product)
  }

  updateProduct(poductId,product:Product){
    return this.db.object('/products/'+poductId).update(product)
  }

  removeProduct(productId){
    return this.db.object('/products/'+productId).remove()
  }

  getProductById(productId:string){
    return this.db.object('/products/'+productId).valueChanges().pipe(take(1));
  }


  getAllProudcts(){
    return this.db.list('/products').snapshotChanges().pipe(map(data=>{
      return data.map(doc=>{
        return{
          id:doc.payload.key,
          ...doc.payload.toJSON()
        }
      })
    }))
  }


}
