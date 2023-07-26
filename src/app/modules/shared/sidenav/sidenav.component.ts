import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnChanges {
  @Input() menuItems: any[] = [];
  currentRoute: string = '';
  constructor(private router: Router){}

  ngOnChanges(changes: SimpleChanges): void {
    this.changeRoute(changes);    
  }
  changeRoute(changes: any) : void  {
    this.currentRoute = this.router.url;
    
    changes?.['menuItems']?.currentValue.forEach((item: any) => {
      if(this.currentRoute.includes(item.route)){
        this.router.navigate([item.route]);
        item.isCurrent = true;
      } 
      else item.isCurrent = false;
    })
  }
}
