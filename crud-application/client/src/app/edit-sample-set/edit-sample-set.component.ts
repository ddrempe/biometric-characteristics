import { Component, Injector } from '@angular/core';
import { EditSampleSetGenerated } from './edit-sample-set-generated.component';

@Component({
  selector: 'edit-sample-set',
  templateUrl: './edit-sample-set.component.html'
})
export class EditSampleSetComponent extends EditSampleSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
