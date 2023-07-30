import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './order/order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminContainerComponent,
    DashboardComponent,
    DashboardCardComponent,
    OrdersComponent,
    OrderComponent,
    EditOrderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ChartsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
