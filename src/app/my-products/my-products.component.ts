import { Product } from './../shared/product.modle';
import { ProductsService } from './../shared/get-products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {
  products:Product[]=[];
  sarchData:string;
  errorMessage:string;
  constructor(private prodService:ProductsService) { }

  ngOnInit() {
    this.prodService.getAllProudcts().subscribe((prod:Product[])=>{
      this.products = prod;
    }  ,error=>{
      this.errorMessage = error.message;
      console.log(this.errorMessage)
     })
  }

}
