import { Component, Injector } from '@angular/core';
import { AddGaitSetGenerated } from './add-gait-set-generated.component';

@Component({
  selector: 'add-gait-set',
  templateUrl: './add-gait-set.component.html'
})
export class AddGaitSetComponent extends AddGaitSetGenerated {
  constructor(injector: Injector) {
    super(injector);
  }
}
