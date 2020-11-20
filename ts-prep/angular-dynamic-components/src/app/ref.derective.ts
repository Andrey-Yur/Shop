import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appRef]'
})

export class RefDerective{
    constructor(public containerRef: ViewContainerRef) {
        
    }
}