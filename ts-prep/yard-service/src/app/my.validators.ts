import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from './admin/shared/services/auth.service';
import 'firebase/auth';

export class MyValidators {
  constructor() {}
  static restrictedPhones(control: FormControl): { [key: string]: boolean } {
    if (['50626'].includes(control.value)) {
      return { restrictedPhones: true };
    }
    return null;
  }

  static uniqPhone(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve) => {});
  }
}
