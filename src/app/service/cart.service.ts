import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartList : any =[];
  public viewAllProduct = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("")// search


  constructor() { }

  getProducts(){
    return this.viewAllProduct.asObservable();
  }
  setProduct(product : any){
    this.cartList.push(...product);
    this.viewAllProduct.next(product);
  }
  addtoCart(product : any){
    this.cartList.push(product);
    this.viewAllProduct.next(this.cartList);
    this.getTotalPrice();
    console.log(this.cartList);
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
    removeItem(product : any){
    this.cartList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartList.splice(index, 1);
      }
    })
    this.viewAllProduct.next(this.cartList);
  }
  removeAllCart(){
    this.cartList = []
    this.viewAllProduct.next(this.cartList);
  }
}

