import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ], 
  exports: [FlexLayoutModule, SidenavComponent]
})
export class SharedModule { }
