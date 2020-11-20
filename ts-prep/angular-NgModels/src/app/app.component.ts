import { Component, forwardRef, Provider } from '@angular/core';
import { SwitchComponent } from './switch/switch.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent {
  title = 'angular-NgModels';

  appState = 'on'
  

  handleChange() {
    console.log(this.appState)
    
   
  }
 

}
