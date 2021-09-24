import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute,Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products= [{
    productId : '',
    productName : '',
    productType : '',
    price : '',
    quantity : '',
    description : '',
    location : '',
    imageUrl : ''
  }]

  constructor(private router:Router,private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
      this.products.forEach((a:any) =>{
        Object.assign(a,{quantity:1,total:a.price});
      
      });

  })

}
addtocart(item: any){
  this.cartService.addtoCart(item);
}
logout(){
  localStorage.clear()
  this.router.navigate([""]);
}

}
