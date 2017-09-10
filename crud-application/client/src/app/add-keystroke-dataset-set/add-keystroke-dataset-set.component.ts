import { Component, Injector } from '@angular/core';
import { AddKeystrokeDatasetSetGenerated } from './add-keystroke-dataset-set-generated.component';

@Component({
  selector: 'add-keystroke-dataset-set',
  templateUrl: './add-keystroke-dataset-set.component.html'
})
export class AddKeystrokeDatasetSetComponent extends AddKeystrokeDatasetSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
