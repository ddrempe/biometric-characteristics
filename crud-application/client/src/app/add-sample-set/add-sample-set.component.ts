import { Component, Injector } from '@angular/core';
import { AddSampleSetGenerated } from './add-sample-set-generated.component';

@Component({
  selector: 'add-sample-set',
  templateUrl: './add-sample-set.component.html'
})
export class AddSampleSetComponent extends AddSampleSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
