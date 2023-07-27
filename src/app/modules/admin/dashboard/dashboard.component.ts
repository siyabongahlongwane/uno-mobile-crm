import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartType } from 'chart.js';


interface Chart {
  title: string;
  labels: Label[];
  data?: any;
  datasets?: any
  type: ChartType,
  colors: any
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  charts: Chart[] = [];
  chartsOptions = {
    scales: {
      yAxes: [{
        display: true,
        ticks: {
          suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
          // OR //
          beginAtZero: true   // minimum value will be 0.
        }
      }]
    }
  };
  cardData: any[] = [
    {
      label: 'Orders',
      icon: 'shopping_cart',
      count: 360
    },
    {
      label: 'Customers',
      icon: 'groups',
      count: 320
    },
    {
      label: 'Leads',
      icon: 'account_circle',
      count: 27
    },
    {
      label: 'Earnings',
      icon: 'attach_money',
      count: 'R5850'
    },
  ];

  constructor(){}

  ngOnInit(): void {
    this.charts = [
      {
        title: `Order Report - ${this.months[new Date().getMonth()]} ${new Date().getFullYear()}`,
        labels: ['New', 'Pending Verification', 'In Progress', 'Awaiting Documents', 'Delivered'],
        datasets: [
          { data: [50,40,100,50,120], label: 'Series A', backgroundColor: ['#000'] },
        ],
        type: 'pie',
        colors: [
          {
            backgroundColor: ["#212158", "#248EB1", "#ffa500", "#c20000", "#149a00"]
          }]
      },
      {
        title: `Order Report - ${this.months[new Date().getMonth()]} ${new Date().getFullYear()}`,
        labels: ['New', 'Pending Verification', 'In Progress', 'Awaiting Documents', 'Delivered'],
        datasets: [
          { data: [50,40,100,50,120], label: '' },
        ],
        type: 'bar',
        colors: [
          {
            backgroundColor: ["#212158", "#248EB1", "#ffa500", "#c20000", "#149a00"]
          }]
      }
    ]


  }
}
