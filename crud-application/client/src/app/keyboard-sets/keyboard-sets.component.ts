import { Component, Injector } from '@angular/core';
import { KeyboardSetsGenerated } from './keyboard-sets-generated.component';

@Component({
  selector: 'keyboard-sets',
  templateUrl: './keyboard-sets.component.html'
})
export class KeyboardSetsComponent extends KeyboardSetsGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
