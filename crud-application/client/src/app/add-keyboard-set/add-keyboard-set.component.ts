import { Component, Injector } from '@angular/core';
import { AddKeyboardSetGenerated } from './add-keyboard-set-generated.component';

@Component({
  selector: 'add-keyboard-set',
  templateUrl: './add-keyboard-set.component.html'
})
export class AddKeyboardSetComponent extends AddKeyboardSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
