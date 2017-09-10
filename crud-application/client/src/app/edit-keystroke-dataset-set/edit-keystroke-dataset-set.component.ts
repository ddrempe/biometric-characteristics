import { Component, Injector } from '@angular/core';
import { EditKeystrokeDatasetSetGenerated } from './edit-keystroke-dataset-set-generated.component';

@Component({
  selector: 'edit-keystroke-dataset-set',
  templateUrl: './edit-keystroke-dataset-set.component.html'
})
export class EditKeystrokeDatasetSetComponent extends EditKeystrokeDatasetSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
