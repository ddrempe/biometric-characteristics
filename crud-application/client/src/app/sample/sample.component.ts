import { Component, Injector } from '@angular/core';
import { SampleGenerated } from './sample-generated.component';

@Component({
  selector: 'sample',
  templateUrl: './sample.component.html'
})
export class SampleComponent extends SampleGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
