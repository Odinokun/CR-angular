import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // BEGIN progressbar
    const maxCash     = document.getElementById('progressbar__info-max');
    const minCash     = document.getElementById('progressbar__info-min');
    const maxCashVal  = maxCash.dataset.value;
    const minCashVal  = minCash.dataset.value;
    const progressBar = document.getElementById('progressbar__row-min');

    const onePercent = +maxCashVal / 100;
    const progressBarWidth = +minCashVal / onePercent;

    progressBar.style.width = progressBarWidth + '%';
    // END progressbar

  }

}

