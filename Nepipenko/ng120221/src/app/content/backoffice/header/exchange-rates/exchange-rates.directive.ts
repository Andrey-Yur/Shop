import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';


@Directive({
  selector: '[appExchangeRates]'
})
export class ExchangeRatesDirective implements OnInit{
// tslint:disable-next-line:no-input-rename
@Input('appExchangeRatesFrom') public rates!: {value: number, currency: string}[];
// tslint:disable-next-line:no-input-rename
@Input('appExchangeRatesInterval') public ms = 1000;
@Input('appExchangeRatesAutoplay') public set playAuto(mode: 'off' | 'on') {
    if (!mode){
        return;
    }
    this.autoplay = mode;
}

public context: any;
public autoplay = 'on';
private index = 0;
private intervalId: number | null = null;

  constructor(
      private readonly tpl: TemplateRef<any>,
      private readonly vcr: ViewContainerRef,
  ) { }
public ngOnInit(): void {
    this.context = {
      $implicit: this.rates[this.index],
        controller: {
          next: () => this.next(),
            prev: () => this.prev(),
        }
    };
    this.vcr.createEmbeddedView(this.tpl, this.context);
    this.resetInterval();
}
public next(): void{
      this.resetInterval();
      this.index++;
      if (this.index >= this.rates.length){
          this.index = 0;
      }
      this.context.$implicit = this.rates[this.index];
}
    public prev(): void{
        this.resetInterval();
        this.index--;
        if (this.index < 0){
            this.index = this.rates.length - 1;
        }
        this.context.$implicit = this.rates[this.index];
    }
    private initInterval(): this{
      this.intervalId = setInterval(() => {
       this.next();
      }, this.ms);
      return this;
    }
    private resetInterval(): this {
      if (this.autoplay !== 'on') { return this; }
      this.clearInterval().initInterval();
      return this;
  }
    private clearInterval(): this{
      if (this.intervalId) {
          clearInterval(this.intervalId);
      }
      return this;
    }
}
