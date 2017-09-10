import { Component, Injector } from '@angular/core';
import { EditSignatureSetGenerated } from './edit-signature-set-generated.component';

@Component({
  selector: 'edit-signature-set',
  templateUrl: './edit-signature-set.component.html'
})
export class EditSignatureSetComponent extends EditSignatureSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
