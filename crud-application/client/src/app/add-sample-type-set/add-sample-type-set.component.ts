import { Component, Injector } from '@angular/core';
import { AddSampleTypeSetGenerated } from './add-sample-type-set-generated.component';

@Component({
  selector: 'add-sample-type-set',
  templateUrl: './add-sample-type-set.component.html'
})
export class AddSampleTypeSetComponent extends AddSampleTypeSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
