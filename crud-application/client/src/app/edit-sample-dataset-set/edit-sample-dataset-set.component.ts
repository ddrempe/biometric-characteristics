import { Component, Injector } from '@angular/core';
import { EditSampleDatasetSetGenerated } from './edit-sample-dataset-set-generated.component';

@Component({
  selector: 'edit-sample-dataset-set',
  templateUrl: './edit-sample-dataset-set.component.html'
})
export class EditSampleDatasetSetComponent extends EditSampleDatasetSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
