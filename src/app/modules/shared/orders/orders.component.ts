import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<any>([]);
  displayedColumns = ['name', 'orderNumber', 'packageName', 'amount', 'status', 'dateOrdered', 'dateDelivered', 'action'];
  headerCells = ['Customer', 'Order Number', 'Package Name', 'Amount', 'Status', 'Date Ordered', 'Date Delivered', 'Action'];
  orders: any;

  objkeys = Object.keys
  colorConfig: any = {
    'New': 'white-color light-blue-bg',
    'Pending Verification': 'white-color primary-bg',
    'In Progress': 'white-color navy-bg',
    'Awaiting Documents': 'white-color red-bg',
    'Delivered': 'white-color green-bg'
  };

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.orders = [
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
        "status": "In Progress",
        "dateOrdered": 1690494584793,
        "dateDelivered": 1690494584793,
        "action": ""
      },
      {
      "name": "Siyabonga Hlongwane",
      "orderNumber": "123",
      "packageName": "Nkalakatha",
      "amount": "99",
      "status": "Delivered",
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
      ,
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
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  setChipBackground(status: string){
    let elementClass = '';
    Object.keys(this.colorConfig).forEach(orderStatus => {
      if(orderStatus === status) elementClass = this.colorConfig[orderStatus]
    });
    return elementClass;
  }

  applyFilter(event: Event) {
    this.dataSource = new MatTableDataSource(this.dataSource.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    const filterValue = (event.target as HTMLInputElement).value;
    if (!filterValue) this.dataSource.data;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
