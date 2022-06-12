import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart-popup',
  templateUrl: './cart-popup.component.html',
  styleUrls: ['./cart-popup.component.scss']
})
export class CartPopupComponent implements OnInit {

  public addProducts: any =[]
  public addFragrance: any =[]
  public grandTotal !: number
  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    // viewallproduct
    this.cartService.getProducts()
      .subscribe(res=>{
        this.addProducts  =res;
        this.grandTotal = this.cartService.getTotalPrice()
      })
  }
    removeItem(cartItem: any){
    this.cartService.removeItem(cartItem)
  }
  emptyCart(){
    this.cartService.removeAllCart();
  }

}
