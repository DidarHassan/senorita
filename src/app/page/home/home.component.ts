import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
// topCards
  topCards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 4, rows: 1 , imageSrc: 'assets/1.jpg'},
          { title: 'Card 2', cols: 4, rows: 1 , imageSrc: 'assets/2.jpg'},
          { title: 'Card 3', cols: 4, rows: 1 , imageSrc: 'assets/3.jpg'},
          { title: 'Card 4', cols: 4, rows: 1 , imageSrc: 'assets/4.jpg'}
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 2 , imageSrc: 'assets/1.jpg'},
        { title: 'Card 2', cols: 2, rows: 1 , imageSrc: 'assets/2.jpg'},
        { title: 'Card 3', cols: 1, rows: 1 , imageSrc: 'assets/3.jpg'},
        { title: 'Card 4', cols: 1, rows: 1 , imageSrc: 'assets/4.jpg'}
      ];
    })
  );
  tabs = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { cols: 4, rows: 1, addToCartTitle:'Add To Cart'},

        ];
      }

      return [
        { cols: 1, rows: 1, addToCartTitle:'Add To Cart'},
      ];
    })
  );
// slider
  sliders = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { cols: 4, rows: 1,addToCartTitle:'Add To Cart'},
        ];
      }

      return [
        { cols: 4, rows: 1,addToCartTitle:'Add To Cart'},
      ];
    })
  );
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
// gridSlider
  gridSliders = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
      return [{ cols: 4, rows: 1},];}
      return [{ cols: 4, rows: 1,},];}
    )
  );
// gridSlider-view
  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  public AllProduct : any
  
  constructor(
    private breakpointObserver: BreakpointObserver, 
    private api : ApiService, 
    private cartService: CartService) {}

  ngOnInit(): void {
    this.api.getProducts()
    .subscribe(res=>{
      this.AllProduct = res;
      this.AllProduct.forEach((a:any) => {
        Object.assign(a,{quantity:1, total:a.price})
      });
    })
  }
  addtoCart(homeProducts: any){
    this.cartService.addtoCart(homeProducts);
  }
}
