import { Component, Injector } from '@angular/core';
import { SampleTypeSetsGenerated } from './sample-type-sets-generated.component';

@Component({
  selector: 'sample-type-sets',
  templateUrl: './sample-type-sets.component.html'
})
export class SampleTypeSetsComponent extends SampleTypeSetsGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
