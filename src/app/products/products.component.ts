import { GetCategoryService } from './../shared/get-category.service';
import { Product } from './../shared/product.modle';
import { ProductsService } from './../shared/get-products.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product [] = [];
  cat = [];
  catFilter;
  spinner:boolean = true ;
  errorMessage;

  constructor(private productSer:ProductsService , private route:ActivatedRoute , private catService:GetCategoryService) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(param=>{
      this.catFilter = param.get('cat') ; 
      console.log(this.catFilter)
    })

    this.productSer.getAllProudcts().subscribe((d:Product[])=>{
      this.products = d ;
      this.spinner = false;
      console.log(this.products)
    },error=>{
     this.errorMessage = error.message;
     console.log(this.errorMessage)
    })

    this.catService.getCategories().subscribe(data=>{
      console.log(data);
      this.cat = data ;
    },error=>{
      this.errorMessage = error.message;
      console.log(this.errorMessage)
     })
    
  }

}
