import { Component, Injector } from '@angular/core';
import { KeyboardGenerated } from './keyboard-generated.component';

@Component({
  selector: 'keyboard',
  templateUrl: './keyboard.component.html'
})
export class KeyboardComponent extends KeyboardGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
