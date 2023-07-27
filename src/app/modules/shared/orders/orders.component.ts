import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns = ['name', 'orderNumber', 'packageName', 'amount', 'status', 'dateOrdered', 'dateDelivered', 'action'];
  headerCells = ['Customer', 'Order Number', 'Package Name', 'Amount', 'Status', 'Date Ordered', 'Date Delivered', 'Action'];
  orders: any;

  ngOnInit(): void {
    this.orders = [
      {
        "name": "Siyabonga Hlongwane",
        "orderNumber": "123",
        "packageName": "Nkalakatha",
        "amount": "99",
        "status": "New",
        "dateOrdered": 1690494584793,
        "dateDelivered": 1690494584793,
        "action": ""
    },
    {
      "name": "Siyabonga Hlongwane",
      "orderNumber": "123",
      "packageName": "Nkalakatha",
      "amount": "99",
      "status": "Awaiting Documents",
      "dateOrdered": 1690494584793,
      "dateDelivered": 1690494584793,
      "action": ""
  },
  {
    "name": "Siyabonga Hlongwane",
    "orderNumber": "123",
    "packageName": "Nkalakatha",
    "amount": "99",
    "status": "New",
    "dateOrdered": 1690494584793,
    "dateDelivered": 1690494584793,
    "action": ""
},
{
  "name": "Onyinyechukwu Hlongwane",
  "orderNumber": "123",
  "packageName": "Nkalakatha",
  "amount": "99",
  "status": "Pending Verification",
  "dateOrdered": 1690494584793,
  "dateDelivered": 1690494584793,
  "action": ""
},{
  "name": "Siyabonga Hlongwane",
  "orderNumber": "123",
  "packageName": "Nkalakatha",
  "amount": "99",
  "status": "New",
  "dateOrdered": 1690494584793,
  "dateDelivered": 1690494584793,
  "action": ""
},
{
  "name": "Siyabonga Hlongwane",
  "orderNumber": "123",
  "packageName": "Nkalakatha",
  "amount": "99",
  "status": "New",
  "dateOrdered": 1690494584793,
  "dateDelivered": 1690494584793,
  "action": ""
}
    ]

    this.dataSource = new MatTableDataSource<any>([...this.orders]);
  }
}
