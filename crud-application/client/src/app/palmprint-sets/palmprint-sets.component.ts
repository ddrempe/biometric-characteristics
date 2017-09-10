import { Component, Injector } from '@angular/core';
import { PalmprintSetsGenerated } from './palmprint-sets-generated.component';

@Component({
  selector: 'palmprint-sets',
  templateUrl: './palmprint-sets.component.html'
})
export class PalmprintSetsComponent extends PalmprintSetsGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
