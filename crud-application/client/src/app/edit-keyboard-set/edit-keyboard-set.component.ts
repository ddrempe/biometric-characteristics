import { Component, Injector } from '@angular/core';
import { EditKeyboardSetGenerated } from './edit-keyboard-set-generated.component';

@Component({
  selector: 'edit-keyboard-set',
  templateUrl: './edit-keyboard-set.component.html'
})
export class EditKeyboardSetComponent extends EditKeyboardSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
