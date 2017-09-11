import { Component, Injector } from '@angular/core';
import { FingerprintGenerated } from './fingerprint-generated.component';

@Component({
  selector: 'fingerprint',
  templateUrl: './fingerprint.component.html'
})
export class FingerprintComponent extends FingerprintGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
