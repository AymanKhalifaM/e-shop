import { ProductsService } from "./../shared/get-products.service";
import { Component, OnInit } from "@angular/core";
import { GetCategoryService } from "../shared/get-category.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-new-product",
  templateUrl: "./new-product.component.html",
  styleUrls: ["./new-product.component.css"],
})
export class NewProductComponent implements OnInit {
  cat = [];
  product;
  id: string;
  spinner: boolean = false;
  errorMessage: string;
  constructor(
    private catService: GetCategoryService,
    private prodService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id) {
      this.prodService.getProductById(this.id).subscribe((data) => {
        this.product = data;
        console.log(data);
        console.log(this.product);
      });
    } else {
      this.product = [];
    }
  }

  ngOnInit() {
    this.catService.getCategories().subscribe(
      (data) => {
        this.cat = data;
      },
      (error) => {
        console.log(error); // lsa hazbt el error da
      }
    );
  }

  saveProduct(data) {
    if (this.id) {
      this.spinner = true;
      this.prodService.updateProduct(this.id, data).catch((error) => {
        this.spinner = false;
        this.errorMessage = error.message;
        console.log(this.errorMessage, typeof this.errorMessage, typeof error);
      });
      this.spinner = false;
      // i have to add navigate here
      //this.router.navigate(["/my-products"]);
    } else {
      this.spinner = true;
      this.prodService.saveNewProduct(data).catch((error) => {
        this.spinner = false;
        this.errorMessage = error.message;
        console.log(error);
        console.log(this.errorMessage);
      });
      this.spinner = false;
      // i have to add navigate here
      //this.router.navigate(["/my-products"]);
    }
  }

  removeProduct() {
    if (confirm("Do you Wanna Delete it ?")) {
      this.prodService.removeProduct(this.id);
      this.router.navigate(["/my-products"]);
    }
  }
}
