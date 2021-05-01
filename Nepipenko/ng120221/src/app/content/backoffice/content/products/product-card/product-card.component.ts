import {Component, Input} from '@angular/core';

import {IProduct} from '../products.service';
import {ModalService} from '../../../../../modal/modal.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ProductCardComponent {
  @Input() public product!: IProduct;
  @Input() public isOdd!: boolean;
constructor(private readonly modalService: ModalService) {}
public async adToCart(): Promise<void> {
  const {CardConfirmComponent} = await import('./card-confirm/card-confirm.component');
  this.modalService.open({
    component: CardConfirmComponent,
    context: {
      product: {...this.product},
      save: () => {
        console.log('Save');
        this.modalService.close();
      },
      close: () => {
        this.modalService.close();
      }
    }
  });
}
}
