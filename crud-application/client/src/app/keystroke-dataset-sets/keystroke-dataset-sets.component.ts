import { Component, Injector } from '@angular/core';
import { KeystrokeDatasetSetsGenerated } from './keystroke-dataset-sets-generated.component';

@Component({
  selector: 'keystroke-dataset-sets',
  templateUrl: './keystroke-dataset-sets.component.html'
})
export class KeystrokeDatasetSetsComponent extends KeystrokeDatasetSetsGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
