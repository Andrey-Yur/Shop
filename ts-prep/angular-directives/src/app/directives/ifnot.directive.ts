import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appIfnot]'
})
export class IfnotDirective {

  @Input('appIfnot') set ifNot(condition: boolean) {
    if (!condition) {
      // Показать элементы
      this.viewContainer.createEmbeddedView(this.templateRef)
    } else {
      // Скрыть
      this.viewContainer.clear()
    }
  }

  constructor (private templateRef: TemplateRef<any>,
  private viewContainer: ViewContainerRef) { }

}
