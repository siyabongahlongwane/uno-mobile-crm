import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    SidenavComponent,
    ToolbarComponent,
    DashboardCardComponent,
    OrdersComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ], 
  exports: [FlexLayoutModule, SidenavComponent, ToolbarComponent, DashboardCardComponent, MaterialModule, OrdersComponent, OrderComponent]
})
export class SharedModule { }
