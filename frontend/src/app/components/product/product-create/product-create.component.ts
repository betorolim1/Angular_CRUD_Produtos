import { Product } from "./../product.model";
import { Router } from "@angular/router";
import { ProductService } from "./../../../components/product/product.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  atributo = "qualquer";

  product: Product = {
    name: "",
    price: null,
  };

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  fazerAlgo(): void {
    console.log("Fazendo algo!");
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Operação realizada com sucesso");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
