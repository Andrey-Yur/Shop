import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ModalComponent } from './modal/modal.component';
import { RefDerective } from './ref.derective';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(RefDerective, { static: false }) refDir: RefDerective;

  // modal = false
  constructor(
    private resolver: ComponentFactoryResolver,
    private title: Title,
    private meta: Meta
  ) {
    const t = this.title.getTitle();
    //console.log(t)
    this.title.setTitle('APP COMPONENT');
    this.meta.addTags([
      { name: 'keywords', content: 'angular,google,appcomponent' },
      { name: 'description', content: 'this is appcomponent' },
    ]);
  }

  showModal() {
    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent);
    this.refDir.containerRef.clear();

    const component = this.refDir.containerRef.createComponent(modalFactory);
    component.instance.title = 'Dymamic Title';
    component.instance.close.subscribe(() => {
      this.refDir.containerRef.clear();
    });
    
  }
}
