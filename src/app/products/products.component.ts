import { Product } from './../shared/product.modle';
import { GetProductsService } from './../shared/get-products.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product [] = [];
  moka = false;
  cat = [];

  constructor(private productSer:GetProductsService) { }

  ngOnInit() {
    this.productSer.getAllProudcts().pipe(map(data=>{
      return data.map(doc=>{
        return{
          id:doc.payload.key,
          ...doc.payload.toJSON()
        }
      })
    })).subscribe((d:Product[])=>{
     
      this.products = d ;
      console.log(this.products)
    })

    this.productSer.getCategories().pipe(map(x=>{
        for(const key in x){
          this.cat.push(x[key])
          
        }
        return this.cat
        
        
    })).subscribe(data=>{
      console.log(data);
      this.cat = data ;
    })
    
  }

}
