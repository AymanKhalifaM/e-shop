import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

constructor(private db:AngularFireDatabase) { }


  getAllProudcts(){
    return this.db.list('/products').snapshotChanges()
  }

  getCategories(){
    return this.db.list('/categories').valueChanges()
  }

}
