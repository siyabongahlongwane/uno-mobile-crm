import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderDetails: any = {packageName: '', amoount: 0};
  orderSummary: any = {};
  constructor() { }

  ngOnInit(): void {
    this.setInputData()
  }

  setInputData(): void{
    let data = JSON.parse(localStorage.getItem('package')!) || {};
    this.orderDetails = {
      packageName: data?.packageName,
      amount: data?.amount
    }

    this.orderSummary = data;
  }
}
