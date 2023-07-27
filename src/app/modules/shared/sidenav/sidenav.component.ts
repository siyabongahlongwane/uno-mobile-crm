import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnChanges {
  @Input() menuItems: any[] = [];
  @Output() nextRouteEvent = new EventEmitter<string>();
  
  selectedIndex: number = 0;

  constructor(private router: Router){}

  ngOnChanges(changes: SimpleChanges): void {
    this.menuItems = changes?.['menuItems']?.currentValue;
    this.changeRoute(this.selectedIndex);    
  }

  changeRoute(index: number) : void  {
    this.selectedIndex = index;
    this.nextRouteEvent.emit(this.menuItems[this.selectedIndex]['route']);
  }
}
