import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
/**
 * 輸入
 * import { Input } from '@angular/core';
 * 在class put @Input product 這句話表示資料來來源是父組件來
 * 輸出
 * import { Output, EventEmitter } from '@angular/core';
 *  */