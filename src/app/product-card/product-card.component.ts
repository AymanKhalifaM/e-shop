import { Product } from './../shared/product.modle';
import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../shared/get-products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() products:Product;
  @Input() check:Boolean =false;
  noData:boolean =true;
  constructor(private productSer:ProductsService) { }

  ngOnInit() {
    setInterval(()=>{
      this.noData = false;
    },8000)
    
  }

}
