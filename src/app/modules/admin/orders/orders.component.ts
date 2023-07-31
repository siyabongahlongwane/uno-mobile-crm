import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EditOrderComponent } from '../edit-order/edit-order.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource = new MatTableDataSource<any>([]);
  displayedColumns = ['name', 'orderNumber', 'package', 'amount', 'status', 'dateOrdered', 'dateDelivered', 'action'];
  headerCells = ['Customer', 'Order Number', 'Package Name', 'Amount', 'Status', 'Date Ordered', 'Date Delivered', 'Action'];
  orders: any[] = [];

  colorConfig: any = {
    'New': 'white-color light-blue-bg',
    'Pending Verification': 'white-color primary-bg',
    'In Progress': 'white-color navy-bg',
    'Awaiting Documents': 'white-color red-bg',
    'Delivered': 'white-color green-bg'
  };

  packages: any[] = [
    {
      "name": "Hola Nkalakatha",
      "amount": "99"
    },
    {
      "name": "The Hola 20 Steena",
      "amount": "129"
    },
    {
      "name": "The Hola 30 X nice",
      "amount": "149"
    },
    {
      "name": "The Hola 4 X 4 Masihlalisane",
      "amount": "199"
    },
    {
      "name": "The Hola Wonke Bonke",
      "amount": "599"
    },
    {
      "name": "The Hola Ngamla",
      "amount": "899"
    },
  ];
  
  constructor(private router: Router, private dialog: MatDialog, private cd: ChangeDetectorRef){}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.orders = [
      {
        "name": "Siyabonga Hlongwane",
        "orderNumber": "123",
      "package": {
            "name": "Hola Nkalakatha",
            "amount": "99"
        },
        "status": "Awaiting Documents",
        "dateOrdered": 1690494584793,
        "dateDelivered": 1690494584793,
        "portDetails": {
          "requiresPort": false,
          "portNumber": "076 125 9867",
          "networkProvider": "Vodacom"
        },
        "action": "",
        "address": {
          "shipping": {
            "street": "4 Turkmenistan",
            "city": "Roodepoort",
            "province": "Gauteng",
            "code": "2188"
          },
          "billing": {
            "street": "4 Turkmenistan",
            "city": "Roodepoort",
            "province": "Gauteng",
            "code": "2188"
          }
        },
        "contactDetails": {
          "phone": "0786413440",
          "altPhone": "0870125698",
          "email": "test@email.co.za"
        },
        "owner": "test@email.co.za"
      },
      {
        "name": "Siyabonga Hlongwane",
        "orderNumber": "123",
      "package": {
            "name": "Nkalakatha",
            "amount": "99"
        },
        "status": "In Progress",
        "dateOrdered": 1690494584793,
        "dateDelivered": 1690494584793,
        "action": ""
      },
      {
      "name": "Siyabonga Hlongwane",
      "orderNumber": "123",
      "package": {
          "name": "Nkalakatha",
          "amount": "99"
        },
      "status": "Delivered",
      "dateOrdered": 1690494584793,
      "dateDelivered": 1690494584793,
      "action": ""
      },
      {
        "name": "Onyinyechukwu Hlongwane",
        "orderNumber": "123",
      "package": {
            "name": "Nkalakatha",
            "amount": "99"
        },
        "status": "Pending Verification",
        "dateOrdered": 1690494584793,
        "dateDelivered": 1690494584793,
        "action": ""
      },{
        "name": "Siyabonga Hlongwane",
        "orderNumber": "123",
      "package": {
            "name": "Nkalakatha",
            "amount": "99"
        },
        "status": "New",
        "dateOrdered": 1690494584793,
        "dateDelivered": 1690494584793,
        "action": ""
      },
      {
        "name": "Siyabonga Hlongwane",
        "orderNumber": "123",
      "package": {
            "name": "Nkalakatha",
            "amount": "99"
        },
        "status": "New",
        "dateOrdered": 1690494584793,
        "dateDelivered": 1690494584793,
        "action": ""
      },
      {
        "name": "Onyinyechukwu Hlongwane",
        "orderNumber": "123",
      "package": {
            "name": "Nkalakatha",
            "amount": "99"
        },
        "status": "Pending Verification",
        "dateOrdered": 1690494584793,
        "dateDelivered": 1690494584793,
        "action": ""
      },{
        "name": "Siyabonga Hlongwane",
        "orderNumber": "123",
      "package": {
            "name": "Nkalakatha",
            "amount": "99"
        },
        "status": "New",
        "dateOrdered": 1690494584793,
        "dateDelivered": 1690494584793,
        "action": ""
      },
      {
        "name": "Siyabonga Hlongwane",
        "orderNumber": "123",
      "package": {
            "name": "Nkalakatha",
            "amount": "99"
        },
        "status": "New",
        "dateOrdered": 1690494584793,
        "dateDelivered": 1690494584793,
        "action": ""
      }
      ,
      {
        "name": "Onyinyechukwu Hlongwane",
        "orderNumber": "123",
      "package": {
            "name": "Nkalakatha",
            "amount": "99"
        },
        "status": "Pending Verification",
        "dateOrdered": 1690494584793,
        "dateDelivered": 1690494584793,
        "action": ""
      },{
        "name": "Siyabonga Hlongwane",
        "orderNumber": "123",
      "package": {
            "name": "Nkalakatha",
            "amount": "99"
        },
        "status": "New",
        "dateOrdered": 1690494584793,
        "dateDelivered": 1690494584793,
        "action": ""
      },
      {
        "name": "Siyabonga Hlongwane",
        "orderNumber": "123",
      "package": {
            "name": "Nkalakatha",
            "amount": "99"
        },
        "status": "New",
        "dateOrdered": 1690494584793,
        "dateDelivered": 1690494584793,
        "action": ""
      }
    ]
    this.cd.detectChanges();
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

  actionHandler(action: string, data?: any){
    let dialogData = {...data}; 
    switch (action) {
      case 'view':
        this.router.navigate([`admin/orders/${action}/${data?.orderNumber}`]);
        localStorage.setItem('package', JSON.stringify(data));
        break;

      case 'edit':
        dialogData.package = dialogData.package.name;
        let editDialog = this.dialog.open(EditOrderComponent, {
          width: '350px',
          height: '350px',
          hasBackdrop: true,
          disableClose: true,
          data: dialogData
        });
        editDialog.afterClosed().subscribe((res): any => {
          if(res) this.updateOrder(res);
        })
        break;

      case 'delete':
      
        break;
    
      default:
        break;
    }
  }

  updateOrder(updateData: any): void{
    updateData.package = this.packages.find((packageObj: any) => packageObj.name == updateData.package);
  }
}
