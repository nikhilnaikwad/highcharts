import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css'],
})
export class LineComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.createChart();
  }

  createChart() {
    Highcharts.chart('chart-container', {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Sample Highcharts in Angular',
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      },
      yAxis: {
        title: {
          text: 'Values',
        },
      },
      series: [
        {
          type: 'line',
          name: 'Sample Series',
          data: [10, 20, 30, 40, 50],
        },
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 600
            },
            chartOptions: {
              chart: {
                height: 200
              },
              legend: {
                enabled: false
              }
            }
          }
        ]
      }
    });
  }
}
