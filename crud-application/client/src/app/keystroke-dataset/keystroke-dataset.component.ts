import { Component, Injector } from '@angular/core';
import { KeystrokeDatasetGenerated } from './keystroke-dataset-generated.component';

@Component({
  selector: 'keystroke-dataset',
  templateUrl: './keystroke-dataset.component.html'
})
export class KeystrokeDatasetComponent extends KeystrokeDatasetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
