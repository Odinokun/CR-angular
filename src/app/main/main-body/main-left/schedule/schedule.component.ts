import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', ''],
        datasets: [{
          label: 'Earnings',
          data: [80, 105, 310, 70, 105, 405, 110, 203, 115, 220],
          backgroundColor: [
            'rgba(29, 148, 237, 0.1)'
          ],
          borderColor: [
            'rgba(29, 148, 237, 1)',
            'rgba(29, 148, 237, 1)',
            'rgba(29, 148, 237, 1)',
            'rgba(29, 148, 237, 1)',
            'rgba(29, 148, 237, 1)',
            'rgba(29, 148, 237, 1)',
            'rgba(29, 148, 237, 1)',
            'rgba(29, 148, 237, 1)',
            'rgba(29, 148, 237, 1)',
            'rgba(29, 148, 237, 1)'
          ],
          borderWidth: 3,
          lineTension: 0,
          pointBackgroundColor: 'transparent',
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderWidth: '3',
          pointHoverBorderColor: '#00a8ff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              maxTicksLimit: '6'
            },
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          backgroundColor: '#222c3c'
        }
      }
    });
  }

}
