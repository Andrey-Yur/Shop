import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrderService } from '../shared/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  cartProducts = [];
  totalPrice = 0;
  form: FormGroup;
  submitted = false;
  added = '';

  constructor(
    private productServ: ProductService,
    private orderServ: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartProducts = this.productServ.cartProducts;

    for (let i = 0; i < this.cartProducts.length; i++) {
      this.totalPrice += parseFloat(this.cartProducts[i].price);
    }

    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      payment: new FormControl('Cash'),
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;

    const order = {
      name: this.form.value.name,
      phone: this.form.value.phone,
      address: this.form.value.address,
      payment: this.form.value.payment,
      orders: this.cartProducts,
      price: this.totalPrice,
      date: new Date(),
    };

    this.orderServ.create(order).subscribe((res) => {
      // сервис создания заказа и сброса формы
      this.form.reset();
      this.added = 'Delivery is framed';
      this.submitted = false;
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 2000);
    });
  }
  // удаление заказа(описание и цены)
  delete(product) {
    this.totalPrice -= parseFloat(product.price);
    this.cartProducts.splice(this.cartProducts.indexOf(product), 1);
  }
}
