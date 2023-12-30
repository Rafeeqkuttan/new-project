import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { product } from '../productmodel';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  showproduct: any = [];
  public addressform = false;
  public totalamount: number = 0;
  constructor(private api: ApiService,
    private router: Router) { }
  ngOnInit(): void {
    this.api.products().subscribe(res => {
      this.showproduct = res;
      this.totalamount = this.api.calculateprice();
      console.log("total amt is", this.totalamount)
    })
  }
  deleteitem(item: product) {
    this.api.removecartitem(item);
  }
  Empty() {
    this.api.removeallitems()
  }
  cancel() {
    this.addressform = false;
  }

  onView() {
    this.router.navigate(['/Product'])

  }
}
