import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: "root" })
export class CartService {

  constructor( private http: HttpClient){}

  items = [];
  //加入購物車
  addToCart(product) {
    this.items.push(product);
  }
  //取得購物車內容
  getItems() {
    return this.items;
  }
  //清空購物車
  clearCart() {
    this.items = [];
    return this.items;
  }
  //取得遠端數據
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
