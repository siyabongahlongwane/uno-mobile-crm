import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminContainerComponent } from './modules/admin/admin-container/admin-container.component';
import { DashboardComponent } from './modules/admin/dashboard/dashboard.component';
import { OrdersComponent } from './modules/admin/orders/orders.component';
import { OrderComponent } from './modules/admin/order/order.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'admin', pathMatch: 'full',
  },
  {
    path: 'admin', component: AdminContainerComponent, children: [
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      },
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'orders', children: [
          {
            path: '', component: OrdersComponent
          },
          {
            path: ':action/:number', component: OrderComponent
          }
        ]
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
