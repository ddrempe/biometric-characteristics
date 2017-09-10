import { Component, Injector } from '@angular/core';
import { GaitSetsGenerated } from './gait-sets-generated.component';

@Component({
  selector: 'gait-sets',
  templateUrl: './gait-sets.component.html'
})
export class GaitSetsComponent extends GaitSetsGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
