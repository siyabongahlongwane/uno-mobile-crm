import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnChanges {
  @Input() menuItems: any[] = [];
  @Output() nextRouteEvent = new EventEmitter<string>();
  
  selectedIndex: number = 0;

  constructor(public router: Router){}

  ngOnChanges(changes: SimpleChanges): void {
    this.menuItems = changes?.['menuItems']?.currentValue;
    this.selectedIndex = JSON.parse(localStorage.getItem('selectedIndex')!);   
  }

  changeRoute(index: number) : void  {
    this.nextRouteEvent.emit(this.menuItems[index]['route']);
    
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
             this.menuItems.forEach((item: any, i: number) => {
              if(this.router.url.includes(item.route)) this.selectedIndex = i;
              else this.selectedIndex = index;
    });
    
        localStorage.setItem('selectedIndex', JSON.stringify(index));
      }
  });

    

  }
}
