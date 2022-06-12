import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, shareReplay } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { CartPopupComponent } from '../cart-popup/cart-popup.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public totalItemBadge: any =[]
  mobileMenu: boolean = true
  

  

  openDialog() {
    const dialogRef = this.dialog.open(CartPopupComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  constructor(
    private breakpointObserver: BreakpointObserver, 
    public dialog: MatDialog, 
    private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItemBadge = res.length;
    })
  }
  openMenu(){
    this.mobileMenu =! this.mobileMenu ;
  }
}
