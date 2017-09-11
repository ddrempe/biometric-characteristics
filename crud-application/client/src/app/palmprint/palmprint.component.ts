import { Component, Injector } from '@angular/core';
import { PalmprintGenerated } from './palmprint-generated.component';

@Component({
  selector: 'palmprint',
  templateUrl: './palmprint.component.html'
})
export class PalmprintComponent extends PalmprintGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
