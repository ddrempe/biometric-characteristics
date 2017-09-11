import { Component, Injector } from '@angular/core';
import { SignatureGenerated } from './signature-generated.component';

@Component({
  selector: 'signature',
  templateUrl: './signature.component.html'
})
export class SignatureComponent extends SignatureGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
