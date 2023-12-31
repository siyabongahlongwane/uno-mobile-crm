import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-container',
  templateUrl: './admin-container.component.html',
  styleUrls: ['./admin-container.component.scss']
})
export class AdminContainerComponent {
  sidenavItems: any[] =  [
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: '/admin/dashboard'
    },
    {
      icon: 'sim_card',
      label: 'Orders',
      route: '/admin/orders',
      children: ['/admin/orders/view', '/admin/orders/edit']
    },
    // {
    //   icon: 'smartphone',
    //   label: 'Phone Numbers',
    //   route: '/admin/phone-numbers'
    // },
    // {
    //   icon: 'group',
    //   label: 'Users',
    //   route: '/admin/users'
    // },
    // {
    //   icon: 'drafts',
    //   label: 'Manage Emails',
    //   route: '/admin/manage-emails'
    // },
    // {
    //   icon: 'info',
    //   label: 'Requests',
    //   route: '/admin/requests'
    // },
    // {
    //   icon: 'delete',
    //   label: 'Delete my account',
    //   route: '/admin/delete-account'
    // },
  ];

  constructor(private router: Router){
    // const lastRoute = JSON.parse(localStorage.getItem('lastRoute')!);
    // if (lastRoute && lastRoute?.length > 0) this.handleRouteChange(lastRoute);
  }

  handleRouteChange(evt: any): void {
    this.router.navigate([evt]);
  }
}
