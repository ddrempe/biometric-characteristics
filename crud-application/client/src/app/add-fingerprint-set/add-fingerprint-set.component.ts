import { Component, Injector } from '@angular/core';
import { AddFingerprintSetGenerated } from './add-fingerprint-set-generated.component';

@Component({
  selector: 'add-fingerprint-set',
  templateUrl: './add-fingerprint-set.component.html'
})
export class AddFingerprintSetComponent extends AddFingerprintSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
