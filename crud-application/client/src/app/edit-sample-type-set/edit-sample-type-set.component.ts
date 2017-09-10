import { Component, Injector } from '@angular/core';
import { EditSampleTypeSetGenerated } from './edit-sample-type-set-generated.component';

@Component({
  selector: 'edit-sample-type-set',
  templateUrl: './edit-sample-type-set.component.html'
})
export class EditSampleTypeSetComponent extends EditSampleTypeSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
