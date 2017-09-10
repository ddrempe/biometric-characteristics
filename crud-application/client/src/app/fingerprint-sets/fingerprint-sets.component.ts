import { Component, Injector } from '@angular/core';
import { FingerprintSetsGenerated } from './fingerprint-sets-generated.component';

@Component({
  selector: 'fingerprint-sets',
  templateUrl: './fingerprint-sets.component.html'
})
export class FingerprintSetsComponent extends FingerprintSetsGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
