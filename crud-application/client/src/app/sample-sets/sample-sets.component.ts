import { Component, Injector } from '@angular/core';
import { SampleSetsGenerated } from './sample-sets-generated.component';

@Component({
  selector: 'sample-sets',
  templateUrl: './sample-sets.component.html'
})
export class SampleSetsComponent extends SampleSetsGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
