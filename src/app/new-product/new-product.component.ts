import { Product } from './../shared/product.modle';
import { ProductsService } from "./../shared/get-products.service";
import { Component, OnInit } from "@angular/core";
import { GetCategoryService } from "../shared/get-category.service";
import { format } from "url";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-new-product",
  templateUrl: "./new-product.component.html",
  styleUrls: ["./new-product.component.css"],
})
export class NewProductComponent implements OnInit {
  cat = [];
  product:Product
  id:string;
  constructor(
    private catService: GetCategoryService,
    private prodService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
     this.id = this.route.snapshot.paramMap.get('id')
    if(this.id){
      this.prodService.getProductById(this.id).subscribe(data=>{
        this.product =data;
        console.log(this.product)
      })
    }
  }

  ngOnInit() {
    this.catService.getCategories().subscribe((data) => {
      this.cat = data;
    });
  }

  saveProduct(data) {
    // console.log(data);
    if(this.id){
      this.prodService.updateProduct(this.id,data)
      this.router.navigate(["/my-products"]);
    }else{
      this.prodService.saveNewProduct(data);
      this.router.navigate(["/my-products"]);
      
    }
    
  }

  removeProduct(){
    if(confirm('Do you Wanna Delete it ?')){
      this.prodService.removeProduct(this.id);
      this.router.navigate(["/my-products"]);
    }
  }
}
