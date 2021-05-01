import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {IModaldate} from './modal.component';

@Injectable()
export class ModalService {
  #control$ = new Subject<IModaldate | null>();
  constructor() { }
  public open(data: IModaldate | null): void{
    this.#control$.next(data);
  }
  public close(): void {
    this.#control$.next(null);
  }
  public get modalSequence$(): Observable<any> {
    return this.#control$.asObservable();
  }
}
