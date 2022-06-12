import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.scss']
})
export class ViewAllProductComponent implements OnInit {



  constructor(
    private breakpointObserver : BreakpointObserver,
    private api : ApiService,
    private cartService: CartService
  ) { }


  public AllProduct : any;
  searchKey: string=""; // search
  public searchTerm: string=''; // search
  public searchProduct: any ; // category
  value = 'clear me'

  ngOnInit(): void {
    this.api.getProducts()
    .subscribe(res=>{
      this.AllProduct = res;

      // category
      this.searchProduct = res;
      this.AllProduct.forEach((a:any) => {
        Object.assign(a,{quantity:1, total:a.price})
      });
      console.log(this.AllProduct)
    })
    // search
    this.cartService.search.subscribe(val =>{
      this.searchKey = val;
    })// search end
  }

  addtoCart(card: any){
    this.cartService.addtoCart(card);
  }

  // search
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }// search end

  // category
  filter(category: string){
    this.searchProduct = this.AllProduct
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
 }// category end



  viewProduct = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { cols: 4, rows: 1, },
        ];
      }

      return [
        { cols: 1, rows: 1,},
      ];
    })
  );


}
