import { Component, Injector } from '@angular/core';
import { FaceSetsGenerated } from './face-sets-generated.component';

@Component({
  selector: 'face-sets',
  templateUrl: './face-sets.component.html'
})
export class FaceSetsComponent extends FaceSetsGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
