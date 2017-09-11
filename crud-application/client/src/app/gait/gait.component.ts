import { Component, Injector } from '@angular/core';
import { GaitGenerated } from './gait-generated.component';

@Component({
  selector: 'gait',
  templateUrl: './gait.component.html'
})
export class GaitComponent extends GaitGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
