import { Component, Injector } from '@angular/core';
import { EditFingerprintSetGenerated } from './edit-fingerprint-set-generated.component';

@Component({
  selector: 'edit-fingerprint-set',
  templateUrl: './edit-fingerprint-set.component.html'
})
export class EditFingerprintSetComponent extends EditFingerprintSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
