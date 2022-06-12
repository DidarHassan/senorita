import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  header = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { cols: 4, rows: 2 },

        ];
      }

      return [
        { cols: 3, rows: 1 , 
          title:'Who We Are' , 
          subtitle:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.'
      },
        { cols: 3, rows: 1 , 
          title: 'Contact Us', 
          link: 'Beauty and Fashion Accessories', 
          adre: 'Bir Uttam C. R. Dutta Road (new), Karwan Bazar Dhaka, Dhaka-1205 info@fashionaccessories.com 01979-733777'
      },
        { cols: 2, rows: 1 , 
          title: 'Page', 
          link1: 'home', 
          link2: 'About Us', 
          link3: 'Terms and Conditions',
      },
        { cols: 3, rows: 1 ,
          
        },
      ];
    })
  );
  footer = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { cols: 4, rows: 2},

        ];
      }

      return [

      ];
    })
  );



  
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

}
