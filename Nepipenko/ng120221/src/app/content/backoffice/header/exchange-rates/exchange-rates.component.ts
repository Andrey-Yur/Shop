import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.css']
})
export class ExchangeRatesComponent implements OnInit {
  public rates: {value: number, currency: string}[] = [
    { value: 10, currency: 'USD'},
    { value: 12, currency: 'CAD'},
    { value: 50, currency: 'RUB'},
  ];
  public mode: 'off'| 'on' = 'on';
  public ms = 4000;
  public ngOnInit(): void {
   }


}
