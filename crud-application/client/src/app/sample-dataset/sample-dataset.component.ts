import { Component, Injector } from '@angular/core';
import { SampleDatasetGenerated } from './sample-dataset-generated.component';

@Component({
  selector: 'sample-dataset',
  templateUrl: './sample-dataset.component.html'
})
export class SampleDatasetComponent extends SampleDatasetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
