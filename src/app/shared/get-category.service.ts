import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetCategoryService {

constructor(private db:AngularFireDatabase) { }

getCategories(){
  const arr = [];
  return this.db.list('/categories',ref=>{
    return ref.orderByChild('name')
  }).valueChanges().pipe(map(x=>{
    for(const key in x){
      arr.push(x[key])
      
    }
    return arr;
    
    
}))
}


}
