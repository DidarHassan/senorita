import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-beauty-care',
  templateUrl: './beauty-care.component.html',
  styleUrls: ['./beauty-care.component.scss']
})
export class BeautyCareComponent implements OnInit {

public productList : any
  aaaaaaa = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { cols: 4, rows: 1, },
            
        ];
      }

      return [
        { cols: 1, rows: 1, },

      ];
    })
  );
  constructor(private breakpointObserver: BreakpointObserver, private api: ApiService) { }


  ngOnInit(): void {
  }

}
