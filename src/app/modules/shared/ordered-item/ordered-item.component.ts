import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ordered-item',
  templateUrl: './ordered-item.component.html',
  styleUrls: ['./ordered-item.component.scss']
})
export class OrderedItemComponent {
  @Input() orderDetails: any;
}
