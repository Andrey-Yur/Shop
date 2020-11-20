import { Injectable } from '@angular/core'
import { LogService } from './log.service'

@Injectable({ providedIn: 'root'}) // добавлять всегда для регистрации и возможности вставлять другие сервисы
export class AppCounterService{
    counter = 0

    constructor(private logService: LogService ) {
        
    }
    increase() {
        this.logService.log('Increase Counter...')
        this.counter++
    }

    decrease() {
        this.logService.log('Decrease Counter...')
        this.counter--
    }
}