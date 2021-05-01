import {
    Component,
    ComponentFactory,
    ComponentFactoryResolver,
    ComponentRef,
    HostListener,
    OnInit, Type,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import {ModalService} from './modal.service';
export  interface IModaldate {
    component: Type<any>;
    context: any;
}
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
// public product = this.modalService.modalSequence$;
    @ViewChild('modalContent', {read: ViewContainerRef}) private modalContent!: ViewContainerRef;
    public isOpen = false;
    public content: any;
    public componentFactory!: ComponentFactory<any>;
    public modalContentRef!: ComponentRef<any>;

    constructor(private readonly modalService: ModalService, private readonly cfr: ComponentFactoryResolver) {
    }

    public ngOnInit(): void {
        this.modalService.modalSequence$.subscribe((data: IModaldate | null) => {
            if (!data) {
                this.close();
                return;
            }
            const {component, context} = data;
            this.isOpen = true;
            this.componentFactory = this.cfr.resolveComponentFactory(component);
            this.modalContentRef = this.modalContent.createComponent(this.componentFactory);
            /*
            context = {
            product: {},
            save: () =>{},
            close: () =>{}
            }
             */
            Object.keys(context).forEach((key: string) => {
                this.modalContentRef.instance[key] = context[key];
            });
        });
    }

    @HostListener('window:keyup', ['$event.keyCode'])
    public close(code: number = 27): void {
        if (code !== 27) {
            return;
        }
        this.isOpen = false;
        if (this.modalContentRef) {
            this.modalContentRef.destroy();
        }
    }
}
