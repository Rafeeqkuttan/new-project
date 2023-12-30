import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products = [{
    productId: 151,
    productType: 'Smart Phone',
    productModel: 'Apple iPhone XR(Red, 128 GB)',
    productDescription: '128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera ',
    productValue: 26728,
    price: 2456,
  }, {
    productId: 152,
    productType: 'Laptop',
    productModel: 'Asus AMD RYZEN',
    productDescription: '4 Gb Ram,1 TB hard drive',
    productValue: 65438,
    price: 6779,

  }, {
    productId: 153,
    productType: 'Laptop',
    productModel: 'Asus Vivobook',
    productDescription: '8 Gb RAM,512 hard drive',
    productValue: 28928,
    price: 2906,
  }]
  detail1 = {
    // myText: 'Hello World',

    productId: 130,
    productType: 'Smart Phone',
    productModel: 'Apple iPhone XR(Red, 128 GB)',
    productDescription: '128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera ',
    productValue: 26728,
    price: 2456,
    discount: 17,
    stock: 28,
    // quantity: 1,
    discountprice(): number {
      return this.price - (this.price * this.discount / 100);
    },
  }

}
