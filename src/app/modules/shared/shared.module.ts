import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ], 
  exports: [FlexLayoutModule, SidenavComponent, ToolbarComponent, MaterialModule]
})
export class SharedModule { }
