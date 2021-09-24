import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem : number = 0;
  constructor(private cartServive: CartService) { 
  
  }

  ngOnInit(): void {
    this.cartServive.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

}
