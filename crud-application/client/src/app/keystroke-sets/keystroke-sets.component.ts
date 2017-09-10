import { Component, Injector } from '@angular/core';
import { KeystrokeSetsGenerated } from './keystroke-sets-generated.component';

@Component({
  selector: 'keystroke-sets',
  templateUrl: './keystroke-sets.component.html'
})
export class KeystrokeSetsComponent extends KeystrokeSetsGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
