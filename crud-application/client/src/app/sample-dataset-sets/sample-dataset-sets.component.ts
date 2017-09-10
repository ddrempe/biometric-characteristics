import { Component, Injector } from '@angular/core';
import { SampleDatasetSetsGenerated } from './sample-dataset-sets-generated.component';

@Component({
  selector: 'sample-dataset-sets',
  templateUrl: './sample-dataset-sets.component.html'
})
export class SampleDatasetSetsComponent extends SampleDatasetSetsGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
