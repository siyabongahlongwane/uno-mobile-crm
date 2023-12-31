import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrderedItemComponent } from './ordered-item/ordered-item.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    SidenavComponent,
    ToolbarComponent,
    OrderSummaryComponent,
    OrderedItemComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ], 
  exports: [FlexLayoutModule, SidenavComponent, ToolbarComponent, MaterialModule, OrderSummaryComponent, OrderedItemComponent, ConfirmDialogComponent]
})
export class SharedModule { }
