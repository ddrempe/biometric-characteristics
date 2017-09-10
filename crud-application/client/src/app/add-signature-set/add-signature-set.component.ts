import { Component, Injector } from '@angular/core';
import { AddSignatureSetGenerated } from './add-signature-set-generated.component';

@Component({
  selector: 'add-signature-set',
  templateUrl: './add-signature-set.component.html'
})
export class AddSignatureSetComponent extends AddSignatureSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
