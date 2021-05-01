import {
  Component,
 // ContentChild,
  EventEmitter,
  OnInit,
  Output,
//  TemplateRef,
  ViewChild,
  // ViewContainerRef
} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})

export class SideMenuComponent implements OnInit {
  @Output() public setSideNavControl: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(true);
  @ViewChild('drawer', {static: true})  public sideMenu!: MatDrawer;
  // @ContentChild('contentTemplate', {static: true})  public contentTemp!: TemplateRef<any>;
  // @ViewChild('contentBlock', {static: true, read: ViewContainerRef})  public block!: ViewContainerRef;
  // constructor() { }
  ngOnInit(): void {
    this.setSideNavControl.emit(this.sideMenu);
    // // console.log(this.contentEl);
    // this.block.createEmbeddedView(this.contentTemp);
    }

}
