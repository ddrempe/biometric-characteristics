import { Component, Injector } from '@angular/core';
import { AddSampleDatasetSetGenerated } from './add-sample-dataset-set-generated.component';

@Component({
  selector: 'add-sample-dataset-set',
  templateUrl: './add-sample-dataset-set.component.html'
})
export class AddSampleDatasetSetComponent extends AddSampleDatasetSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
