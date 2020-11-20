import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
    selector:'[appStyle]'
})
export class StyleDirective {

    @Input('appStyle') color:string = 'blue'
  //  @Input() fontWeight = 'normal' 
    @Input() dStyles:{border?: string, fontWeight?: string, borderRadius?: string}
    
    constructor(private el: ElementRef, private r: Renderer2) {
       // console.log(el)
       // this.r.setStyle(this.el.nativeElement, 'color', 'purple') - ПРАВИЛЬНО!
        //el.nativeElement.style.color = 'salmon' // возможный,но неправильный формат работы с директивой 
    }

    @HostBinding('style.color') elColor = null



    @HostListener('click', ['$event.target']) onClick(event: Event) {
        console.log(event)
    }

    @HostListener('mouseenter') onEnter() {
        this.elColor = this.color
    //   this.r.setStyle(this.el.nativeElement, 'color', this.color)
    // this.r.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight)
    //    this.r.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.fontWeight)
    //    this.r.setStyle(this.el.nativeElement, 'border', this.dStyles.border)
    //    this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius)
    }

    @HostListener('mouseleave') onLeave() {
        this.elColor = null
   //     this.r.setStyle(this.el.nativeElement, 'color', null)
    //     this.r.setStyle(this.el.nativeElement, 'fontWeight', null)
    //   this.r.setStyle(this.el.nativeElement, 'fontWeight', null)
    //     this.r.setStyle(this.el.nativeElement, 'border', null)
    //     this.r.setStyle(this.el.nativeElement, 'borderRadius', null)
    }
}