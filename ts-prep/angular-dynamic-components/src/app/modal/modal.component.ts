import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title = 'Default Title'
  @Output() close = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

}
