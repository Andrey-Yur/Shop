import {Component, NgModule} from '@angular/core';
import {IProduct} from '../../products.service';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-card-confirm',
  templateUrl: './card-confirm.component.html',
  styleUrls: ['./card-confirm.component.css']
})
export class CardConfirmComponent {
public product!: IProduct;
public save!: () => void;
public close!: () => void;


}
@NgModule({
  declarations: [CardConfirmComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule]
})
// @ts-ignore
class CardConfirmModule {}
