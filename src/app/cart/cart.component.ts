import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  //注入CartService
  //FormBuilder注入
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { 
     this.items = this.cartService.getItems();
     this.checkoutForm = this.formBuilder.group({
      name: '',  address: '' });

  }

  //定義onSubmit()處理表單的方法
  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    
    //完成後，清除資料
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit() {
     
  }

}