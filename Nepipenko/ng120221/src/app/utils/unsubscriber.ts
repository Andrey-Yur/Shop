import {Subject} from 'rxjs';
import {OnDestroy} from '@angular/core';

export class UnSubscriber implements OnDestroy{
  public unSubscriber$ = new Subject();

// public sub: Subscription[] = [];
public ngOnDestroy(): void {
  this.unSubscriber$.next();
  this.unSubscriber$.complete();
}
}
