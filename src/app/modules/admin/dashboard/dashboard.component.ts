import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  cardData: any[] = [
    {
      label: 'Orders',
      icon: 'shopping_cart',
      count: 360
    },
    {
      label: 'Customers',
      icon: 'groups',
      count: 320
    },
    {
      label: 'Leads',
      icon: 'account_circle',
      count: 27
    },
    {
      label: 'Earnings',
      icon: 'attach_money',
      count: 'R5850'
    },
  ];
}
