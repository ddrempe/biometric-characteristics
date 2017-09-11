import { Component, Injector } from '@angular/core';
import { SampleTypeGenerated } from './sample-type-generated.component';

@Component({
  selector: 'sample-type',
  templateUrl: './sample-type.component.html'
})
export class SampleTypeComponent extends SampleTypeGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
