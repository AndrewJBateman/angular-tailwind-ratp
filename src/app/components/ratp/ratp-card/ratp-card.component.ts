import { Component, Input, OnInit } from '@angular/core';
import { RatpTraffic } from '../models/ratp-traffic';

@Component({
  selector: 'app-ratp-card',
  templateUrl: './ratp-card.component.html'
})
export class RatpCardComponent implements OnInit {
  @Input()
  ratp!: RatpTraffic;

  constructor() { }

  ngOnInit(): void {
  }

}
