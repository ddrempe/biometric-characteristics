import { Component, Injector } from '@angular/core';
import { SignatureSetsGenerated } from './signature-sets-generated.component';

@Component({
  selector: 'signature-sets',
  templateUrl: './signature-sets.component.html'
})
export class SignatureSetsComponent extends SignatureSetsGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
